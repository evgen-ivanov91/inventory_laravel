<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{keyboard.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{keyboard.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{keyboard.serialNum}}</li>
            <li class="list-group-item" >Другое:{{keyboard.Other}}</li>
            <li class="list-group-item" >Пользователь:{{keyboard.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Keyboard",
    props: ['keyboard'],
}
</script>

<style scoped>

</style>
