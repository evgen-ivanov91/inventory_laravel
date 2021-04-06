import VueRouter from 'vue-router';
import Vue from 'vue';


Vue.use(VueRouter)


import Users from "./components/views/Users";
import Home from "./components/views/Home";
import Login from "./components/views/Login";

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
    }
];

export default new VueRouter({
    mode:"history",
    routes
});
