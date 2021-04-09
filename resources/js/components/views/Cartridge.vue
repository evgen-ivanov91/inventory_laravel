<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >Модель: {{cartridge.model}}</li>
            <li class="list-group-item" >Инвентарный номер:{{cartridge.invNum}}</li>
            <li class="list-group-item" >Серийный номер:{{cartridge.serialNum}}</li>
            <li class="list-group-item" >Совместимость:{{cartridge.compatibility}}</li>
            <li class="list-group-item" >Дата приема:{{cartridge.take}}</li>
            <li class="list-group-item" >Дата заправки:{{cartridge.fueled}}</li>
            <li class="list-group-item" >Дата выдачи:{{cartridge.issued}}</li>
            <li class="list-group-item" >Пользователь:{{cartridge.client_id}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Cartridge",
    props: ['cartridge']
}
//model	invNum	serialNum	compatibility	take	fueled	issued	client_id
</script>

<style scoped>

</style>
