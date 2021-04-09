<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{mouse.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{mouse.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{mouse.serialNum}}</li>
            <li class="list-group-item" >Другое:{{mouse.Other}}</li>
            <li class="list-group-item" >Пользователь:{{mouse.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Mouse",
    props: ['mouse'],
}
</script>

<style scoped>

</style>
