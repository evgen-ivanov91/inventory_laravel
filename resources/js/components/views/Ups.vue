<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{ups.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{ups.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{ups.serialNum}}</li>
            <li class="list-group-item" >Другое:{{ups.Other}}</li>
            <li class="list-group-item" >Пользователь:{{ups.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Ups",
    props: ['ups']
}
</script>

<style scoped>

</style>
