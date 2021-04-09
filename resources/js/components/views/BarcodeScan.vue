<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{barcodeScan.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{barcodeScan.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{barcodeScan.serialNum}}</li>
            <li class="list-group-item" >Другое:{{barcodeScan.Other}}</li>
            <li class="list-group-item" >Пользователь:{{barcodeScan.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BarcodeScan",
    props: ['barcodeScan'],
}
</script>

<style scoped>

</style>
