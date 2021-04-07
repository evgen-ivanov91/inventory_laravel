<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in links">
                        <router-link class="nav-link active" aria-current="page" :to="link.href">{{ link.title }}</router-link>
                    </li>

<!--                    <li class="nav-item dropdown">-->
<!--                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                            Dropdown link-->
<!--                        </a>-->
<!--                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
<!--                            <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--                            <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--                            <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
                </ul>
                <span > | <a @click="logout">Logout</a></span>
            </div>
        </div>
    </nav>


</template>

<script>
export default {
name: "Navigation",
    data(){
    return{
        links:[
            {
                title: "Главная",
                href: "/"
            },
            {
                title: "Users",
                href: "/users"
            },
            {
                title: "Login",
                href: "/login"
            }
        ]
    }
    },
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                })
        }
    }
}
</script>

<style scoped>

</style>
