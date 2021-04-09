<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{scan.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{scan.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{scan.serialNum}}</li>
            <li class="list-group-item" >Другое:{{scan.Other}}</li>
            <li class="list-group-item" >Пользователь:{{scan.client_id}} </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Scan",
    props: ['scan'],
    created() {
        console.log(this.scan);
    },
}
</script>

<style scoped>

</style>
