<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{other.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{other.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{other.serialNum}}</li>
            <li class="list-group-item" >Другое:{{other.Other}}</li>
            <li class="list-group-item" >Пользователь:{{other.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Other",
    props: ['other']
}
</script>

<style scoped>

</style>
