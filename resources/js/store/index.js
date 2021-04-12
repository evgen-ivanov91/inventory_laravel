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
        departaments: [],
        positions: []
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
        getPhotoscans(state){
            return state.photoscans
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
        getPosition(state){
            return state.positions
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
                        console.log(resp)
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
                headers: { Authorization: `Bearer ${token}` }};
                axios
                    .get("api/clients",config)
                    .then(response=>{context.commit('setClients', response.data)})
                    .catch(error=>console.log('ошибка', error))
        },
        ajaxSetClientsToDB({commit}, clients) {
            const token = localStorage.getItem('token')
            axios
                .post('api/clients', clients, { headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }})
                .then(response=>{})
                .catch(e =>{
                    console.log(e.response.data)
                })
        },
        ajaxEditClientsInDB({commit}, clients){
            const token = localStorage.getItem('token')
            axios
                .put(`api/clients/${clients.id}`, clients, { headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`}})
                .then(response =>{
                    console.log(response)
                })
                .catch(e =>{console.log(e.response.data)})
        },
        ajaxDeleteClients({commit}, clients){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/clients/${clients.id}`,
                    { headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }})
                .then(response =>{})
                .catch(e =>{console.log(e.response.data)})
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
                .post('api/systemunits', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}
                })
                .then(response => {})
                .catch(e => {console.log(e.response.data)})
        },
        ajaxEditSystemUnitInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/systemunits/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then(response =>{})
                .catch(e =>{console.log(e.response.data)})
        },
        ajaxDeleteSystemUnit({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/systemunits/${data.id}`, { headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }})
                .then(response =>{})
                .catch(e =>{console.log(e.response.data)})
        },

        ajaxMonitorFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/monitor",config)
                .then(response=>{
                    context.commit('setMonitors', response.data)
                })
                .catch()

        },
        ajaxSetMonitorToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/monitor', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then(response => {})
                .catch(e => {})
        },
        ajaxEditMonitorInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/monitor/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteMonitor({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/monitor/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxBarcodeScanFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/barcode",config)
                .then(response=>{
                    context.commit('setBarcodeScan', response.data)
                })
                .catch()
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
                .then()
                .catch()
        },
        ajaxEditBarcodeScanInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/barcode/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteBarcodeScan({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/barcode/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }})
                .then()
                .catch()
        },

        ajaxMousesFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/compmouses",config)
                .then(response=>{
                    context.commit('setMouse', response.data)
                })
                .catch()
        },
        ajaxSetMouseToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/compmouses', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditMouseInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/compmouses/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteMouse({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/compmouses/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }})
                .then()
                .catch()
        },

        ajaxKeyboardFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/keyboard",config)
                .then(response=>{
                    context.commit('setKeyboard', response.data)
                })
                .catch()
        },
        ajaxSetKeyboardToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/keyboard', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditKeyboardInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/keyboard/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteKeyboard({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/keyboard/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxHeadphonesFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/headphones",config)
                .then(response=>{
                    context.commit('setHeadphones', response.data)})
                .catch()
        },
        ajaxSetHeadphonesToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/headphones', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditHeadphonesInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/headphones/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteHeadphones({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/headphones/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxSpeakersFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/speakers",config)
                .then(response=>{
                    context.commit('setSpeakers', response.data)})
                .catch()

        },
        ajaxSetSpeakersToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/speakers', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditSpeakersInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/speakers/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteSpeakers({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/speakers/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxPrinterFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/printers",config)
                .then(response=>{
                    context.commit('setPrinters', response.data)
                })
                .catch()
        },
        ajaxSetPrinterToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/printers', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditPrinterInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/printers/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeletePrinter({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/printers/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxScansFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/scan",config)
                .then(response=>{
                    context.commit('setScans', response.data)
                })
                .catch()
        },
        ajaxSetScanToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/scan', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditScanInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/scan/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteScan({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/scan/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxMfpFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/mfp",config)
                .then(response=>{
                    context.commit('setMfps', response.data)
                })
                .catch()
        },
        ajaxSetMfpToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/mfp', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditMfpInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/mfp/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteMfp({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/mfp/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxUpsFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/ups",config)
                .then(response=>{
                    context.commit('setUps', response.data)
                })
                .catch()
        },
        ajaxSetUpsToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/ups', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditUpsInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/ups/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteUps({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/ups/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxPhotoscanFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/photoscan",config)
                .then(response=>{
                    context.commit('setPhotoscans', response.data)
                })
                .catch()
        },
        ajaxSetPhotoscanToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/photoscan', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditPhotoscanInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/photoscan/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeletePhotoscan({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/photoscan/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxOtherFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/other",config)
                .then(response=>{
                    context.commit('setOthers', response.data)
                })
                .catch()
        },
        ajaxSetOtherToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/other', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditOtherInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/other/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteOther({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/other/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxCartridgeFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/cartridges",config)
                .then(response=>{
                    context.commit('setCartridges', response.data)
                })
                .catch()
        },
        ajaxSetCartridgeToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/cartridges', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditCartridgeInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/cartridges/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteCartridge({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/cartridges/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxCabinetsFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/cabinets",config)
                .then(response=>{
                    context.commit('setCabinets', response.data)
                })
                .catch()
        },
        ajaxSetCabinetsToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/cabinets', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditCabinetsInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/cabinets/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteCabinets({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/cabinets/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxDepartamentFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/departament",config)
                .then(response=>{
                    context.commit('setDepartaments', response.data)
                })
                .catch()
        },
        ajaxSetDepartamentToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/departament', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditDepartamentInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/departament/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeleteDepartament({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/departament/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },

        ajaxPositionFromDB(context){
            const token = localStorage.getItem('token')
            const config = {headers: { Authorization: `Bearer ${token}` }};
            axios
                .get("api/positions",config)
                .then(response=>{
                    context.commit('setPosition', response.data)
                })
                .catch()
        },
        ajaxSetPositionToDB({commit}, data) {
            const token = localStorage.getItem('token')
            axios
                .post('api/positions', data, {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxEditPositionInDB({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .put(`api/positions/${data.id}`, data, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
        },
        ajaxDeletePosition({commit}, data){
            const token = localStorage.getItem('token')
            axios
                .delete(`api/positions/${data.id}`, { headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`}})
                .then()
                .catch()
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
        setPosition(state, data){
            return state.positions = data
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
        }
    }
})
