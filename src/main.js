import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCalendarDays, faEllipsisV,faListUl,faGrip,faPlus, faFolderPlus, faArrowUp, faUser, faGear, faMagnifyingGlass, faArrowLeft, faAngleDown, faPrint, faUpDownLeftRight, faCirclePlus, faArrowsUpDownLeftRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFile,faFolder, faCircle, faFloppyDisk, faPenToSquare, faCopy, faCircleQuestion, } from "@fortawesome/free-regular-svg-icons";

const app = createApp(App)
app.use(router)
app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon);
// icons registered here.
library.add(faCalendarDays);
library.add(faAngleDown);
library.add(faFloppyDisk);
library.add(faFile);
library.add(faEllipsisV);
