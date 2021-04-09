import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        status: '',
        clients: [],
        token: localStorage.getItem('token') || '',
        user : [],
        systemUnits:[],
        monitors: [],
        barcodeScans:[],
        mouses: [],
        keyboards:[],
        headphoneses: [],
        speakers: [],
        printers: [],
        scans: [],
        mfps: [],
        upss: [],
        photoscans: [],
        others: [],
        cartridges:[],
        cabinets: [],
        departaments: []
    },
    getters:{
        getClients(state){
            return state.clients
        },
        getSystemUnits(state){
            return state.systemUnits
        },
        getMonitors(state){
            return state.monitors
        },
        getBarcodeScans(state){
            return state.barcodeScans
        },
        getMouses(state){
            return state.mouses
        },
        getKeyboards(state){
            return state.keyboards
        },
        getHeadphoneses(state){
            return state.headphoneses
        },
        getSpeakerses(state){
            return state.speakers
        },
        getPrinters(state){
            return state.printers
        },
        getScans(state){
            return state.scans
        },
        getMfps(state){
            return state.mfps
        },
        getUps(state){
            return state.upss
        },
        getOthers(state){
            return state.others
        },
        getCartridges(state){
            return state.cartridges
        },
        getCabinets(state){
            return state.cabinets
        },
        getDepartaments(state){
            return state.departaments
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

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
                axios
                    .get("api/clients",config)
                    .then(response=>{

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
                .post('api/clients', clients, { headers: {
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
        },
        ajaxEditClientsInDB({commit}, clients){
            const token = localStorage.getItem('token')
            console.log(clients)
            axios
                .put(`api/clients/${clients.id}`,
                    clients,
                    { headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }})
                .then(response =>{
                    console.log(clients)
                    console.log(response)
                })
                .catch(e =>{
                    console.log('ВСЕ ХЕРОВО!')
                    console.log(clients)
                console.log(e.response.data)
            })
        },
        ajaxDeleteClients({commit}, clients){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/clients/${clients.id}`,
                    { headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }})
                .then(response =>{
                    console.log(clients)
                    console.log(response)
                })
                .catch(e =>{
                    console.log('ВСЕ ХЕРОВО!')
                    console.log(clients)
                    console.log(e.response.data)
                })
        },

        ajaxSystemUnitFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/systemunits",config)
                .then(response=>{

                    context.commit('setSystemUnits', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetSystemUnitToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/systemunits', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxMonitorFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/monitor",config)
                .then(response=>{

                    context.commit('setMonitors', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetMonitorToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/monitor', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxBarcodeScanFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/barcode",config)
                .then(response=>{

                    context.commit('setBarcodeScan', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetBarcodeScanToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/barcode', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxMousesFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/compmouses",config)
                .then(response=>{

                    context.commit('setMouse', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetMouseToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/compmouses', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxKeyboardFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/keyboard",config)
                .then(response=>{

                    context.commit('setKeyboard', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetKeyboardToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/keyboard', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxHeadphonesFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/headphones",config)
                .then(response=>{

                    context.commit('setHeadphones', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetHeadphonesToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/headphones', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxSpeakersFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/speakers",config)
                .then(response=>{

                    context.commit('setSpeakers', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetSpeakersToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/speakers', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxPrinterFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/printers",config)
                .then(response=>{

                    context.commit('setPrinters', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetPrinterToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/printers', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxScansFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/scan",config)
                .then(response=>{

                    context.commit('setScans', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetScanToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/scan', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxMfpFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/mfp",config)
                .then(response=>{

                    context.commit('setMfps', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetMfpToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/mfp', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxUpsFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/ups",config)
                .then(response=>{

                    context.commit('setUps', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetUpsToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/ups', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxPhotoscansFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/photoscan",config)
                .then(response=>{

                    context.commit('setPhotoscans', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetPhotoscanToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/photoscan', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxOtherFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/other",config)
                .then(response=>{

                    context.commit('setOthers', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetOtherToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/other', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxCartridgeFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/cartridges",config)
                .then(response=>{

                    context.commit('setCartridges', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetCartridgeToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/cartridges', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxCabinetsFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/cabinets",config)
                .then(response=>{

                    context.commit('setCabinets', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetCabinetsToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/cabinets', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },

        ajaxDepartamentFromDB(context){
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .get("api/departament",config)
                .then(response=>{

                    context.commit('setDepartaments', response.data)
                })
                .catch(error=>console.log('ошибка', error))

        },
        ajaxSetDepartamentToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/departament', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('OK')
                    console.log(data)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e.response.data)
                })
        },
    },
    mutations:{
        setClients(state, data){
            return state.clients = data
        },
        setSystemUnits(state, data){
            return state.systemUnits = data
        },
        setMonitors(state, data){
            return state.monitors = data
        },
        setBarcodeScan(state, data){
            return state.barcodeScans = data
        },
        setMouse(state, data){
            return state.mouses = data
        },
        setKeyboard(state, data){
            return state.keyboards = data
        },
        setHeadphones(state, data){
            return state.headphoneses = data
        },
        setSpeakers(state, data){
            return state.speakers = data
        },
        setPrinters(state, data){
            return state.printers = data
        },
        setScans(state, data){
            return state.scans = data
        },
        setMfps(state, data){
            return state.mfps = data
        },
        setUps(state, data){
            return state.upss = data
        },
        setPhotoscans(state, data){
            return state.photoscans = data
        },
        setOthers(state, data){
            return state.others = data
        },
        setCartridges(state, data){
            return state.cartridges = data
        },
        setCabinets(state, data){
            return state.cabinets = data
        },
        setDepartaments(state, data){
            return state.departaments = data
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
    }

})
