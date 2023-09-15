<template>
    <div>
        <div class="p-5 m-3" id="heading">
            <h1 class="text-center">My Profile</h1>
        </div>

        
        
        <div class="user-info">
            <h2>{{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h2>
            <img class="img-fluid" :src="$store.state.user?.userProfile" loading="lazy">
            <p>{{ $store.state.user?.gender }}</p>
            <p>{{ $store.state.user?.userAge }}</p>
            <p>{{ $store.state.user?.userRole }}</p>
            <p>{{ $store.state.user?.emailAdd }}</p>
            
            
        </div>
        <div class="buttons">

            <button class="btn" type="button" @click="editUserModal(user.userID)" data-bs-toggle="modal" :data-bs-target="'#editUserModal' + user.userID">Edit</button>
        <div class="modal fade" :id="'editUserModal' + user.userID" tabindex="-1" :aria-labelledBy="'editUserModalLabel' + user.userID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="editUserModalLabel">Edit</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="Firstname" name="name" v-model="editUser.firstName">
                        <input class="input" type="text" placeholder="Lastname" name="name" v-model="editUser.lastName">
                        <input class="input" type="text" placeholder="Age" name="name" v-model="editUser.userAge">
                        <input class="input" type="text" placeholder="Gender" name="name" v-model="editUser.gender">
                        <input class="input" type="text" placeholder="Email Address" name="name" v-model="editUser.emailAdd">
                        <input class="input" type="text" placeholder="Password" name="name" v-model="editUser.userPass">
                        <input class="input" type="text" placeholder="Profile" name="name" v-model="editUser.userProfile">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click="updateUser(user.userID)">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn" @click="deleteUser(user.userID)">Delete</button>

        <button type="submit" class="btn">
            <router-link to="/logout">Log Out</router-link>
        </button>
    </div>
    </div>
</template>

<script>
    export default {
        props: ["user"],
        data() {
            return {
                editUser: {
                    ...this.user,
                },
                editUserID: null,
                model: {
                    user: {
                        firstName: "",
                        lastName: "",
                        userAge: "",
                        gender: "",
                        emailAdd: "",
                        userPass: "",
                        userProfile: ""
                    },
                },
            };
        },

        computed: {
            user() {
                return this.$store.state.user
;            },
        },

        methods: {
            editUserModal(userID) {
                this.editUserID = userID;
                this.editUser = {
                    ...this.$store.state.users.find(
                        (user) => user.userID === userID
                    ),
                };
            },

            updateUser(userID) {
                this.$store.dispatch("updateUser", {
                    userID: userID,
                    ...this.editUser,
                })
                .then(() => {
                    console.log("Tis Updated");
                })
                .catch((err) => {
                    console.error("Error: ", err)
                });
            },

            deleteUser(id) {
            if (confirm("You sure bro?")) {
                this.$store.dispatch("deleteUser", id);
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
        }
        },
    };
</script>

<style scoped>
    .user-info {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .img-fluid {
        width: 200px;
        border: 3px solid black;
    }

    #heading {
        border: 3px solid black;
        background-color: #FFE280;
    }

    .modal-header, .modal-footer {
        background-color: #FFE280;
    }

    .modal-header {
        border-bottom: 3px solid black;
    }
    .modal-footer {
        border-top: 3px solid black;
    }

    .btn, .btn-close {
        border: 3px solid black;
        border-radius: 0px;
        background-color: #BEE0DF;
        color: black !important
    }

    .btn:hover, a:hover {
        color: #ffe280 !important;
        font-weight: bolder;
    }

    .modal-body {
        background-color: #F9F0E9;
    }

    .modal-dialog {
        border: 3px solid black;
    }

    .modal-content {
        border-radius: 0px !important;
    }

    .input {
        border: 3px solid black;
    }

    .buttons {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: center;
        gap: 50px;
    }

    .buttons .btn {
        width: 100px;
    }

    a {
        color: black !important;
        text-decoration: none !important;
    }

    #heading h1 {
    overflow: hidden;
    width: 18%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(30), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}

    /* media queries */

    @media screen and (max-width: 430px) {
        .buttons {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        gap: 30px;
        }
    }
</style>