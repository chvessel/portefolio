<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const openMenu = ref(null);

const toggleMenu = (menuName) => {
  openMenu.value = openMenu.value === menuName ? null : menuName;
};

const menuItems = [
  { name: "home", label: "Home", path: "/" },
  {
    name: "buttons",
    label: "Buttons",
    path: "/buttons",
    subItems: [
      { label: "Toggle", path: "/buttons/toggle" },
      { label: "Loading", path: "/buttons/loading" },
      { label: "Split", path: "/buttons/split" },
      { label: "SortFilter", path: "/buttons/sortFilter" },
      { label: "Outline", path: "/buttons/outline" },
      { label: "Save", path: "/buttons/save" },
    ],
  },
  {
    name: "cards",
    label: "Cards",
    path: "/cards",
    subItems: [
      { label: "Blog", path: "/cards/blog" },
      { label: "Image", path: "/cards/image" },
      { label: "Action", path: "/cards/action" },
      { label: "Flip", path: "/cards/flip" },
    ],
  },
  {
    name: "forms",
    label: "Forms",
    path: "/forms",
    subItems: [
      { label: "Login", path: "/forms/login" },
      { label: "Contact", path: "/forms/contact" },
      { label: "Filter", path: "/forms/filter" },
      { label: "Multi-step", path: "/forms/multi-step" },
      { label: "Checkbox", path: "/forms/checkbox" },
      { label: "Select", path: "/forms/select" },
    ],
  },
  {
    name: "tabs",
    label: "Tabs",
    path: "/tabs",
    subItems: [
      { label: "Icon", path: "/tabs/icon" },
      { label: "Basic", path: "/tabs/basic" },
      { label: "Collapsible", path: "/tabs/collapsible" },
      { label: "Folder", path: "/tabs/folder" },
    ],
  },
  { name: "website", label: "Webdesigns", path: "/website" },
  { name: "project", label: "Projects", path: "/project" },
];


watch(
  () => route.path,
  (newPath) => {
    const parent = menuItems.find((item) =>
      item.subItems?.some((sub) => sub.path === newPath)
    );
    if (parent) {
      openMenu.value = parent.name;
    }
  },
  { immediate: true }
);

const navigate = (path) => {
  if (path) router.push(path);
};
</script>

<template>
  <aside class="sidebar">
    <header>
      <button type="button" class="sidebar-burger">
        <i class="ai-three-line-horizontal"></i>
      </button>
    </header>

    <ul>
      <li v-for="item in menuItems" :key="item.name">
        <button
          type="button"
          :class="{ active: openMenu === item.name || route.path === item.path }"
          @click="item.subItems ? toggleMenu(item.name) : navigate(item.path)"
        >
          <p>{{ item.label }}</p>
          <i
            v-if="item.subItems"
            class="ai-chevron-down-small"
            :class="{ rotated: openMenu === item.name }"
          ></i>
        </button>

        <transition name="slide">
          <div
            class="sub-menu"
            v-if="item.subItems && openMenu === item.name"
          >
            <ul>
              <li v-for="sub in item.subItems" :key="sub.path">
                <button 
                  type="button" 
                  :class="{ active: route.path === sub.path }"
                  @click="navigate(sub.path)"
                >
                  {{ sub.label }}
                </button>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
button {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: 0.3s;
}

ul {
  list-style: none;
  padding: 0;
}

.sidebar {
  margin: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  border-radius: 30px;
  padding: 0 18px;
  min-height: calc(100vh - 100px);
  background: linear-gradient(
    175deg,
    rgba(0, 0, 0, 0.682),
    rgba(76, 75, 75, 0.109)
  );
  backdrop-filter: blur(80px);
}

.sidebar header {
  display: flex;
  align-items: center;
  height: 72px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.114);
}

.sidebar button {
  display: flex;
  gap: 10px;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  font-size: 23px;
  padding: 0 16px;
  color: rgba(196, 196, 196, 0.95);
}


.sidebar button.active {
  background-color: #3c5037b6;
  color: #ffffff;
}

.sidebar button:hover:not(.active) {
  background-color: rgba(255, 255, 255, 0.1);

}
.sub-menu {
  padding-left: 20px; 
  margin: 5px 0;
}

.sub-menu button {
  font-size: 18px;
  height: 40px; 
  color: rgba(196, 196, 196, 0.7);
}


.sub-menu button.active {
  background-color: #71906a8a;
  color: #ffffff;
  font-weight: 600;
}


.ai-chevron-down-small {
  transition: transform 0.3s ease;
  margin-left: auto;
}

.ai-chevron-down-small.rotated {
  transform: rotate(180deg);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>