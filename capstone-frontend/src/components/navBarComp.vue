<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img class="logo" src="https://i.postimg.cc/02jDXF3D/Screenshot-2023-09-09-124906-removebg-preview.png"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Our Books</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                </ul>
                <span class="navbar-nav navbar-text">
                    <cart-comp/>
                    <router-link class="nav-link" to="/login">Login</router-link>
                    <router-link class="nav-link" to="/singleUser">Profile</router-link>
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
import cartComp from './cartComp.vue'
    export default {
  components: { cartComp },

    }
</script>

<style scoped>
    .navbar {
        background-color: #BEE0DF;
    }

    .nav-link {
        color: black;
    }

    .nav-link:hover {
        border: 2px solid black;
        background-color: #FFE280;
    }
    .nav-link:active {
        border: 2px solid black;
        background-color: #FFE280;
    }

    .navbar-toggler {
        background-color: #FFE280;
        border: 3px solid black;
    }

    .navbar-toggler-icon {
        color: black;
    }

    .logo {
        width: 100px;
        height: 60px;
    }
</style>