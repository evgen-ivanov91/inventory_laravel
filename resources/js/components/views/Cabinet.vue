<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Номер: {{cabinet.numberCabinet}}</li>
            <li class="list-group-item" >Кабинет:{{cabinet.description}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    //numberCabinet	description
name: "Cabinet",
    props: ['cabinet']
}
</script>

<style scoped>

</style>
