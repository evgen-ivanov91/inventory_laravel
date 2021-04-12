<template>
    <div class="wrapper">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deleteCabinet(cabinet)"
        >
            <div class="div">
                <p>Будет удалена запись № {{cabinet.id}}</p>

            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditCabinet(cabinet)"
        >
            <div>
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Номер</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="numberCabinet">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther11" class="form-label">Кабинет</label>
                    <input type="text" class="form-control" id="InputOther11" v-model="description">
                </div>
            </div>
        </edit-popup>
        <div class="card-header allCardHeader">
            <div>
                {{cabinet.id}}
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
                        @click="showEdit(); editCabinet(cabinet)"
                >
                    edit
                </button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Номер: {{cabinet.numberCabinet}}</li>
            <li class="list-group-item" >Кабинет:{{cabinet.description}}</li>
        </ul>
    </div>
</template>

<script>
import EditPopup from "../EditPopup";
import VPopup from "../v-popup";

export default {
    //numberCabinet	description
name: "Cabinet",
    props: ['cabinet'],
    components: {EditPopup, VPopup},
    data(){
        return{
            id : '',
            numberCabinet : '',
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
        editCabinet(cabinet){
            this.id = cabinet.id,
                this.numberCabinet = cabinet.numberCabinet,
                this.description = cabinet.description
        },
        finishEditCabinet(){
            const data = {
                id: this.id,
                numberCabinet: this.numberCabinet,
                description: this.description
            }
            console.log(data)
            this.$store.dispatch('ajaxEditCabinetsInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch()

        },
        deleteCabinet(cabinet){
            this.$store.dispatch('ajaxDeleteCabinets', cabinet )
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
