<template>
    <div class="container">
        <div class="mt-5 mb-3 alltech__item">
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/cabinets"><div class="button_title">Кабинеты</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/departaments"><div class="button_title"> Отделы</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/position"><div class="button_title">Должности</div></router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "allSubsidiary"
}
</script>

<style scoped>
.link{
    text-decoration: none;
}

.alltech__item-title{
    width: 30%;
    font-size: 1.5em;
}
.alltech__item {
    display: flex;
}
.button_title{
    color: #fff;
    font-size: 1.2em;
}
button{
    margin-right: 15px;
}
</style>
