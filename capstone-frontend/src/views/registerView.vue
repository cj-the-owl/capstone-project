<template>
    <div>
        <div class="p-5 m-5" id="heading">
            <h1 class="text-center">Register</h1>
        </div>
        <div class="p-5 m-3" id="inputs">
            <!-- <form @submit.prevent="saveUser"> -->
            <input class="input m-3" type="text" placeholder="User Name" v-model="model.user.firstName">
            <input class="input m-3" type="text" placeholder="User Surname" v-model="model.user.lastName">
            <input class="input m-3" type="text" placeholder="Age" v-model="model.user.userAge">
            <input class="input m-3" type="text" placeholder="Gender" v-model="model.user.gender">
            <input class="input m-3" type="text" placeholder="User Email" v-model="model.user.emailAdd">
            <input class="input m-3" type="text" placeholder="User Password" v-model="model.user.userPass">
            <input class="input m-3" type="text" placeholder="User Profile" v-model="model.user.userProfile">

            <button class="btn m-3 fw-bold" type="button" @click="saveUser">Save</button>
        <!-- </form> -->
        </div>
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
                // setTimeout(() => {
                //     console.log("Loading...");
                //     location.reload();
                // }, 500)
            }
        }
    }
</script>

<style scoped>
    #heading {
        border: 3px solid black;
        background-color: #FFE280;
  }

  #inputs {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
  }

  .input {
    height: 40px;
    border: 3px solid black;
    width: 270px
  }

  .btn {
    border: 3px solid black;
    border-radius: 0px;
    background-color: #BEE0DF;
    width: 270px
  }

  .btn:hover {
        color: #ffe280 !important;
        font-weight: bolder;
    }
</style>