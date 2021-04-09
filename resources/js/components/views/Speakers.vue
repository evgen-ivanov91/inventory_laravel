<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{speakers.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{speakers.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{speakers.serialNum}}</li>
            <li class="list-group-item" >Другое:{{speakers.Other}}</li>
            <li class="list-group-item" >Пользователь:{{speakers.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Speakers",
    props: ['speakers'],
}
</script>

<style scoped>

</style>
