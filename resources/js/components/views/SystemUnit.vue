<template>

<!--    model	invNum	serialNum	CPU	RAM	SSD	HDD	VideoCard
Licence	Other1	Other2	Other3	client_id	created_at	updated_at	-->
    <div class="container">
        <div class="card-header">
            {{ client.pib }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Кабинет: {{client.locations}}</li>
            <li class="list-group-item" >Номер телефона:{{client.phone}}</li>
            <li class="list-group-item" >Номер линии:{{client.numline}}</li>
            <li class="list-group-item" >Логин:{{client.login}}</li>
            <li class="list-group-item" >Электронная почта:{{client.email}}</li>
            <li class="list-group-item" >Отдел:{{client.departament}}</li>
            <li class="list-group-item" >Должность:{{client.position}}</li>
            <li class="list-group-item" >День рождения:{{client.dob}}</li>
            <li class="list-group-item" >День рождения:{{client.inventory_data}}</li>
            <li class="list-group-item" >Добавлен:{{client.created_at}}</li>
            <li class="list-group-item" >Дата изменения:{{client.updated_at}}</li>
        </ul>
    </div>
</template>

<script>
export default {
name: "SystemUnit"
}
</script>

<style scoped>

</style>
