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
    </div>
</template>

<script>
    import addBook from '@/components/addBook.vue'
    import updateBook from '@/components/updateBook.vue'
    export default {
       components: {addBook, updateBook},

       computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.$store.state.product;
        },
       },
       mounted() {
        this.$store.dispatch("fetchProducts")
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
       }
    }
</script>