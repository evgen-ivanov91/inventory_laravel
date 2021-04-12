<template>
    <div class="container">
        <span class="title">Фотосканеры</span>
        <div class="card" v-for="photoscan in Photoscans" :key="photoscan.id">
            <photoscans :photoscan="photoscan" @open="loadPhotoscans"></photoscans>
        </div>
    </div>
</template>

<script>
import CreatePhotoscan from "../create/CreatePhotoscan";
import Photoscans from "../ComponentTech/Photoscans";
export default {
    name: "allPhotoscans",
    components: {Photoscans, CreatePhotoscan},
    data:()=>({
        photoscans: []
    }),
    mounted() {
        this.loadPhotoscans();
    },
    methods:{
        loadPhotoscans(){
            this.$store.dispatch('ajaxPhotoscanFromDB')
        }
    },
    computed:{
        Photoscans(){
            return this.$store.getters.getPhotoscans
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
