import { createRouter, createWebHistory } from "vue-router";
import { mainStore, layoutStore } from "@/main.js";

import { routes } from "./routes.js";

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { top: 0 };
	},
});

router.beforeEach((to, from, next) => {
	const userAuthenticated = mainStore.userAuthenticated;
	const userAdmin = mainStore.userAdmin;
	layoutStore.tooltip.content = "";

	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

	// If route requires authentication and user is not authenticated
	if (requiresAuth && !userAuthenticated) {
		console.log("A");

		return next("/prijava");
	}

	if ((to.path === "/moja-praksa" || to.path === "/stanje-procesa") && mainStore.userAdmin) {
		console.log("b");
		return next("/dashboard");
	}

	if (to.path === "/moja-praksa" && !mainStore.userHasActiveInstance && mainStore.userAuthenticated) {
		return next("/odabir-procesa");
	}

	// If route requires admin role but user isn't admin
	if (requiresAdmin && !userAdmin) {
		console.log("D");

		return next("/moja-praksa");
	}

	// If user is trying to access login or odabir-procesa pages but is already authenticated
	if ((to.path === "/prijava" || to.path === "/odabir-procesa") && userAuthenticated) {
		// Send admins to the dashboard, others to "moja-praksa"
		return next(userAdmin ? "/dashboard" : "/moja-praksa");
	}

	// For any other case, simply proceed
	next();
});

export { router };
