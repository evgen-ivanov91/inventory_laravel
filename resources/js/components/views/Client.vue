<template>

    <div class="container">
        <div class="card-header">
            {{ client.pib }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption">Кабинет::</div>
                    <div class="unit">{{client.locations}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption">Номер телефона:</div>
                    <div class="unit">{{client.phone}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption">Номер линии:</div>
                    <div class="unit">{{client.numline}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Логин:</div>
                    <div class="unit">{{client.login}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Электронная почта:</div>
                    <div class="unit">{{client.email}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Отдел:</div>
                    <div class="unit">{{client.departament}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Должность:</div>
                    <div class="unit">{{client.position}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> День рождения:</div>
                    <div class="unit">{{client.dob}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Дата проведения инвентаризации:</div>
                    <div class="unit">{{client.inventory_data}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Добавлен:</div>
                    <div class="unit">{{client.created_at}}</div>
                </div>
            </li>
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption"> Дата изменения:</div>
                    <div class="unit">{{client.updated_at}}</div>
                </div>
            </li>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Техника
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <li class="list-group-item" v-show="client.all_tech.length">
                <span class="item-title">
                    Системный блок
                </span>
                                <ul class="list-group" v-for="tech in client.all_tech">
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
                                    <li class="list-group-item" v-show="tech.CPU">
                                        <div class="item">
                                            <div class="disciption">Процессор:</div>
                                            <div class="unit">{{tech.CPU}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.RAM">
                                        <div class="item">
                                            <div class="disciption">Оперативная память:</div>
                                            <div class="unit">{{tech.RAM}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.SSD">
                                        <div class="item">
                                            <div class="disciption">Твердотелый накопитель:</div>
                                            <div class="unit">{{tech.SSD}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.HDD">
                                        <div class="item">
                                            <div class="disciption">Жесткий диск:</div>
                                            <div class="unit">{{tech.HDD}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.VideoCard">
                                        <div class="item">
                                            <div class="disciption">Видеокарта:</div>
                                            <div class="unit">{{tech.VideoCard}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.Licence">
                                        <div class="item">
                                            <div class="disciption">Лицензия:</div>
                                            <div class="unit">{{tech.Licence}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.Other1">
                                        <div class="item">
                                            <div class="disciption">Примечания:</div>
                                            <div class="unit">{{tech.Other1}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.Other2">
                                        <div class="item">
                                            <div class="disciption">Допмодули:</div>
                                            <div class="unit">{{tech.Other2}}</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item" v-show="tech.Other3">
                                        <div class="item">
                                            <div class="disciption">Другие:</div>
                                            <div class="unit">{{tech.Other3}}</div>
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
                            </li>
                            <li class="list-group-item" v-show="client.all_monitors.length">
                <span class="item-title">
                    Монитор
                </span>
                                <ul class="list-group" v-for="tech in client.all_monitors">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_ups.length">
                <span class="item-title">
                    Источник бесперебойного питания
                </span>
                                <ul class="list-group" v-for="tech in client.all_ups">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_printer.length">
                <span class="item-title">
                    Принтер
                </span>
                                <ul class="list-group" v-for="tech in client.all_printer">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_mfp.length">
                <span class="item-title">
                    МФУ
                </span>
                                <ul class="list-group" v-for="tech in client.all_mfp">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_cartridges.length">
                <span class="item-title">
                    Картриджи
                </span>
                                <ul class="list-group" v-for="tech in client.all_cartridges">
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
                                    <li class="list-group-item" v-show="tech.compatibility">
                                        <div class="item">
                                            <div class="disciption">Совместимость:</div>
                                            <div class="unit">{{tech.compatibility}}</div>
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
                            </li>
                            <li class="list-group-item" v-show="client.all_scan.length">
                <span class="item-title">
                    Сканер
                </span>
                                <ul class="list-group" v-for="tech in client.all_scan">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_photoscan.length">
                <span class="item-title">
                    Фотосканер
                </span>
                                <ul class="list-group" v-for="tech in client.all_photoscan">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_mouse.length">
                <span class="item-title">
                    Мышка
                </span>
                                <ul class="list-group" v-for="tech in client.all_mouse">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_keyboard.length">
                <span class="item-title">
                    Клавиатура
                </span>
                                <ul class="list-group" v-for="tech in client.all_keyboard">
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
                            </li>
                            <li class="list-group-item"  v-show="client.all_headphones.length">
                <span class="item-title">
                    Наушники
                </span>
                                <ul class="list-group" v-for="tech in client.all_headphones">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_speakers.length">
                <span class="item-title">
                    Колонки
                </span>
                                <ul class="list-group" v-for="tech in client.all_speakers">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_barcode_scaner.length" >
                <span class="item-title">
                    Сканер штрихкодов
                </span>
                                <ul class="list-group" v-for="tech in client.all_barcode_scaner">
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
                            </li>
                            <li class="list-group-item" v-show="client.all_other.length">
                <span class="item-title">
                    Другая техника
                </span>
                                <ul class="list-group" v-for="tech in client.all_other">
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
                            </li>
                        </div>
                    </div>
                </div>

            </div>

        </ul>
    </div>

</template>

<script>
export default {
    name: "Client",
    props: ['client']
}
</script>

<style scoped>
.item{
    display: flex;
}
.disciption{
    width: 40%;
}
</style>
