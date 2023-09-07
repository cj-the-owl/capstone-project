<template>
    <div>
        <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="addUserModal">Add</button>
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledBy="addUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="addUserModalLabel">Add User</h2>
                        <button class="btn-close" type="button" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input m-2" type="text" placeholder="User Name" v-model="model.user.firstName">
                        <input class="input m-2" type="text" placeholder="User Surname" v-model="model.user.lastName">
                        <input class="input m-2" type="text" placeholder="Age" v-model="model.user.userAge">
                        <input class="input m-2" type="text" placeholder="Gender" v-model="model.user.gender">
                        <input class="input m-2" type="text" placeholder="User Role" v-model="model.user.userRole">
                        <input class="input m-2" type="text" placeholder="User Email" v-model="model.user.emailAdd">
                        <input class="input m-2" type="text" placeholder="User Password" v-model="model.user.userPass">
                        <input class="input m-2" type="text" placeholder="User Profile" v-model="model.user.userProfile">
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
                        userProfie: ""
                    }
                }
            };
        },

        methods: {
            saveUser() {
                this.$store.dispatch("saveUser", this.model.user);
                setTimeout(() => {
                    console.llog("Loading");
                    location.reload();
                }, 500)
            }
        }
    }
</script>