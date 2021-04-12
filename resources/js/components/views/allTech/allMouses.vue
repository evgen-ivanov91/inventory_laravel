<template>
    <div class="container">
        <span class="title">Компьютерные мыши</span>
        <div class="card" v-for="mouse in Mouses" :key="mouse.id">
            <mouse :mouse="mouse" @open="loadMouses"></mouse>
        </div>
    </div>
</template>

<script>
import CreateMouses from "../create/createMouses";
import Mouse from "../ComponentTech/Mouse";
export default {
    name: "allMouses",
    components: {Mouse, CreateMouses},
    data:()=>({
        mouses: []
    }),
    mounted() {
        this.loadMouses();
    },
    methods:{
        loadMouses(){
            this.$store.dispatch('ajaxMousesFromDB')
        }
    },
    computed:{
        Mouses(){
            return this.$store.getters.getMouses
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
