<template>
    <div>
        <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#addUserModal">Add</button>
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledBy="addUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="addUserModalLabel">Add User</h2>
                        <button class="btn-close" type="button" aria-label="close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input m-2" type="text" placeholder="User Name" required oninvalid="this.setCustomValidity('Insert Name')" v-model="model.user.firstName">
                        <input class="input m-2" type="text" placeholder="User Surname" required oninvalid="this.setCustomValidity('Insert Surname')" v-model="model.user.lastName">
                        <input class="input m-2" type="text" placeholder="Age" required oninvalid="this.setCustomValidity('Insert Age')" v-model="model.user.userAge">
                        <input class="input m-2" type="text" placeholder="Gender" required oninvalid="this.setCustomValidity('Insert Gender')" v-model="model.user.gender">
                        <input class="input m-2" type="text" placeholder="User Role" required oninvalid="this.setCustomValidity('Insert User Role')" v-model="model.user.userRole">
                        <input class="input m-2" type="text" placeholder="User Email" required oninvalid="this.setCustomValidity('Insert Email')" v-model="model.user.emailAdd">
                        <input class="input m-2" type="text" placeholder="User Password" required oninvalid="this.setCustomValidity('Insert Password')" v-model="model.user.userPass">
                        <input class="input m-2" type="text" placeholder="User Profile" required oninvalid="this.setCustomValidity('Insert Profile Url')" v-model="model.user.userProfile">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" @click="saveUser">Save</button>
                    </div>
                </div>
            </div>
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
                        userRole: "",
                        emailAdd: "",
                        userPass: "",
                        userProfile: "https://i.postimg.cc/QthGSHZS/Default-avatar-profile-icon-of-social-media-user.jpg"
                    }
                }
            };
        },

        methods: {
            saveUser() {
                this.$store.dispatch("saveUser", this.model.user);
                setTimeout(() => {
                    console.log("Loading");
                    location.reload();
                }, 500)
            }
        }
    }
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