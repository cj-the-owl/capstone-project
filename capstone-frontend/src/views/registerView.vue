<template>
    <div>
        <div class="p-5 m-5" id="heading">
            <h1 class="text-center">Register</h1>
        </div>
        <div class="p-5 m-3" id="inputs">
            <!-- <form @submit.prevent="saveUser"> -->
            <input class="input m-3" type="text" placeholder="User Name" required oninvalid="this.setCustomValidity('Insert Name')" v-model="model.user.firstName">
            <input class="input m-3" type="text" placeholder="User Surname" required oninvalid="this.setCustomValidity('Insert surname')" v-model="model.user.lastName">
            <input class="input m-3" type="text" placeholder="Age" required oninvalid="this.setCustomValidity('Insert Age')" v-model="model.user.userAge">
            <input class="input m-3" type="text" placeholder="Gender" required oninvalid="this.setCustomValidity('Insert Gender')" v-model="model.user.gender">
            <input class="input m-3" type="text" placeholder="User Email" required oninvalid="this.setCustomValidity('Insert Email Address')" v-model="model.user.emailAdd">
            <input class="input m-3" type="text" placeholder="User Password" required oninvalid="this.setCustomValidity('Insert Password')" v-model="model.user.userPass">
            <input class="input m-3" type="text" placeholder="User Profile" required oninvalid="this.setCustomValidity('Insert Profile Url')" v-model="model.user.userProfile">

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

    #heading h1 {
    overflow: hidden;
    width: 15%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}

@media screen and (max-width: 1000px) {
    #heading h1 {
    overflow: hidden;
    width: 25%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 900px) {
    #heading h1 {
    overflow: hidden;
    width: 30%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 800px) {
    #heading h1 {
    overflow: hidden;
    width: 35%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 700px) {
    #heading h1 {
    overflow: hidden;
    width: 40%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 600px) {
    #heading h1 {
    overflow: hidden;
    width: 50%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 500px) {
    #heading h1 {
    overflow: hidden;
    width: 70%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
@media screen and (max-width: 400px) {
    #heading h1 {
    overflow: hidden;
    width: 100%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: wrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(10), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}
}
</style>
