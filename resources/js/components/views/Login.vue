<template>
    <div class="container">
        <div class="row" id="regForm">
            <div class="col-md-6 col-6">
<!--                <img src="../assets/inventory.png" alt="">-->
            </div>
            <div class="col-md-6 col-6">
                <form>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="InputEmail1"
                               aria-describedby="emailHelp" v-model="email"
                               placeholder="Example: qwerty@mail.com"
                        >
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="InputPassword1" v-model="password" placeholder="password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="onSubmit">Войти!</button>
                </form>
                <div class="alert alert-danger" role="alert" v-show="error">
                    {{error}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
name: "Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{

        onSubmit(){
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }

        // onSubmit(){
        //     const user = {
        //         email: this.email,
        //         password: this.password
        //     }
        //     this.$store.dispatch('sendLoginRequest', user)
        //         .then (()=>{
        //             console.log('OK')
        //             // this.$router.push('/')
        //         })
        //
        // }
    },
    // computed:{
    //     error(){
    //         return this.$store.getters.getError
    //     }
    // }
    // data: function () {
    //     return {
    //         details: {
    //             email: "sawayn.fannie@example.net",
    //             password: "12345678",
    //         },
    //         user_id: 0,
    //     };
    // },
    // computed: {
    //     ...mapGetters(["errors"]),
    //     ...mapGetters("auth", ["user"]),
    // },
    // mounted() {
    //     this.$store.commit("setErrors", {});
    // },
    // methods: {
    //     ...mapActions("auth", ["sendLoginRequest"]),
    //     login() {
    //         this.sendLoginRequest(this.details).then(() => {
    //             this.$router.push('/');
    //         });
    //     },
    // }
}
</script>

<style scoped>

</style>
