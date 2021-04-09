<template>
    <div class="container">
        <div class="row">
            <div class="col-6">

                <form>
                    <div class="mb-3">
                        <label for="InputModel" class="form-label">Модель</label>
                        <input type="text" class="form-control" id="InputModel" v-model="model">
                    </div>
                    <div class="mb-3">
                        <label for="InputinvNum" class="form-label">Кабинет</label>
                        <input type="text" class="form-control" id="InputinvNum" v-model="invNum">
                    </div>
                    <div class="mb-3">
                        <label for="InputserialNum" class="form-label">Отдел</label>
                        <input type="text" class="form-control" id="InputserialNum" v-model="serialNum">
                    </div>
                    <div class="mb-3">
                        <label for="InputCPU" class="form-label">CPU</label>
                        <input type="text" class="form-control" id="InputCPU" v-model="CPU">
                    </div>
                    <div class="mb-3">
                        <label for="InputRAM" class="form-label">RAM</label>
                        <input type="text" class="form-control" id="InputRAM" v-model="RAM">
                    </div>
                    <div class="mb-3">
                        <label for="InputSSD" class="form-label">SSD</label>
                        <input type="text" class="form-control" id="InputSSD" v-model="SSD">
                    </div>
                    <div class="mb-3">
                        <label for="InputHDD" class="form-label">HDD</label>
                        <input type="text" class="form-control" id="InputHDD" v-model="HDD">
                    </div>
                    <div class="mb-3">
                        <label for="InputVideoCard" class="form-label">VideoCard</label>
                        <input type="text" class="form-control" id="InputVideoCard" v-model="VideoCard">
                    </div>
                    <div class="mb-3">
                        <label for="InputLicence" class="form-label">Licence</label>
                        <input type="text" class="form-control" id="InputLicence" v-model="Licence">
                    </div>
                    <div class="mb-3">
                        <label for="InputOther1" class="form-label">Other1</label>
                        <input type="text" class="form-control" id="InputOther1" v-model="Other1">
                    </div>
                    <div class="mb-3">
                        <label for="InputOther2" class="form-label">Other2</label>
                        <input type="text" class="form-control" id="InputOther2" v-model="Other2">
                    </div>
                    <div class="mb-3">
                        <label for="InputOther3" class="form-label">Other3</label>
                        <input type="text" class="form-control" id="InputOther3" v-model="Other3">
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
name: "CreateSystemUnit",
    data:()=>({
        clients: [],
        model: '',
        invNum: '',
        serialNum: '',
        CPU: '',
        RAM: '',
        SSD: '',
        HDD: '',
        VideoCard: '',
        Licence: '',
        Other1: '',
        Other2: '',
        Other3: '',
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
                CPU: this.CPU,
                RAM: this.RAM,
                SSD: this.SSD,
                HDD: this.HDD,
                VideoCard: this.VideoCard,
                Licence:this.Licence,
                Other1:this.Other1,
                Other2:this.Other2,
                Other3:this.Other3,
                client_id:this.client_id
            }
            this.$store.dispatch('ajaxSetSystemUnitToDB', data )
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

</style>
