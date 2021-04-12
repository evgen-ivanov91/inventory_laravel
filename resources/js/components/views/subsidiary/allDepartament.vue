<template>
    <div class="container">
        <span class="title">Отделы</span>
        <div class="create"><create-departament></create-departament></div>
        <div class="card" v-for="departament in Departaments" :key="departament.id">
            <departament :departament="departament" @open="loadDepartaments"></departament>
        </div>
    </div>
</template>

<script>
import CreateDepartament from "./CreateDepartament";
import Departament from "./Departament";
export default {
name: "allDepartament",
    components: {Departament, CreateDepartament},
    data:()=>({
        departaments: []
    }),
    mounted() {
        this.loadDepartaments();
    },
    methods:{
        loadDepartaments(){
            this.$store.dispatch('ajaxDepartamentFromDB')
        }
    },
    computed:{
        Departaments(){
            return this.$store.getters.getDepartaments
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 1.5em;
    margin-bottom: 15px;
}
.create{
    padding-top: 20px;
}
.card{
    width: 100%;
    margin: 10px 0;
}
</style>
