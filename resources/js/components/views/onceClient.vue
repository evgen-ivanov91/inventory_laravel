<template>
<div>
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
</template>

<script>
export default {
name: "onceClient",
    props:['client'],
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
    created() {
        console.log(this.client.id);
    },
}
</script>

<style scoped>

</style>
