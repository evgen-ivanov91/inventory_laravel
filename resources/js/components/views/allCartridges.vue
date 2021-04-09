<template>
    <div class="container">
        <span>Картриджи</span>
        <create-cartridge></create-cartridge>
        <div class="card" style="width: 100%;" v-for="cartridge in Cartridges" :key="cartridge.id">
            <cartridge :cartridge="cartridge"></cartridge>
        </div>
    </div>
</template>

<script>
import CreateCartridge from "./CreateCartridge";
import Cartridge from "./Cartridge";
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

</style>
