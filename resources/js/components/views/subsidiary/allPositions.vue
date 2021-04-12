<template>
    <div class="container">
        <span class="title">Должности</span>
        <div class="create"><create-position></create-position></div>
        <div class="card" v-for="position in Positions" :key="position.id">
            <position :position="position" @open="loadPositions"></position>
        </div>
    </div>
</template>

<script>
import CreatePosition from "./CreatePosition";
import Position from "./Position";
export default {
    name: "allPositions",
    components: {Position, CreatePosition},
    data:()=>({
        positions: []
    }),
    mounted() {
        this.loadPositions();
    },
    methods:{
        loadPositions(){
            this.$store.dispatch('ajaxPositionFromDB')
        }
    },
    computed:{
        Positions(){
            return this.$store.getters.getPosition
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
