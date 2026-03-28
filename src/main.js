import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { 
  faHouse, 
  faEnvelope, 
  faBell, 
  faCalendar, 
  faUser, 
  faGear,
  faCalendarDays, 
  faSync, 
  faSpinner, 
  faEllipsisV, 
  faListUl, 
  faGrip, 
  faPlus, 
  faFolderPlus, 
  faArrowUp, 
  faCreditCard, 
  faTv,         
  faTasks, 
  faMagnifyingGlass, 
  faArrowLeft, 
  faAngleDown, 
  faPrint, 
  faUpDownLeftRight, 
  faCirclePlus, 
  faArrowsUpDownLeftRight, 
  faTrashCan 
} from "@fortawesome/free-solid-svg-icons";


import { 
  faFile, 
  faFolder, 
  faCircle, 
  faFloppyDisk, 
  faPenToSquare, 
  faCopy, 
  faCircleQuestion 
} from "@fortawesome/free-regular-svg-icons";


library.add(
  faHouse, faEnvelope, faBell, faCalendar, faUser, faGear,
  faCalendarDays, faSync, faSpinner, faEllipsisV, faListUl, 
  faGrip, faPlus, faFolderPlus, faArrowUp, faCreditCard, 
  faTv, faTasks, faMagnifyingGlass, faArrowLeft, faAngleDown, 
  faPrint, faUpDownLeftRight, faCirclePlus, faArrowsUpDownLeftRight, 
  faTrashCan, faFile, faFolder, faCircle, faFloppyDisk, 
  faPenToSquare, faCopy, faCircleQuestion
);

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')