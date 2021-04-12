<template>
    <div class="wrapper">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deletePhotoscan(photoscan)"
        >
            <div class="div">
                <p>Будет удалена запись № {{photoscan.id}}</p>

            </div>
        </v-popup>
        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditPhotoscan(photoscan)"
        >
            <div style="width: 60%">
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Инвентарный номер</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="invNum">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther11" class="form-label">Примечания</label>
                    <input type="text" class="form-control" id="InputOther11" v-model="Other">
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
                {{photoscan.id}}
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
                        @click="showEdit(); editPhotoscan(photoscan)"
                >
                    edit
                </button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{photoscan.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{photoscan.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{photoscan.serialNum}}</li>
            <li class="list-group-item" >Другое:{{photoscan.Other}}</li>
            <li class="list-group-item" >Пользователь:{{photoscan.client_id}}</li>
        </ul>
    </div>
</template>

<script>
import EditPopup from "../EditPopup";
import VPopup from "../v-popup";
export default {
name: "Photoscans",
    props: ['photoscan'],
    components: {EditPopup, VPopup},
    data(){
        return{
            clients: [],
            id : '',
            model : '',
            invNum : '',
            serialNum : '',
            Other: '',
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
        editPhotoscan(photoscan){
            this.id = photoscan.id,
                this.model = photoscan.model,
                this.invNum = photoscan.invNum,
                this.serialNum = photoscan.serialNum,
                this.Other = photoscan.Other,
                this.client_id = photoscan.client_id
        },
        finishEditPhotoscan(){
            const data = {
                id: this.id,
                model: this.model,
                invNum: this.invNum,
                serialNum:this.serialNum,
                Other:this.Other,
                client_id:this.client_id
            }
            this.$store.dispatch('ajaxEditPhotoscanInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch()

        },
        deletePhotoscan(photoscan){
            this.$store.dispatch('ajaxDeletePhotoscan', photoscan )
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
