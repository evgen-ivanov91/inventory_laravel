<template>
    <div class="container">
        <span class="title">Картриджи</span>
        <div class="card" v-for="cartridge in Cartridges" :key="cartridge.id">
            <cartridge :cartridge="cartridge" @open="loadCartridges"></cartridge>
        </div>
    </div>
</template>

<script>
import CreateCartridge from "../create/CreateCartridge";
import Cartridge from "../ComponentTech/Cartridge";
export default {
    name: "allCartridges",
    components: {Cartridge, CreateCartridge},
    data:()=>({
        cartridges: []
    }),
    mounted() {
        this.loadCartridges();
    },
    methods:{
        loadCartridges(){
            this.$store.dispatch('ajaxCartridgeFromDB')
        }
    },
    computed:{
        Cartridges(){
            return this.$store.getters.getCartridges
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
