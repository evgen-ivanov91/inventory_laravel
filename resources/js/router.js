import VueRouter from 'vue-router';
import Vue from 'vue';


Vue.use(VueRouter)


import Users from "./components/views/Users";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import allSystemUnits from "./components/views/allSystemUnits";
import allMonitors from "./components/views/allMonitors";
import allBarcodeScans from "./components/views/allBarcodeScans";
import allMouses from "./components/views/allMouses";
import allKeyboards from "./components/views/allKeyboards";
import allHeadphoneses from "./components/views/allHeadphoneses";
import allSpeakers from "./components/views/allSpeakers";
import allPrinters from "./components/views/allPrinters";
import allScans from "./components/views/allScans";
import allMfps from "./components/views/allMfps";
import allUpss from "./components/views/allUpss";
import allPhotoscans from "./components/views/allPhotoscans";
import allOthers from "./components/views/allOthers";
import allCartridges from "./components/views/allCartridges";
import allCabinets from "./components/views/allCabinets";
import allDepartament from "./components/views/allDepartament";

const routes = [
    {
        path:  '/',
        component: Home
    },
    {
        path:  '/users',
        component: Users
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
        component: allSystemUnits
    },
    {
        path:  '/monitors',
        component: allMonitors
    },
    {
        path:  '/barcodescans',
        component: allBarcodeScans
    },
    {
        path:  '/mouses',
        component: allMouses
    },
    {
        path:  '/keyboards',
        component: allKeyboards
    },
    {
        path:  '/headphoneses',
        component: allHeadphoneses
    },
    {
        path:  '/printers',
        component: allPrinters
    },
    {
        path:  '/scans',
        component: allScans
    },
    {
        path:  '/mfps',
        component: allMfps
    },
    {
        path:  '/ups',
        component: allUpss
    },
    {
        path:  '/photoscans',
        component: allPhotoscans
    },
    {
        path:  '/other',
        component: allOthers
    },
    {
        path:  '/cartridges',
        component: allCartridges
    },
    {
        path:  '/cabinets',
        component: allCabinets
    },
    {
        path:  '/departaments',
        component: allDepartament
    },
];

export default new VueRouter({
    mode:"history",
    routes
});
