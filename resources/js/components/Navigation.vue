<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in links">
                        <router-link class="nav-link active" aria-current="page" :to="link.href">{{ link.title }}</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link class="nav-link active" aria-current="page" to="/login">Войти</router-link>
                    </li>
                    <li class="nav-item"  v-if="!isLoggedIn">
                        <router-link class="nav-link active" aria-current="page" to="/register">Зарегистрироваться</router-link>
                    </li>
                </ul>
                <span class="logout" v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
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
                title: "Пользователи",
                href: "/users"
            },
            {
                title: "Добавить пользователя",
                href: "/createclient"
            },
            {
                title: "Инвентаризация",
                href: "/compair"
            },
            {
                title: "Техника",
                href: "/alltechnics"
            },
            {
                title: "Списки",
                href: "/allsubsidiary"
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
                    this.$router.push('/login'),
                    location.reload(true)
                })
        }
    }
}
</script>

<style scoped>
.logout{
    color: #fff;
}
</style>
