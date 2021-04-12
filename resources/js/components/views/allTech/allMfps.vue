<template>
    <div class="container">
        <span class="title">Многофункциональное устройство</span>
        <div class="card" v-for="mfp in Mfps" :key="mfp.id">
            <mfp :mfp="mfp" @open="loadMfps"></mfp>
        </div>
    </div>
</template>

<script>
import CreateMfp from "../create/CreateMfp";
import Mfp from "../ComponentTech/Mfp";
export default {
    name: "allMfps",
    components: {Mfp, CreateMfp},
    data:()=>({
        mfps: []
    }),
    mounted() {
        this.loadMfps();
    },
    methods:{
        loadMfps(){
            this.$store.dispatch('ajaxMfpFromDB')
        }
    },
    computed:{
        Mfps(){
            return this.$store.getters.getMfps
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
