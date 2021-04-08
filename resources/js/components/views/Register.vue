
<template>

    <div class="row" id="regForm">
        <div class="col-md-6 col-6">
<!--            <img src="../assets/inventory.png" alt="">-->
        </div>
        <div class="col-md-6 col-6">
            <form>
                <div class="mb-3">
                    <label for="InputName1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="InputName1"
                            v-model="name">

                </div>
                <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="InputEmail1"
                           aria-describedby="emailHelp" v-model="email"
                           placeholder="Example: qwerty@mail.com">
                </div>
                <div class="mb-3">
                    <label for="InputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="InputPassword1" v-model="password" placeholder="password">
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="InputPassword2" v-model="repeatPassword" placeholder="Repeat your password" :style="{backgroundColor: (password  === repeatPassword) ? '' : 'rgb(226, 128, 128'}">
                </div>
                <button type="submit" class="btn btn-primary" @click="onSubmit" :disabled="disabled">Зарегистрироватся</button>
                <div class="alert alert-danger" role="alert" v-show="error">
                    {{error}}
                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: 'register',
    data(){
        return{
            name: '',
            email:'',
            password:'',
            repeatPassword:'',
            is_admin : null
        }
    },
    methods:{
        onSubmit(){
            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                is_admin: this.is_admin
            }
            this.$store.dispatch('register', data)
                .then(() => console.log(data)
                    // this.$router.push('/')
                )
                .catch(err => console.log(err))
        }
    },
    computed:{
        error(){
            return this.$store.getters.getError
        }
    }
}
</script>

<style scoped>
.alert-danger{
    margin-top: 25px;
}
#regForm{
    padding-top: 80px;
    display: flex;
}
#regForm div{
    text-align: left;
}
</style>
