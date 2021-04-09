<template>
    <div class="container">
        <span>Колонки</span>
        <create-speakers></create-speakers>
        <div class="card" style="width: 100%;" v-for="speakers in Speakerses" :key="speakers.id">
            <speakers :speakers="speakers"> </speakers>
        </div>
    </div>
</template>

<script>
import CreateSpeakers from "./CreateSpeakers";
import Speakers from "./Speakers";
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

</style>
