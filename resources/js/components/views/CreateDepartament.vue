<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <!--                model	invNum	serialNum	Other	client_id	created_at	updated_at-->
                <form>
                    <div class="mb-3">
                        <label for="InputNum" class="form-label">Кол отдела </label>
                        <input type="text" class="form-control" id="InputNum" v-model="codeDepartament">
                    </div>
                    <div class="mb-3">
                        <label for="InputCabinet" class="form-label">Отдел</label>
                        <input type="text" class="form-control" id="InputCabinet" v-model="description">
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
name: "CreateDepartament",
    data:()=>({
        codeDepartament: '',
        description: ''
    }),
    methods:{
        store(){
            console.log(123)
            const data = {
                codeDepartament: this.codeDepartament,
                description: this.description
            }
            console.log(data)
            this.$store.dispatch('ajaxSetDepartamentToDB', data )
        }
    }
}
</script>

<style scoped>

</style>
