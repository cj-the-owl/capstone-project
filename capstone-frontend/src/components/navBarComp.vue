<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Name/Logo</router-link>
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
                        <router-link class="nav-link" to="#">Admin</router-link>
                    </li>
                </ul>
                <span class="navbar-nav navbar-text">
                    <router-link class="nav-link" to="#">Cart</router-link>
                    <router-link class="nav-link" to="#">Login</router-link>
                    <router-link class="nav-link" to="#">Register</router-link>
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navbar {
        background-color: #BEE0DF;
    }

    .nav-link {
        color: black;
    }

    .navbar-toggler {
        background-color: #FFE280;
        border: 3px solid black;
    }

    .navbar-toggler-icon {
        color: black;
    }
</style>