<template>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form>
                    <div class="mb-3">
                        <label for="InputPib" class="form-label">ФИО</label>
                        <input type="text" class="form-control" id="InputPib" v-model="pib">
                    </div>
                    <div class="mb-3">
                        <label for="InputLocations" class="form-label">Кабинет</label>
                        <select v-model="locations" id="InputLocations">
                            <option value="">Выберите кабинет</option>
                            <option v-for="cabinet in Cabinets"
                                    :value="cabinet.numberCabinet"
                                    :key="cabinet.id"
                            >{{cabinet.numberCabinet}}{{cabinet.description}}</option>
                        </select>
<!--                        <input type="text" class="form-control" id="InputLocations" v-model="locations">-->
                    </div>
                    <div class="mb-3">
                        <label for="InputDepartament" class="form-label">Отдел</label>
                        <select v-model="departament" id="InputDepartament">
                            <option value="">Выберите отдел</option>
                            <option v-for="departament in Departaments"
                                    :value="departament.description"
                                    :key="departament.id"
                            >{{departament.codeDepartament}}{{departament.description}}</option>
                        </select>
<!--                        <input type="text" class="form-control" id="InputDepartament" v-model="departament">-->

                    </div>
                    <div class="mb-3">
                        <label for="InputPosition" class="form-label">Должность</label>
                        <select v-model="position" id="InputPosition">
                            <option value="">Выберите отдел</option>
                            <option v-for="position in Positions"
                                    :value="position.description"
                                    :key="position.id"
                            >{{position.codePosition}}{{position.description}}</option>
                        </select>
<!--                        <input type="text" class="form-control" id="InputPosition" v-model="position">-->
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
    mounted() {
        this.loadCabinets();
        this.loadDepartaments();
        this.loadPositions();
    },
    methods:{
        loadCabinets(){
            this.$store.dispatch('ajaxCabinetsFromDB')
        },
        loadDepartaments(){
            this.$store.dispatch('ajaxDepartamentFromDB')
        },
        loadPositions(){
            this.$store.dispatch('ajaxPositionFromDB')
        },
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
            .then(
                alert('Добавленно'),
                this.pib = "",
                this.locations = "",
                this.departament = "",
                this.position = "",
                this.phone = "",
                this.login = "",
                this.email = "",
                this.dob = "",
                this.numline = ""
            )
        }
    },
    computed:{
        Cabinets(){
            return this.$store.getters.getCabinets
        },
        Departaments(){
            return this.$store.getters.getDepartaments
        },
        Positions(){
            return this.$store.getters.getPosition
        }
    }


}
</script>

<style scoped>
form div{
    display: flex;
    justify-content: space-between;
}
label{
    width: 20%;
}
</style>
