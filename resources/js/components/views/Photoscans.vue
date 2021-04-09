<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{photoscan.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{photoscan.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{photoscan.serialNum}}</li>
            <li class="list-group-item" >Другое:{{photoscan.Other}}</li>
            <li class="list-group-item" >Пользователь:{{photoscan.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Photoscans",
    props: ['photoscan'],
}
</script>

<style scoped>

</style>
