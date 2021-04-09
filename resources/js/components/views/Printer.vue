<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{printer.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{printer.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{printer.serialNum}}</li>
            <li class="list-group-item" >Другое:{{printer.Other}}</li>
            <li class="list-group-item" >Пользователь:{{printer.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Printer",
    props: ['printer'],
}
</script>

<style scoped>

</style>
