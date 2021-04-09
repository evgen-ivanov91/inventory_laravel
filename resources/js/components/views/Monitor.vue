<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{monitor.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{monitor.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{monitor.serialNum}}</li>
            <li class="list-group-item" >Другое:{{monitor.Other}}</li>
            <li class="list-group-item" >Пользователь:{{monitor.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {

    name: "Monitor",
    props: ['monitor'],
}
</script>

<style scoped>

</style>
