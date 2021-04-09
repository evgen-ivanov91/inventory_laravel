<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{mfp.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{mfp.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{mfp.serialNum}}</li>
            <li class="list-group-item" >Другое:{{mfp.Other}}</li>
            <li class="list-group-item" >Пользователь:{{mfp.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Mfp",
    props: ['mfp'],
}
</script>

<style scoped>

</style>
