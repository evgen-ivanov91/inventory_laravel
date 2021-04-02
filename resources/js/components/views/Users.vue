<template>
    <div class="container">
        <div class="card" style="width: 100%;" v-for="client in clients">
            <div class="card-header">
                {{ client.pib }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Кабинет: {{client.locations}}</li>
                <li class="list-group-item">Номер телефона:{{client.phone}}</li>
                <li class="list-group-item">Номер линии:{{client.numline}}</li>
                <li class="list-group-item">Логин:{{client.login}}</li>
                <li class="list-group-item">Электронная почта:{{client.email}}</li>
                <li class="list-group-item">Отдел:{{client.departament}}</li>
                <li class="list-group-item">Должность:{{client.position}}</li>
                <li class="list-group-item">День рождения:{{client.dob}}</li>
                <li class="list-group-item">Добавлен:{{client.created_at}}</li>
                <li class="list-group-item">Дата изменения:{{client.updated_at}}</li>
            </ul>
            <ul class="list-group" v-for="tech in client.all_tech">
                <li class="list-group-item disabled" aria-disabled="true">{{tech.model}}</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
name: "Users",
    data:()=>({
        clients: []
    }),
    mounted() {
    this.loadClients();
    },
    methods:{
    loadClients(){
        axios.get('api/Clients')
        .then(res => {
            this.clients = res.data;
            console.log(res.data);
        })
    }
    }
}
</script>

<style scoped>

</style>
