<template>
    <div class="wrapper">
        <div class="row">
            <div class="12">
                <form>
                    <div class="mb-3">
                        <label for="InputNum" class="form-label">Код специальности </label>
                        <input type="text" class="form-control" id="InputNum" v-model="codePosition">
                    </div>
                    <div class="mb-3">
                        <label for="InputCabinet" class="form-label">Специальность</label>
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
    name: "CreatePosition",
    data:()=>({
        codePosition: '',
        description: ''
    }),
    methods:{
        store(){
            const data = {
                codePosition: this.codePosition,
                description: this.description
            }
            console.log(data)
            this.$store.dispatch('ajaxSetPositionToDB', data )
        }
    }
}
</script>

<style scoped>

</style>
