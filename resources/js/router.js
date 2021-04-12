import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store/index.js';


Vue.use(VueRouter)


import Users from "./components/views/Client/Users";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import allSystemUnits from "./components/views/allTech/allSystemUnits";
import allMonitors from "./components/views/allTech/allMonitors";
import allBarcodeScans from "./components/views/allTech/allBarcodeScans";
import allMouses from "./components/views/allTech/allMouses";
import allKeyboards from "./components/views/allTech/allKeyboards";
import allHeadphoneses from "./components/views/allTech/allHeadphoneses";
import allSpeakers from "./components/views/allTech/allSpeakers";
import allPrinters from "./components/views/allTech/allPrinters";
import allScans from "./components/views/allTech/allScans";
import allMfps from "./components/views/allTech/allMfps";
import allUpss from "./components/views/allTech/allUpss";
import allPhotoscans from "./components/views/allTech/allPhotoscans";
import allOthers from "./components/views/allTech/allOthers";
import allCartridges from "./components/views/allTech/allCartridges";
import allCabinets from "./components/views/subsidiary/allCabinets";
import allDepartament from "./components/views/subsidiary/allDepartament";
import allPositions from "./components/views/subsidiary/allPositions";
import Compair from "./components/views/Compair/Compair";
import CreateClient from "./components/views/CreateClient";
import CreateSystemUnit from "./components/views/create/CreateSystemUnit";
import CreateKeyboard from "./components/views/create/CreateKeyboard";
import CreateHeadphones from "./components/views/create/CreateHeadphones";
import CreateSpeakers from "./components/views/create/CreateSpeakers";
import CreatePrinter from "./components/views/create/CreatePrinter";
import CreateMfp from "./components/views/create/CreateMfp";
import CreateScan from "./components/views/create/CreateScan";
import CreatePhotoscan from "./components/views/create/CreatePhotoscan";
import CreateOther from "./components/views/create/CreateOther";
import CreateMonitor from "./components/views/create/CreateMonitor";
import createBarcodeScan from "./components/views/create/createBarcodeScan";
import createMouses from "./components/views/create/createMouses";
import CreateUps from "./components/views/create/CreateUps";
import CreateCartridge from "./components/views/create/CreateCartridge";
import allTechnics from "./components/views/allTechnics";
import allSubsidiary from "./components/views/allSubsidiary";

const routes = [
    {
        path:  '/',
        component: Home
    },
    {
        path:  '/users',
        component: Users,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/login',
        component: Login
    },
    {
        path:  '/register',
        component: Register
    },
    {
        path:  '/systemunits',
        component: allSystemUnits,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/monitors',
        component: allMonitors,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/barcodescans',
        component: allBarcodeScans,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/mouses',
        component: allMouses,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/keyboards',
        component: allKeyboards,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/headphoneses',
        component: allHeadphoneses,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/speakers',
        component: allSpeakers,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/printers',
        component: allPrinters,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/scans',
        component: allScans,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/mfps',
        component: allMfps,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/ups',
        component: allUpss,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/photoscans',
        component: allPhotoscans,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/other',
        component: allOthers,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/cartridges',
        component: allCartridges,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/cabinets',
        component: allCabinets,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/departaments',
        component: allDepartament,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/position',
        component: allPositions,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/compair',
        component: Compair,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createclient',
        component: CreateClient,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createcsystemunit',
        component: CreateSystemUnit,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createmonitor',
        component: CreateMonitor,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createbarcodescan',
        component: createBarcodeScan,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createmouse',
        component: createMouses,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createkeyboard',
        component: CreateKeyboard,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createheadphones',
        component: CreateHeadphones,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createspeakers',
        component: CreateSpeakers,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createprint',
        component: CreatePrinter,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createmfp',
        component: CreateMfp,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createscan',
        component: CreateScan,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createups',
        component: CreateUps,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createphotoscan',
        component: CreatePhotoscan,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createother',
        component: CreateOther,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/createcartridge',
        component: CreateCartridge,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/alltechnics',
        component: allTechnics,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
    {
        path:  '/allsubsidiary',
        component: allSubsidiary,
        beforeEnter (to, from, next){
            if(store.getters.isLoggedIn){
                next()
            }else {
                next('/login')
            }
        }
    },
];


export default new VueRouter({
    mode:"history",
    routes
});
