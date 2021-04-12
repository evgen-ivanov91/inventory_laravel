<template>
    <ul class="list-group" >
        <li class="list-group-item" v-show="tech.model">
            <div class="item">
                <div class="disciption">Название:</div>
                <div class="unit">{{tech.model}}</div>
            </div>
        </li>
        <li class="list-group-item" v-show="tech.invNum">
            <div class="item">
                <div class="disciption">Инвентарный номер:</div>
                <div class="unit">{{tech.invNum}}</div>
            </div>
        </li>
        <li class="list-group-item" v-show="tech.serialNum">
            <div class="item">
                <div class="disciption">Серийный номер:</div>
                <div class="unit">{{tech.serialNum}}</div>
            </div>
        </li>
        <li class="list-group-item" v-show="tech.Other">
            <div class="item">
                <div class="disciption">Примечания:</div>
                <div class="unit">{{tech.Other}}</div>
            </div>
        </li>
        <li class="list-group-item" v-show="tech.created_at">
            <div class="item">
                <div class="disciption">Дата добавления:</div>
                <div class="unit">{{tech.created_at}}</div>
            </div>
        </li>
        <li class="list-group-item" v-show="tech.updated_at">
            <div class="item">
                <div class="disciption">Дата последнего изменения:</div>
                <div class="unit">{{tech.updated_at}}</div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
name: "ClientTech",
    props:['tech']
}
</script>

<style scoped>
.item{
    display: flex;
}
.disciption{
    width: 40%;
}
ul{
    margin: 5px;
}
</style>
