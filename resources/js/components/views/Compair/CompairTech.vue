<template>
    <div class="card">

            <div class="list-group-item" v-show="tech.id"
                :style="{backgroundColor: Ok ? 'rgb(151, 255, 201)' : 'rgb(252, 228, 168)'}">
                ID: {{tech.id}}</div>
            <div class="list-group-item" v-show="tech.model"
                :style="{backgroundColor: Ok ? 'rgb(151, 255, 201)' : 'rgb(252, 228, 168)'}">
                Модель : {{tech.model}}</div>
            <div class="list-group-item" v-show="tech.invNum"
                :style="{backgroundColor: Ok ? 'rgb(151, 255, 201)' : 'rgb(252, 228, 168)'}">
                <span> Инвентарный номер: {{tech.invNum}}</span>
                <span> <input type="text" class="form-control"  placeholder="" v-model="IN"
                              :style="{backgroundColor: (IN == tech.invNum) ? 'rgb(28, 253, 129)' : '#FA8072'}">
                </span>
            </div>

    </div>

</template>

<script>
export default {
    name: "CompairTech",
    props:['tech'],
    data() {
        return {
            IN: '',
            Ok: ''
        }
    },
    watch: {
        IN() {
            if (this.IN === this.tech.invNum) {
                return this.Ok = true
            } else return this.Ok = false
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content: space-between;
    text-align: left;
    width: 100%;
}
.card{
    margin-bottom: 10px;

}
</style>
