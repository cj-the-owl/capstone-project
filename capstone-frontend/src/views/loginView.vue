<template>
    <div>
        <form @submit.prevent="login">
            <div class="container-fluid">
            <div class="p-5 m-5" id="heading">
                <h1 class="text-center">Login</h1>
            </div>
            <div class="col-6-fs-5 pb-4">
                <input type="email" v-model="payload.emailAdd" class="form-input" placeholder="Email" required>
            </div>
            <div class="col-6-fs-5 pb-4">
                <input type="password" v-model="payload.userPass" class="form-input" placeholder="Password" required>
            </div>
             <div class="col-6-fs-5 pb-4">
                <button class="btn" type="submit" @click.prevent="login">Sign-In</button>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
    return {
        payload: {
            emailAdd: "",
            userPass: ""
        },
    }
},

computed: {
    user() {
        return this.$store.state.user
    }
},

methods: {
    login() {
        console.log('Debug:', this.payload);
        this.$store.dispatch('login', this.payload)
    }
}
}
</script>

<style scoped>
    .container-fluid {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        width: 500px;
        margin-top: 30px;
        background-color: #FFE280;
    }

    #heading {
        border: 3px solid black;
        background-color: #F9F0E9;
        width: 300px;
    }

    .form-input {
        width: 300px;
        background-color: #F9F0E9;
        height: 50px;
    }

    .btn {
        background-color: #BEE0DF;
        border: 3px solid black;
        border-radius: 0px;
        height: 50px;
        width: 300px;
    }
</style>