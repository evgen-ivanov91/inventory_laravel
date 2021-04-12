<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="mb-3">
                        <label for="InputModel" class="form-label">Модель</label>
                        <input type="text" class="form-control" id="InputModel" v-model="model">
                    </div>
                    <div class="mb-3">
                        <label for="InputinvNum" class="form-label">Инвентарный номер</label>
                        <input type="text" class="form-control" id="InputinvNum" v-model="invNum">
                    </div>
                    <div class="mb-3">
                        <label for="InputserialNum" class="form-label">Серийный номер</label>
                        <input type="text" class="form-control" id="InputserialNum" v-model="serialNum">
                    </div>
                    <div class="mb-3">
                        <label for="InputOther" class="form-label">Примечания</label>
                        <input type="text" class="form-control" id="InputOther" v-model="Other" placeholder=" ">
                    </div>

                    <div class="mb-3">
                        <select v-model="client_id">
                            <option value="">Выберите пользователя</option>
                            <option v-for="client in Clients"
                                    :value="client.id"
                                    :key="client.id"
                            >{{client.pib}}</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary" @click.prevent="store">Submit</button>
                </form>
                <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Привет, мир! Это тост-сообщение.
                        </div>
                        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "createBarcodeScan",
    data:()=>({
        clients: [],
        model: ' ',
        invNum: ' ',
        serialNum: ' ',
        Other: ' ',
        client_id: ''

    }),
    mounted() {
        this.loadClients();
    },
    methods:{
        loadClients(){
            this.$store.dispatch('ajaxClientsFromDB')
        },
        store(){
            const data = {
                model: this.model,
                invNum: this.invNum,
                serialNum:this.serialNum,
                Other:this.Other,
                client_id:this.client_id
            }
            console.log(data)
            this.$store.dispatch('ajaxSetBarcodeScanToDB', data )
                .then(
                    alert('Добавленно'),
                    this.model = '',
                    this.invNum = '',
                    this.serialNum = '',
                    this.Other = '',
                    this.client_id = ''
                )
        }
    },
    computed:{
        Clients(){
            return this.$store.getters.getClients
        }
    }
}
</script>

<style scoped>
form div{
    display: flex;
}
form div label{
    width: 30%;
}
</style>
