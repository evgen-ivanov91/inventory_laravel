<template>
    <div class="container">
        <span>Другая техника</span>
        <create-other></create-other>
        <div class="card" style="width: 100%;" v-for="other in Others" :key="other.id">
            <other :other="other"></other>

        </div>
    </div>
</template>

<script>
import CreateOther from "./CreateOther";
import Other from "./Other";
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

</style>
