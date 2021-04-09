<template>
    <div class="container">
        <span>Мониторы</span>
        <create-photoscan></create-photoscan>
        <div class="card" style="width: 100%;" v-for="photoscan in Photoscans" :key="photoscan.id">
            <photoscans :photoscan="photoscan"></photoscans>
        </div>
    </div>
</template>

<script>
import CreatePhotoscan from "./CreatePhotoscan";
import Photoscans from "./Photoscans";
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
            this.$store.dispatch('ajaxPhotoscansFromDB')
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

</style>
