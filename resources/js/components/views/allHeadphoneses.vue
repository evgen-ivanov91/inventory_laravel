<template>
    <div class="container">
        <span>Наушники</span>
        <create-headphones></create-headphones>
        <div class="card" style="width: 100%;" v-for="headphones in Headphoneses" :key="headphones.id">
            <headphones :headphones="headphones"></headphones>
        </div>
    </div>
</template>

<script>
import CreateHeadphones from "./CreateHeadphones";
import Headphones from "./Headphones";
export default {
    name: "allHeadphoneses",
    components: {Headphones, CreateHeadphones},
    data:()=>({
        headphoneses: []
    }),
    mounted() {
        this.loadHeadphoneses();
    },
    methods:{
        loadHeadphoneses(){
            this.$store.dispatch('ajaxHeadphonesFromDB')
        }
    },
    computed:{
        Headphoneses(){
            return this.$store.getters.getHeadphoneses
        }
    }
}
</script>

<style scoped>

</style>
