import {
  mdiMonitor,
  mdiAccountMultiple,
  mdiEngine,
  mdiDomain,
  mdiClipboardText,
  mdiClipboardCheck,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Nadzorna ploča",
  },
  {
    to: "/students",
    icon: mdiAccountMultiple,
    label: "Studenti",
  },
  {
    to: "/dostupni-zadaci",
    icon: mdiClipboardText,
    label: "Zadaci",
  },
  {
    to: "/alokacije-javno",
    icon: mdiClipboardCheck,
    label: "Alokacije",
  },
  {
    to: "/poslodavci",
    icon: mdiDomain,
    label: "Poslodavci",
  },

  {
    label: "BPMN Engine",
    icon: mdiEngine,
    menu: [
      {
        to: "/bpmn/models",
        label: "Models",
      },
      {
        to: "/bpmn/microservices",
        label: "Mikroservisi",
      },
      {
        to: "/bpmn/modeler",
        label: "Modeler",
      },
      {
        label: "PDF Generator",
      },
    ],
  },
];
