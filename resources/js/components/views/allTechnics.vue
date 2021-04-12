<template>
    <div class="container">
        <div class="mt-5 mb-3 alltech__item">
            <div class="alltech__item-title">Системные блоки</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/systemunits"><div class="button_title"> Все системные блоки</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createcsystemunit"><div class="button_title"> Добавить системный блок</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Монитор</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/monitors"><div class="button_title"> Все мониторы</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createmonitor"><div class="button_title"> Добавить монитор</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Мыши</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/mouses"><div class="button_title"> Компьютерные мыши</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createmouse"><div class="button_title"> Добавить мыш</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Клавиатуры</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/keyboards"><div class="button_title"> Все клавиатуры</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createkeyboard"><div class="button_title"> Добавить клавиатуру</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Принтеры</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/printers"><div class="button_title"> Все принтеры</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createprint"><div class="button_title"> Добавить принтер</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">МФУ</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/mfps"><div class="button_title"> Все мфу</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createmfp"><div class="button_title"> Добавить мфу</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Картриджи</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/cartridges"><div class="button_title"> Все картриджи</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createcartridge"><div class="button_title"> Добавить картридж</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Сканер</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/scans"><div class="button_title"> Все сканеры</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createscan"><div class="button_title"> Добавить сканер</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Фотосканер</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/photoscans"><div class="button_title"> Все фотосканеры</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createphotoscan"><div class="button_title"> Добавить фотосканер</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Сканер штрих кодов</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/barcodescans"><div class="button_title"> Все сканеры штрих кодов</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createbarcodescan"><div class="button_title"> Добавить сканер штрих кодов</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Источник бесперебойного электропитания</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/ups"><div class="button_title"> Все ибп</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createups"><div class="button_title"> Добавить ибп</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Наушники</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/headphoneses"><div class="button_title"> Все наушники</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createheadphones"><div class="button_title"> Добавить наушники</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Колонки</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/speakers"><div class="button_title"> Все колонки</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createspeakers"><div class="button_title"> Добавить колонки</div></router-link>
            </button>
        </div>
        <div class="mb-3 alltech__item">
            <div class="alltech__item-title">Другая техника</div>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/other"><div class="button_title"> Вся другая техника</div></router-link>
            </button>
            <button type="button" class="btn btn-dark">
                <router-link class="link" to="/createother"><div class="button_title"> Добавить другую технику</div></router-link>
            </button>
        </div>

    </div>

</template>

<script>
export default {
name: "allTechnics"
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
