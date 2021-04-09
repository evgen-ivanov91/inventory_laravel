<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{headphones.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{headphones.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{headphones.serialNum}}</li>
            <li class="list-group-item" >Другое:{{headphones.Other}}</li>
            <li class="list-group-item" >Пользователь:{{headphones.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Headphones",
    props: ['headphones'],
}
</script>

<style scoped>

</style>
