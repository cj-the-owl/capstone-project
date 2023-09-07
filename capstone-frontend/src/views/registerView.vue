<template>
    <div>
        <input class="input m-2" type="text" placeholder="User Name" v-model="model.user.firstName">
        <input class="input m-2" type="text" placeholder="User Surname" v-model="model.user.lastName">
        <input class="input m-2" type="text" placeholder="Age" v-model="model.user.userAge">
        <input class="input m-2" type="text" placeholder="Gender" v-model="model.user.Gender">
        <input class="input m-2" type="text" placeholder="User Role" v-model="model.user.userRole">
        <input class="input m-2" type="text" placeholder="User Email" v-model="model.user.emailAdd">
        <input class="input m-2" type="text" placeholder="User Password" v-model="model.user.userPass">
        <input class="input m-2" type="text" placeholder="User Profile" v-model="model.user.userProfile">

        <button class="btn" type="button" @click="saveUser">Save</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    user: {
                        firstName: "",
                        lastName: "",
                        userAge: "",
                        gender: "",
                        userRole: "",
                        emailAdd: "",
                        userPass: "",
                        userProfile: "",
                    }
                }
            };
        },

        methods: {
            saveUser() {
                this.$store.dispatch("saveUser", this.model.user);
                setTimeout(() => {
                    console.log("Loading...");
                    location.reload();
                }, 500)
            }
        }
    }
</script>