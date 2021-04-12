<template>

    <div class="container">
        <v-popup
        v-if="isPopupVisible"
        @closePopup="closePopup"
        popupTitle="УДАЛЕНИЕ"
        okBtnTitle="Удалить"
        @okBtnAction="deleteClient(client)"
        >
            <div class="div">
                <p>удаление</p>
                {{client.id}}
            </div>
        </v-popup>

        <edit-popup
            v-if="isEditVisible"
            @closeEdit="closeEdit"
            popupTitle="Редактирование"
            okBtnTitle="Сохранить"
            @okBtnAction="finishEditClient(client)"
        >
            <div style="width: 80%">
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
        </edit-popup>
        <div class="card-header">
            <div>{{ client.pib }}</div>
            <div>
                <button type="button"
                         class="btn btn-info"
                         @click="showEdit(); editClient(client)"
            >
                edit
            </button>
                <button type="button"
                        class="btn btn-danger"
                        @click="showPopup"
                >
                    Удалить
                </button>
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
            <button type="button" class="btn btn-primary mt-3 mb-3" @click="showAllTech = !showAllTech">Показать всю технику</button>
            <div v-show="showAllTech">
                <div class="card  mb-3" v-show="client.all_tech.length">
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
                </div>
                <div class="card  mb-3" v-show="client.all_monitors.length">
                    <div class="card" v-for="tech in client.all_monitors" :key="tech.id">
                        <span class="item-title">Монитор</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_ups.length">
                    <div class="card" v-for="tech in client.all_ups" :key="tech.id">
                        <span class="item-title">Источник бесперебойного питания</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_printer.length">
                    <div class="card" v-for="tech in client.all_printer" :key="tech.id">
                        <span class="item-title">Принтер</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_mfp.length">
                    <div class="card" v-for="tech in client.all_mfp" :key="tech.id">
                        <span class="item-title">МФУ</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_cartridges.length">
                    <div class="card" v-for="tech in client.all_cartridges" :key="tech.id">
                        <span class="item-title">Картриджи</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_scan.length">
                    <div class="card" v-for="tech in client.all_scan" :key="tech.id">
                        <span class="item-title">Сканер</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_photoscan.length">
                    <div class="card" v-for="tech in client.all_photoscan" :key="tech.id">
                        <span class="item-title">Фотосканер</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_mouse.length">
                    <div class="card" v-for="tech in client.all_mouse" :key="tech.id">
                        <span class="item-title">Мышка</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_keyboard.length">
                    <div class="card" v-for="tech in client.all_keyboard" :key="tech.id">
                        <span class="item-title">Клавиатура</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3"  v-show="client.all_headphones.length">
                    <div class="card" v-for="tech in client.all_headphones" :key="tech.id">
                        <span class="item-title">Наушники</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_speakers.length">
                    <div class="card" v-for="tech in client.all_speakers" :key="tech.id">
                        <span class="item-title">Колонки</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_barcode_scaner.length" >
                    <div class="card" v-for="tech in client.all_barcode_scaner" :key="tech.id">
                        <span class="item-title">Сканер штрихкодов</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
                <div class="card  mb-3" v-show="client.all_other.length">
                    <div class="card" v-for="tech in client.all_other" :key="tech.id">
                        <span class="item-title">Другая техника</span>
                        <client-tech :tech="tech"></client-tech>
                    </div>
                </div>
            </div>
        </ul>
    </div>

</template>

<script>
import axios from "axios";
import VPopup from "../v-popup";
import EditPopup from "../EditPopup";
import ClientTech from "./ClientTech";

export default {
    name: "Client",
    components: {ClientTech, EditPopup, VPopup},
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
            status: '1',
            showModal: false,
            isPopupVisible: false,
            isEditVisible: false,
            showAllTech: false
        }

    },
    methods:{
        showEdit(){
            this.isEditVisible = true;
        },
        closeEdit(){
            this.isEditVisible = false;
        },
        showPopup(){
            this.isPopupVisible = true;
        },
        closePopup(){
            this.isPopupVisible = false;
        },
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
        },
        finishEditClient(client){
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
            this.closeEdit()
        },
        deleteClient(client){
            this.$store.dispatch('ajaxDeleteClients', client )
                .then(() => this.$emit('open'))
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.item-title{
    font-size: 1.2em;
}
.item{
    display: flex;
}
.disciption{
    width: 40%;
}
ul{
    margin: 5px;
}
.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/*.tech-list ul:nth-child(odd){*/
/*    background-color:#f5eb82;*/
/*}*/
/*ul>li>ul:nth-child(odd){*/
/*    background-color:#f5eb82;*/
/*}*/
</style>
