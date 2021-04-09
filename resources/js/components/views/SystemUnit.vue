<template>

<!--    model	invNum	serialNum	CPU	RAM	SSD	HDD	VideoCard
Licence	Other1	Other2	Other3	systemUnit_id	created_at	updated_at	-->
    <div class="container">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deleteSystemUnit(systemUnit)"
        >
            <div class="div">
                <p>удаление</p>
                {{systemUnit.id}}
            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditSystemUnit(systemUnit)"
        >
            <div style="width: 60%">
                <div class="mb-3 edit_item">
                    <label for="InputModel" class="form-label">Модель</label>
                    <input type="text" class="form-control" id="InputModel" v-model="model">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputinvNum" class="form-label">Кабинет</label>
                    <input type="text" class="form-control" id="InputinvNum" v-model="invNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputserialNum" class="form-label">Отдел</label>
                    <input type="text" class="form-control" id="InputserialNum" v-model="serialNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputCPU" class="form-label">CPU</label>
                    <input type="text" class="form-control" id="InputCPU" v-model="CPU">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputRAM" class="form-label">RAM</label>
                    <input type="text" class="form-control" id="InputRAM" v-model="RAM">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputSSD" class="form-label">SSD</label>
                    <input type="text" class="form-control" id="InputSSD" v-model="SSD">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputHDD" class="form-label">HDD</label>
                    <input type="text" class="form-control" id="InputHDD" v-model="HDD">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputVideoCard" class="form-label">VideoCard</label>
                    <input type="text" class="form-control" id="InputVideoCard" v-model="VideoCard">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputLicence" class="form-label">Licence</label>
                    <input type="text" class="form-control" id="InputLicence" v-model="Licence">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther1" class="form-label">Other1</label>
                    <input type="text" class="form-control" id="InputOther1" v-model="Other1">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther2" class="form-label">Other2</label>
                    <input type="text" class="form-control" id="InputOther2" v-model="Other2">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther3" class="form-label">Other3</label>
                    <input type="text" class="form-control" id="InputOther3" v-model="Other3">
                </div>
                <div class="mb-3 edit_item">
                    <select v-model="client_id">
                        <option value="">Выберите пользователя</option>
                        <option v-for="client in Clients"
                                :value="client.id"
                                :key="client.id"
                        >{{client.pib}}</option>
                    </select>
                </div>
            </div>
        </edit-popup>

        <button type="button"
                class="btn btn-danger"
                @click="showPopup"
        >
            Удалить
        </button>
        <button type="button"
                class="btn btn-info"
                @click="showEdit(); editSystemUnit(systemUnit)"
        >
            edit
        </button>

        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{systemUnit.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{systemUnit.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{systemUnit.serialNum}}</li>
            <li class="list-group-item" >Процессор:{{systemUnit.CPU}}</li>
            <li class="list-group-item" >Оперативная память:{{systemUnit.RAM}}</li>
            <li class="list-group-item" >Твердотелый накопитель:{{systemUnit.SSD}}</li>
            <li class="list-group-item" >Жесткий диск:{{systemUnit.HDD}}</li>
            <li class="list-group-item" >Видеокарта:{{systemUnit.VideoCard}}</li>
            <li class="list-group-item" >Лицензии:{{systemUnit.Licence}}</li>
            <li class="list-group-item" >Другое:{{systemUnit.Other1}}</li>
            <li class="list-group-item" >Другое:{{systemUnit.Other2}}</li>
            <li class="list-group-item" >Другое:{{systemUnit.Other3}}</li>
            <li class="list-group-item" >Пользователь:{{systemUnit.client_id}}</li>
        </ul>
    </div>
</template>

<script>
import VPopup from "./v-popup";
import EditPopup from "./EditPopup";
export default {
name: "SystemUnit",
    props: ['systemUnit'],
    components: {EditPopup, VPopup},
    data(){
        return{
            clients: [],
            id : '',
            model : '',
            invNum : '',
            serialNum : '',
            CPU : '',
            RAM : '',
            SSD : '',
            HDD : '',
            VideoCard : '',
            Licence : '',
            Other1: '',
            Other2: '',
            Other3: '',
            client_id: '',
            isPopupVisible: false,
            isEditVisible: false
        }
    },
    mounted() {
        this.loadClients();
    },
    methods:{
        showEdit(){
            this.isEditVisible = true;
        },
        closeEdit(){
            this.isEditVisible = false;
        },
        showPopup(){
            this.isPopupVisible = true;
        },
        closePopup(){
            this.isPopupVisible = false;
        },
        editSystemUnit(systemUnit){
                this.id = systemUnit.id,
                this.model = systemUnit.model,
                this.invNum = systemUnit.invNum,
                this.serialNum = systemUnit.serialNum,
                this.CPU = systemUnit.CPU,
                this.RAM = systemUnit.RAM,
                this.SSD = systemUnit.SSD,
                this.HDD = systemUnit.HDD,
                this.VideoCard = systemUnit.VideoCard,
                this.Other1 = systemUnit.Other1,
                this.Other2 = systemUnit.Other2,
                this.Other3 = systemUnit.Other3,
                this.client_id = systemUnit.client_id
        },
        finishEditSystemUnit(systemUnit){
            const data = {
                id: this.id,
                model: this.model,
                invNum: this.invNum,
                serialNum:this.serialNum,
                CPU: this.CPU,
                RAM: this.RAM,
                SSD: this.SSD,
                HDD: this.HDD,
                VideoCard: this.VideoCard,
                Other1:this.Other1,
                Other2:this.Other2,
                Other3:this.Other3,
                client_id:this.client_id
            }
            this.$store.dispatch('ajaxEditSystemUnitInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch(err => console.log(err))

        },
        deleteSystemUnit(systemUnit){
            this.$store.dispatch('ajaxDeleteSystemUnit', systemUnit )
                .then(() => this.$emit('open'))
                .catch(err => console.log(err))
        },
        loadClients(){
            this.$store.dispatch('ajaxClientsFromDB')
        },
    },
    computed:{
        Clients(){
            return this.$store.getters.getClients
        }
    }

}
</script>

<style scoped>
.edit_item{
    display: flex;
}
</style>
