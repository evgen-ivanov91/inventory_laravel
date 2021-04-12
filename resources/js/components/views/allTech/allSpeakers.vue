<template>
    <div class="container">
        <span class="title">Колонки</span>
        <div class="card" v-for="speakers in Speakerses" :key="speakers.id">
            <speakers :speakers="speakers" @open="loadSpeakers"> </speakers>
        </div>
    </div>
</template>

<script>
import CreateSpeakers from "../create/CreateSpeakers";
import Speakers from "../ComponentTech/Speakers";
export default {
    name: "allSpeakers",
    components: {Speakers, CreateSpeakers},
    data:()=>({
        speakerses: []
    }),
    mounted() {
        this.loadSpeakers();
    },
    methods:{
        loadSpeakers(){
            this.$store.dispatch('ajaxSpeakersFromDB')
        }
    },
    computed:{
        Speakerses(){
            return this.$store.getters.getSpeakerses
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
