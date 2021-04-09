<template>
    <div class="container">
        <span>Клавиатуры</span>
        <create-keyboard></create-keyboard>
        <div class="card" style="width: 100%;" v-for="keyboard in Keyboards" :key="keyboard.id">
            <keyboard :keyboard="keyboard"> </keyboard>
        </div>
    </div>
</template>

<script>
import CreateKeyboard from "./CreateKeyboard";
import Keyboard from "./Keyboard";
export default {
    name: "allKeyboards",
    components: {Keyboard, CreateKeyboard},
    data:()=>({
        keyboards: []
    }),
    mounted() {
        this.loadKeyboards();
    },
    methods:{
        loadKeyboards(){
            this.$store.dispatch('ajaxKeyboardFromDB')
        }
    },
    computed:{
        Keyboards(){
            return this.$store.getters.getKeyboards
        }
    }
}
</script>

<style scoped>

</style>
