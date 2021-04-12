<template>
    <div class="container">
        <span class="title">Клавиатуры</span>
        <div class="card" v-for="keyboard in Keyboards" :key="keyboard.id">
            <keyboard :keyboard="keyboard" @open="loadKeyboards"> </keyboard>
        </div>
    </div>
</template>

<script>
import CreateKeyboard from "../create/CreateKeyboard";
import Keyboard from "../ComponentTech/Keyboard";
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
