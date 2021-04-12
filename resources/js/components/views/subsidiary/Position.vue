<template>
    <div class="wrapper">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deletePosition(position)"
        >
            <div class="div">
                <p>Будет удалена запись № {{position.id}}</p>

            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditPosition(position)"
        >
            <div>
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Код</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="codePosition">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther11" class="form-label">Отдел</label>
                    <input type="text" class="form-control" id="InputOther11" v-model="description">
                </div>
            </div>
        </edit-popup>
        <div class="card-header allCardHeader">
            <div>
                {{position.id}}
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
                        @click="showEdit(); editPosition(position)"
                >
                    edit
                </button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Номер: {{position.codePosition}}</li>
            <li class="list-group-item" >Отдел:{{position.description}}</li>
        </ul>
    </div>
</template>

<script>
import EditPopup from "../EditPopup";
import VPopup from "../v-popup";

export default {
    name: "Position",
    props: ['position'],
    components: {EditPopup, VPopup},
    data(){
        return{
            id : '',
            codePosition : '',
            description : '',
            isPopupVisible: false,
            isEditVisible: false
        }
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
        editPosition(position){
            this.id = position.id,
                this.codePosition = position.codePosition,
                this.description = position.description
        },
        finishEditPosition(){
            const data = {
                id: this.id,
                codePosition: this.codePosition,
                description: this.description
            }
            console.log(data)
            this.$store.dispatch('ajaxEditPositionInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch()
        },
        deletePosition(position){
            this.$store.dispatch('ajaxDeletePosition', position )
                .then(() => this.$emit('open'))
                .catch()
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
