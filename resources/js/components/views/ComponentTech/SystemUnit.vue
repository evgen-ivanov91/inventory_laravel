<template>
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
                    <label for="InputModel1" class="form-label">Модель</label>
                    <input type="text" class="form-control" id="InputModel1" v-model="model">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Инвентарный номер</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="invNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputserialNum1" class="form-label">Серийный номер</label>
                    <input type="text" class="form-control" id="InputserialNum1" v-model="serialNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputCPU1" class="form-label">CPU</label>
                    <input type="text" class="form-control" id="InputCPU1" v-model="CPU">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputRAM1" class="form-label">RAM</label>
                    <input type="text" class="form-control" id="InputRAM1" v-model="RAM">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputSSD1" class="form-label">SSD</label>
                    <input type="text" class="form-control" id="InputSSD1" v-model="SSD">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputHDD1" class="form-label">HDD</label>
                    <input type="text" class="form-control" id="InputHDD1" v-model="HDD">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputVideoCard1" class="form-label">VideoCard</label>
                    <input type="text" class="form-control" id="InputVideoCard1" v-model="VideoCard">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputLicence1" class="form-label">Licence</label>
                    <input type="text" class="form-control" id="InputLicence1" v-model="Licence">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther11" class="form-label">Other1</label>
                    <input type="text" class="form-control" id="InputOther11" v-model="Other1">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther21" class="form-label">Other2</label>
                    <input type="text" class="form-control" id="InputOther21" v-model="Other2">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther31" class="form-label">Other3</label>
                    <input type="text" class="form-control" id="InputOther31" v-model="Other3">
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
        <div class="card-header allCardHeader">
            <div>
                {{systemUnit.id}}
            </div>
            <div>
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
            </div>

        </div>
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
import VPopup from "../v-popup";
import EditPopup from "../EditPopup";
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
                this.Licence = systemUnit.Licence,
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
        finishEditSystemUnit(){
            const data = {
                id: this.id,
                model: this.model,
                invNum: this.invNum,
                serialNum:this.serialNum,
                Licence: this.Licence,
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
            console.log('1')
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
        }
    },
    computed:{
        Clients(){
            return this.$store.getters.getClients
        }
    }

}
</script>

<style scoped>
.allCardHeader{
    justify-content: space-between;
    display: flex;
}
.edit_item{
    display: flex;
    justify-content: space-between;
    margin: -10px;
}
label{
    width: 30%;
}
input{
    padding: 0 5px;
}
</style>
