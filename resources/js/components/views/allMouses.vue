<template>
    <div class="container">
        <span>Компьютерные мыши</span>
        <create-mouses></create-mouses>
        <div class="card" style="width: 100%;" v-for="mouse in Mouses" :key="mouse.id">
            <mouse :mouse="mouse"></mouse>
        </div>
    </div>

</template>

<script>
import CreateMouses from "./createMouses";
import Mouse from "./Mouse";
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

</style>
