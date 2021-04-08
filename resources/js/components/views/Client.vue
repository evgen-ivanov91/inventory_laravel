<template>

    <div class="container">
        <div class="card-header">
            {{ client.pib }}
        </div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        @click="editClient(client)">
            Edit
        </button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Пользователь</p>
                        <input type="text" class="form-control"  placeholder="ФИО" v-model="pib">
                        <input type="text" class="form-control"  placeholder="№ кабинета" v-model="locations">
                        <input type="text" class="form-control"  placeholder="Номер телефона" v-model="phone">
                        <input type="text" class="form-control"  placeholder="Номер линии" v-model="numline">
                        <input type="text" class="form-control"  placeholder="Логин" v-model="login">
                        <input type="text" class="form-control"  placeholder="Почта" v-model="email">
                        <input type="text" class="form-control"  placeholder="Отдел" v-model="departament">
                        <input type="text" class="form-control"  placeholder="должность" v-model="position">
                        <input type="text" class="form-control"  placeholder="День рождения" v-model="dob">
                        <input type="text" class="form-control"  placeholder="Дата последней инвентаризации" v-model="inventory_data">
                    </div>
                    <div class="modal-footer">
<!--                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="finishEditClient">OK</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="delClient(client)">
            DEL
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="deleteClient(client.id)">DEL</button>
                    </div>
                </div>
            </div>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item" >
                <div class="item">
                    <div class="disciption">Кабинет:</div>
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
                            <li class="list-group-item tech-list" v-show="client.all_tech.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_monitors.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_ups.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_printer.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_mfp.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_cartridges.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_scan.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_photoscan.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_mouse.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_keyboard.length">
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
                            <li class="list-group-item tech-list"  v-show="client.all_headphones.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_speakers.length">
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
                            <li class="list-group-item tech-list" v-show="client.all_barcode_scaner.length" >
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
                            <li class="list-group-item tech-list" v-show="client.all_other.length">
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
    props: ['client'],
    data(){
        return{
            id : '',
            pib : '',
            locations : '',
            phone : '',
            numline : '',
            login : '',
            email : '',
            departament : '',
            position : '',
            dob : '',
            inventory_data: '',
            status: '1'
        }
    },

    methods:{
        editClient(client){
            this.id = client.id,
            this.pib = client.pib,
            this.locations = client.locations,
            this.phone = client.phone,
            this.numline = client.numline,
            this.login = client.login,
            this.email = client.email,
            this.departament = client.departament,
            this.position = client.position,
            this.dob = client.dob,
            this.inventory_data = client.inventory_data
            console.log(client)
        },
        finishEditClient(){
            const data = {
                id: this.id,
                pib: this.pib,
                locations: this.locations,
                departament:this.departament,
                position: this.position,
                phone: this.phone,
                login: this.login,
                email: this.email,
                dob: this.dob,
                numline:this.numline,
                status:this.status
                }
            this.$store.dispatch('ajaxEditClientsInDB', data )
                .then(() => this.$emit('open'),
                this.id = '',
                this.pib = '',
                this.locations = '',
                this.phone = '',
                this.numline = '',
                this.login = '',
                this.email = '',
                this.departament = '',
                this.position = '',
                this.dob = '',
                this.inventory_data = ''
                )
                .catch(err => console.log(err))
        },
        delClient(client){
            this.id = client.id
        },
        deleteClient(client){
            const data = {
                id: this.client.id
            }
            this.$store.dispatch('ajaxDeleteClients', data )
                .then(() => this.$emit('open')
                )
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.item{
    display: flex;
}
.disciption{
    width: 40%;
}
/*.tech-list ul:nth-child(odd){*/
/*    background-color:#f5eb82;*/
/*}*/
/*ul>li>ul:nth-child(odd){*/
/*    background-color:#f5eb82;*/
/*}*/
</style>
