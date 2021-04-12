<template>
    <div class="container">
        <span class="title">Другая техника</span>
        <div class="card" v-for="other in Others" :key="other.id">
            <other :other="other" @open="loadOthers"></other>
        </div>
    </div>
</template>

<script>
import CreateOther from "../create/CreateOther";
import Other from "../ComponentTech/Other";
export default {
    name: "allOthers",
    components: {Other, CreateOther},
    data:()=>({
        others: []
    }),
    mounted() {
        this.loadOthers();
    },
    methods:{
        loadOthers(){
            this.$store.dispatch('ajaxOtherFromDB')
        }
    },
    computed:{
        Others(){
            return this.$store.getters.getOthers
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
