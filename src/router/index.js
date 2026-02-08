import { createRouter, createWebHistory } from "vue-router";


import MainLayout from "@/layouts/MainLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import WebsitePage from "@/pages/webdesigns/WebsitePage.vue";
import ProjectPage from "@/pages/projects/ProjectPage.vue";

import ToggleButtons from "@/pages/buttons/ToggleButtons.vue";
import LoadingButtons from "@/pages/buttons/LoadingButtons.vue";
import SplitButtons from "@/pages/buttons/SplitButtons.vue";
import SortFilterButtons from "@/pages/buttons/SortFilterButtons.vue";
import SaveButtons from "@/pages/buttons/SaveButtons.vue";
import OutlineButtons from "@/pages/buttons/OutlineButtons.vue";


import BlogCards from "@/pages/cards/BlogCards.vue";
import ImageCards from "@/pages/cards/ImageCards.vue";
import ActionCards from "@/pages/cards/ActionCards.vue";
import FlipCards from "@/pages/cards/FlipCards.vue";


import LoginForms from "@/pages/forms/LoginForms.vue";
import ContactForms from "@/pages/forms/ContactForms.vue";
import FilterForms from "@/pages/forms/FilterForms.vue";
import MultiStepForms from "@/pages/forms/MultiStepForms.vue";
import SelectForms from "@/pages/forms/SelectForms.vue";
import CheckboxForms from "@/pages/forms/CheckboxForms.vue";


import IconTabs from "@/pages/tabs/IconTabs.vue";
import BasicTabs from "@/pages/tabs/BasicTabs.vue";
import CollapsibleTabs from "@/pages/tabs/CollapsibleTabs.vue";
import FolderTabs from "@/pages/tabs/FolderTabs.vue";

const routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },

      {
        path: "buttons",
        children: [
          { path: "toggle", component: ToggleButtons },
          { path: "loading", component: LoadingButtons },
          { path: "split", component: SplitButtons },
          { path: "sortfilter", component: SortFilterButtons },
          { path: "save", component: SaveButtons },
          { path: "outline", component: OutlineButtons },
        ],
      },

      {
        path: "cards",
        children: [
          { path: "blog", component: BlogCards },
          { path: "image", component: ImageCards },
          { path: "action", component: ActionCards },
          { path: "flip", component: FlipCards },
        ],
      },

      {
        path: "forms",
        children: [
          { path: "login", component: LoginForms },
          { path: "contact", component: ContactForms },
          { path: "filter", component: FilterForms },
          { path: "multi-step", component: MultiStepForms },
          { path: "select", component: SelectForms },
          { path: "checkbox", component: CheckboxForms },
        ],
      },

      {
        path: "tabs",
        children: [
          { path: "icon", component: IconTabs },
          { path: "basic", component: BasicTabs },
          { path: "collapsible", component: CollapsibleTabs },
          { path: "folder", component: FolderTabs },
        ],
      },

      {
        path: "website",
        component: WebsitePage,
      },

      {
        path: "project",
        component: ProjectPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
