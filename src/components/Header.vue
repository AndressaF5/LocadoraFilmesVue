<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/carrinho">Carrinho</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: 'Header',
        methods: {

        },
        created() {
            console.log(this.mostrarFilmes)
        }
    }
</script>

<style>
</style>