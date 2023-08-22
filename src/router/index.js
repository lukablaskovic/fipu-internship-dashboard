import { createRouter, createWebHashHistory } from "vue-router";
import { mainStore } from "@/main.js";

const routes = [
  {
    meta: {
      title: "Dashboard",
      requiresAuth: true,
      requiresAdmin: false,
    },
    path: "/",
    name: "default",
    component: () => import("@/views/DashboardView.vue"),
  },
  {
    meta: {
      title: "Students",
      requiresAuth: true,
      requiresAdmin: true,
    },
    path: "/students",
    name: "students",
    component: () => import("@/views/StudentsView.vue"),
  },
  {
    meta: {
      title: "Moja praksa",
      requiresAuth: true,
      requiresAdmin: false,
    },
    path: "/moja-praksa",
    name: "moja praksa",
    component: () => import("@/views/MyInternship.vue"),
  },
  {
    meta: {
      title: "Dashboard",
      requiresAuth: true,
      requiresAdmin: true,
    },
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
  },

  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "Moja praksa",
      requiresAuth: true,
    },
    path: "/moja-praksa",
    name: "moja praksa",
    component: () => import("@/views/MyInternshipView.vue"),
  },
  {
    meta: {
      title: "Dostupni zadaci",
      requiresAuth: false,
    },
    path: "/dostupni-zadaci",
    name: "dostupni-zadaci",
    component: () => import("@/views/AvailableAssignmentsView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Prijava",
      requiresAuth: false,
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Registracija",
      requiresAuth: false,
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    meta: {
      title: "BPMN - Models",
      requiresAuth: false,
    },
    path: "/bpmn/models",
    name: "bpmn_models",
    component: () => import("@/views/BPMN_ENGINE/ModelsView.vue"),
  },
  {
    meta: {
      title: "BPMN - Microservices",
      requiresAuth: false,
    },
    path: "/bpmn/microservices",
    name: "bpmn_microservices",
    component: () => import("@/views/BPMN_ENGINE/ModelsView.vue"),
  },
  {
    meta: {
      title: "BPMN - Modeler",
      requiresAuth: false,
    },
    path: "/bpmn/modeler",
    name: "bpmn_modeler",
    component: () => import("@/views/BPMN_ENGINE/ModelerView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  let userAuthenticated = mainStore.userAuthenticated;
  let userAdmin = mainStore.userAdmin;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAuth && !userAuthenticated) {
    next("/login");
  } else if (to.path === "/login" && userAuthenticated && !userAdmin) {
    next("/moja-praksa");
  } else if (to.path === "/login" && userAuthenticated && userAdmin) {
    next("/dashboard");
  } else if (requiresAdmin && !userAdmin && userAuthenticated) {
    next("/moja-praksa");
  } else {
    next();
  }
});

export default router;
