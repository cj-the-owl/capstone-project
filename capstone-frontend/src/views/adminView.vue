<template>
    <div>
        <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Products Admin</h1>
    </div>

    <addBook/>

    <table class="table-responsive-md table table table-bordered">
        <thead>
            <tr>
                <th scope="col">Book Id</th>
                <th scope="col">Book Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Image Url</th>
                <th scope="col">Edit/Delete Book</th>
            </tr>
        </thead>

        <tbody class="book-dis" v-for="product in products" :key="product.prodID" :product="product">
            <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.prodPrice }}</td>
                <td>{{ product.category }}</td>
                <td><img class="book-img" :src="product.prodUrl"></td>
                <td><updateBook :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>
            <div v-else>Just wait gou....</div>
        </tbody>
    </table>

    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Products Admin</h1>
    </div>

    <add-user/>

    <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">User Id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">User Role</th>
                <th scope="col">Email Address</th>
                <th scope="col">Password</th>
                <th scope="col">User Profile</th>
                <th scope="col">Edit/Delete User</th>
            </tr>
        </thead>

        <tbody class="user-display" v-for="user in users" :key="user.userID" :user="user">
            <tr v-if="users">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userPass }}</td>
                <td><img :src=user.userProfile></td>
                <td><update-user :user="user"/></td>
            </tr>
            <tr v-else>Just give a second...</tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import addBook from '@/components/addBook.vue'
    import updateBook from '@/components/updateBook.vue'
    import AddUser from '../components/addUser.vue';
    import UpdateUser from '../components/updateUser.vue';
    export default {
       components: {addBook, updateBook, AddUser, UpdateUser},

       computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.$store.state.product;
        },
        users() {
            return this.$store.state.users;
        },
        user() {
            return this.$store.state.user;
        }
       },
       mounted() {
        this.$store.dispatch("fetchProducts")
        this.$store.dispatch("fetchUsers")
       },
       methods: {
        deleteProduct(prodID) {
            if (confirm("are you certain?")) {
                this.$store.dispatch("deleteProduct", prodID);
                setTimeout(() => {
                    location.reload()
                }, 500)
            }
        },

        deleteUser(id) {
            if (confirm("You sure bro?")) {
                this.$store.dispatch("deleteUser", id);
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
        }
       }
    }
</script>