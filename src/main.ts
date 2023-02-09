import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import './assets/css/index.css'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import { Calendar, DatePicker } from 'v-calendar';
import SetupCalendar from "v-calendar"
import 'v-calendar/dist/style.css'

    createApp(App).use(router)
                .use(VueLazyLoad, {
                    loading: '',
                    error: ''
                })
                .use(SetupCalendar, {})
                .component('Calendar', Calendar)
                .component('DatePicker', DatePicker)
                .mount('#app')
                
