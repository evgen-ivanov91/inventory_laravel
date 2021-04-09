<template>
    <div class="container">
        <span>Многофункциональное устройство</span>
        <create-mfp></create-mfp>
        <div class="card" style="width: 100%;" v-for="mfp in Mfps" :key="mfp.id">
            <mfp :mfp="mfp"></mfp>
        </div>
    </div>
</template>

<script>
import CreateMfp from "./CreateMfp";
import Mfp from "./Mfp";
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

</style>
