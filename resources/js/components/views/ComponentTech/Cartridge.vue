<template>
    <div class="wrapper">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deleteCartridge(cartridge)"
        >
            <div class="div">
                <p>Будет удалена запись № {{cartridge.id}}</p>

            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditCartridge(cartridge)"
        >
            <div style="width: 60%">
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Инвентарный номер</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="invNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="Inputtake1" class="form-label">Дата приема</label>
                    <input type="date" class="form-control" id="Inputtake1" v-model="take">
                </div>
                <div class="mb-3 edit_item">
                    <label for="Inputfueled1" class="form-label">Дата заправки</label>
                    <input type="date" class="form-control" id="Inputfueled1" v-model="fueled">
                </div>
                <div class="mb-3 edit_item">
                    <label for="Inputissued1" class="form-label">Дата выдачи</label>
                    <input type="date" class="form-control" id="Inputissued1" v-model="issued">
                </div>
                <div class="mb-3 edit_item">
                    <label for="Inputstatus1" class="form-label">Статус</label>

                    <select name="" id="Inputstatus1" v-model="status">
                        <option value="1">Принят</option>
                        <option value="2">Ожидает заправку</option>
                        <option value="3">Выдан</option>
                    </select>
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
                {{cartridge.id}}
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
                        @click="showEdit(); editCartridge(cartridge)"
                >
                    edit
                </button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{cartridge.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{cartridge.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{cartridge.serialNum}}</li>
            <li class="list-group-item" >Совместимость:{{cartridge.compatibility}}</li>
            <li class="list-group-item" >Дата приема:{{cartridge.take}}</li>
            <li class="list-group-item" >Дата заправки:{{cartridge.fueled}}</li>
            <li class="list-group-item" >Дата выдачи:{{cartridge.issued}}</li>
            <li class="list-group-item" >Пользователь:{{cartridge.client_id}}</li>
        </ul>
    </div>
</template>

<script>
import EditPopup from "../EditPopup";
import VPopup from "../v-popup";

export default {
    name: "Cartridge",
    props: ['cartridge'],
    components: {EditPopup, VPopup},
    data(){
        return{
            clients: [],
            id : '',
            model : '',
            invNum : '',
            serialNum : '',
            compatibility: '',
            take: '',
            fueled: '',
            issued: '',
            client_id: '',
            status:'',
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
        editCartridge(cartridge){
            this.id = cartridge.id,
                this.model = cartridge.model,
                this.invNum = cartridge.invNum,
                this.serialNum = cartridge.serialNum,
                this.compatibility = cartridge.compatibility,
                this.take = cartridge.take,
                this.fueled = cartridge.fueled,
                this.issued = cartridge.issued,
                this.status = cartridge.status,
                this.client_id = cartridge.client_id
        },
        finishEditCartridge(){
            const data = {
                id: this.id,
                invNum: this.invNum,
                take:this.take,
                fueled:this.fueled,
                issued:this.issued,
                status:this.status,
                client_id:this.client_id
            }
            this.$store.dispatch('ajaxEditCartridgeInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch()

        },
        deleteCartridge(cartridge){
            this.$store.dispatch('ajaxDeleteCartridge', cartridge )
                .then(() => this.$emit('open'))
                .catch()
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
//model	invNum	serialNum	compatibility	take	fueled	issued	client_id
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
