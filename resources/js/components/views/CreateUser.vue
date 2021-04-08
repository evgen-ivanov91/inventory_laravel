<template>

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <form>
                    <div class="mb-3">
                        <label for="InputPib" class="form-label">ФИО</label>
                        <input type="text" class="form-control" id="InputPib" v-model="pib">
                    </div>
                    <div class="mb-3">
                        <label for="InputLocations" class="form-label">Кабинет</label>
                        <input type="text" class="form-control" id="InputLocations" v-model="locations">
                    </div>
                    <div class="mb-3">
                        <label for="InputDepartament" class="form-label">Отдел</label>
                        <input type="text" class="form-control" id="InputDepartament" v-model="departament">
                    </div>
                    <div class="mb-3">
                        <label for="InputPosition" class="form-label">Должность</label>
                        <input type="text" class="form-control" id="InputPosition" v-model="position">
                    </div>
                    <div class="mb-3">
                        <label for="InputPhone" class="form-label">Телефон</label>
                        <input type="text" class="form-control" id="InputPhone" v-model="phone">
                    </div>
                    <div class="mb-3">
                        <label for="InputLogin" class="form-label">Логин</label>
                        <input type="text" class="form-control" id="InputLogin" v-model="login">
                    </div>
                    <div class="mb-3">
                        <label for="InputEmail" class="form-label">Почта</label>
                        <input type="text" class="form-control" id="InputEmail" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="InputDob" class="form-label">День рождения</label>
                        <input type="date" class="form-control" id="InputDob" v-model="dob">
                    </div>
                    <div class="mb-3">
                        <label for="Inputnumline" class="form-label">Номер розетки</label>
                        <input type="text" class="form-control" id="Inputnumline" v-model="numline">
                    </div>

                    <button type="submit" class="btn btn-primary" @click.prevent="store">Submit</button>
                    </form>
                    <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body">
                                Привет, мир! Это тост-сообщение.
                            </div>
                            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import axios from 'axios';
export default {
name: "CreateUser",
    data:()=>({

            pib: "",
            locations: "",
            departament: "",
            position: "",
            phone: "",
            login: "",
            email: "",
            dob: "",
            numline: "",
            status: "1",


    }),
    methods:{
        store(){
            const data = {
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
            }
            this.$store.dispatch('ajaxSetClientsToDB', data )
        }
    }


}
</script>

<style scoped>

</style>
