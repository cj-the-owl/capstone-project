<template>
    <div>
        <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Our Books</h1>
    </div>

    <div v-if="products" class="flex-container" id="prods">
        <div class="display" v-for="product in products" :key="product.prodID" :product="product">
            <!-- <router-link :to="{name: 'product', params:{id: product.prodID}}"> -->
                <img class="book-img" :src="product.prodUrl">
                <h5 class="book-name">{{ product.prodName }}</h5>
                <!-- <p class="book-price">R {{ product.prodPrice }}</p> -->
                <button class="btn" type="button" @click="viewBook(product.prodID)">View More</button>
            <!-- </router-link> -->
        </div>
    </div>
    <div v-else>Just wait gou....</div>
    </div>
</template>

<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products;
            },
        },
        mounted() {
            this.$store.dispatch("fetchProducts");
        }, methods: {
            log(id) {
                console.log(id);
            },
            viewBook(prodID) {
                const selectBook = this.products.find(
                    (product) => product.prodID === prodID
                );
                this.$store.commit("setSingleBook", selectBook);
                this.$router.push({ name: "singleBookView", params: {prodID: prodID}});
            }
        }
    }
</script>

<style scoped>
    #heading {
        border: 3px solid black;
        background-color: #FFE280;
    }

    #prods {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 50px;
        justify-content: center;

    }

    .book-img {
        height: 400px;
        width: 300px;
        border: 3px solid black;
    }


    .book-name {
        text-align: center;
        border: 3px solid black;
        border-top: 0px;
        padding-top: 10px;
        height: 50px;
        background-color: #FFE280;
    }

    .btn {
        border: 3px solid black;
        border-radius: 0px;
        background-color: #BEE0DF;
    }
</style>