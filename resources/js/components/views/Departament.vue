<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Номер: {{departament.codeDepartament}}</li>
            <li class="list-group-item" >Отдел:{{departament.description}}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Departament",
    props: ['departament']
}
</script>

<style scoped>

</style>
