<template>
    <div class="wrapper">
        <v-popup
            v-if="isPopupVisible"
            @closePopup="closePopup"
            popupTitle="УДАЛЕНИЕ"
            okBtnTitle="Удалить"
            @okBtnAction="deleteDepartament(departament)"
        >
            <div class="div">
                <p>Будет удалена запись № {{departament.id}}</p>

            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditDepartament(departament)"
        >
            <div>
                <div class="mb-3 edit_item">
                    <label for="InputinvNum1" class="form-label">Код</label>
                    <input type="text" class="form-control" id="InputinvNum1" v-model="codeDepartament">
                </div>
                <div class="mb-3 edit_item">
                    <label for="InputOther11" class="form-label">Отдел</label>
                    <input type="text" class="form-control" id="InputOther11" v-model="description">
                </div>
            </div>
        </edit-popup>
        <div class="card-header allCardHeader">
            <div>
                {{departament.id}}
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
                        @click="showEdit(); editDepartament(departament)"
                >
                    edit
                </button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Номер: {{departament.codeDepartament}}</li>
            <li class="list-group-item" >Отдел:{{departament.description}}</li>
        </ul>
    </div>
</template>

<script>
import EditPopup from "../EditPopup";
import VPopup from "../v-popup";

export default {
name: "Departament",
    props: ['departament'],
    components: {EditPopup, VPopup},
    data(){
        return{
            id : '',
            codeDepartament : '',
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
        editDepartament(departament){
            this.id = departament.id,
                this.codeDepartament = departament.codeDepartament,
                this.description = departament.description
        },
        finishEditDepartament(){
            const data = {
                id: this.id,
                codeDepartament: this.codeDepartament,
                description: this.description
            }
            console.log(data)
            this.$store.dispatch('ajaxEditDepartamentInDB', data )
                .then(() => this.$emit('open'),this.closeEdit())
                .catch()

        },
        deleteDepartament(departament){
            this.$store.dispatch('ajaxDeleteDepartament', departament )
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
