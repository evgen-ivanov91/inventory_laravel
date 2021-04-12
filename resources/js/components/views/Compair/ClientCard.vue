<template>
    <div class="wrapper" :style="{ backgroundColor: inventory ? 'rgb(28, 253, 129)' : '#FA8072'}">
        <div class="card-header" id="unitCard">
            Карточка  {{client.id}}
            <button type="button" class="btn btn-success"  @click="done(client)">Проверено</button>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-show="client.pib"
                :style="{backgroundColor: nameOk ? 'rgb(151, 255, 201)' : 'rgb(252, 228, 168)'}">
                <span>ФИО: {{client.pib}}</span>
                <span><button type="button" class="btn btn-light"  @click="nameOk = !nameOk" >OK</button></span>
            </li>
            <li class="list-group-item" v-show="client.locations"
                :style="{backgroundColor: locationOk ? 'rgb(151, 255, 201)' : 'rgb(252, 228, 168)'}">
                <span> Кабинет: {{client.locations}}</span>
                <span> <button type="button" class="btn btn-light" @click="locationOk = !locationOk">OK</button></span>
            </li>

            <div class="card mb-3" v-for="(tech,index) in client.all_tech" >
                <p>Системный блок</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_monitors" >
                <p>Монитор</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_keyboard" >
                <p>Клавиатура</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_mouse" >
                <span>Мыш</span>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_printer" >
                <p>Принтер</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_mfp" >
                <p>МФУ</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_cartridges" >
                <p>Картриджи</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_ups" >
                <p>Источник бесперебойного питания</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_scan" >
                <p>Сканер</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_photoscan" >
                <p>Фотосканер</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_barcode_scaner" >
                <p>Ручной сканер штрих-кодов</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_headphones" >
                <p>Наушники</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_speakers" >
                <p>Колонки</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>
            <div class="card mb-3" v-for="(tech,index) in client.all_other" >
                <p>Другая техника</p>
                <compair-tech :tech="tech"></compair-tech>
            </div>

        </ul>
    </div>

</template>

<script>
import CompairTech from "./CompairTech";
export default {
    name: "ClientCard",
    components: {CompairTech},
    props:['client'],
    data(){
        return{
            nameOk: false,
            locationOk: false,
            id : '',
            pib : '',
            locations : '',
            phone : '',
            numline : '',
            login : '',
            email : '',
            departament : '',
            position : '',
            dob : '',
            inventory_data: '',
            status: '1',
            inventory: false
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods:{
        done(client){
            const today = new Date();
            this.id = client.id,
            this.pib = client.pib,
            this.locations = client.locations,
            this.phone = client.phone,
            this.numline = client.numline,
            this.login = client.login,
            this.email = client.email,
            this.departament = client.departament,
            this.position = client.position,
            this.dob = client.dob,
            this.inventory_data = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            this.inventory = true
            const data = {
                id: this.id,
                pib: this.pib,
                locations: this.locations,
                departament:this.departament,
                position: this.position,
                phone: this.phone,
                login: this.login,
                email: this.email,
                dob: this.dob,
                numline:this.numline,
                status:this.status,
                inventory_data: this.inventory_data
            }
            console.log(data)
            this.$store.dispatch('ajaxEditClientsInDB', data )
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            this.inventory_data = date;
        }
    }

}
</script>

<style scoped>
.card {
    margin: 10px;
    align-items: center;
}
#unitCard{
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items:center;
}
li{
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items:center;

}
.wrapper{
    border-radius: 5px;
}
</style>
