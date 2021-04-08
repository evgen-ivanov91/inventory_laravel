import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
// import auth from '../auth.js';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        status: '',
        clients: {},
        token: localStorage.getItem('token') || '',
        user : {}
    },
    getters:{
        getClients(state){
            return state.clients
        },
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,

    },
    actions:{
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'api/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'api/register', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },




        ajaxClientsFromDB(context){
            const token = localStorage.getItem('token')
            console.log(token)
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
                axios
                    .get("api/Clients",config)
                    .then(response=>{
                        console.log(response)
                        context.commit('setClients', response.data)
                    })
                    .catch(error=>console.log('ошибка', error))


            //
            // const token = localStorage.getItem('token')
            // // console.log(token)
            // axios
            //     .get("api/Clients",{
            //         headres: {
            //             Authorization: 'Bearer' + token
            //         }})
            //     .then(response=>{
            //         console.log(response)
            //         context.commit('setClients', response.data)
            //     })
            //     .catch(error=>console.log('ошибка', error))
        },
         ajaxSetClientsToDB({commit}, clients) {
            const token = localStorage.getItem('token')
            console.log(token)
            console.log(clients)
            // const config = {headers: {Authorization: `Bearer ${token}`}};
            // axios({url: 'api/Clients', data: client, method: 'POST' }, config)
            //  axios.post(‘https://site.ru/api/Login.php’, { data: user }, { headers: { ‘content-type’: ‘application/x-www-form-urlencoded’ } })
            axios
                .post('api/Clients', clients, { headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }})
                .then(response=>{
                    // if(response.data.status){
                        console.log('OK')
                    console.log(clients)
                    console.log(response)
                    // }
                })
                .catch(e =>{
                    console.log(e.response.data)
                })
        }
    },
    mutations:{
        setClients(state, data){
            return state.clients = data
        },
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
        ajaxSetClientsToDB(state,payload){
            state.clients.push(payload)
        },
    },
    // modules: {
    //     auth
    // }


})
