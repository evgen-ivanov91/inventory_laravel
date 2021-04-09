<template>
    <div class="container">
        <span>Отделы</span>
        <create-departament></create-departament>
        <div class="card" style="width: 100%;" v-for="departament in Departaments" :key="departament.id">
            <departament :departament="departament"></departament>
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

</style>
