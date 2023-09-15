<template>
    <div>
        <button class="btn" type="button" @click="editUserModal(user.userID)" data-bs-toggle="modal" :data-bs-target="'#editUserModal' + user.userID">Edit</button>
        <div class="modal fade" :id="'editUserModal' + user.userID" tabindex="-1" :aria-labelledBy="'editUserModalLabel' + user.userID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="editUserModalLabel">Edit</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.firstName">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.lastName">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userAge">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userRole">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.emailAdd">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userPass">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userProfile">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click="updateUser(user.userID)">Save</button>
                    </div>
                </div>
            </div>
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
                        userRole: "",
                        emailAdd: "",
                        userPass: "",
                        userProfile: ""
                    },
                },
            };
        },

        computed: {
            currentUser() {
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
        },
    };
</script>

<style scoped>
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

    .btn:hover {
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
</style>