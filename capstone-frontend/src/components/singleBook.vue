<template>
    <div>
        <div class="card">
            <div v-if="product">
                <h4 class="name">{{ product.prodName }}</h4>
                <div>
                    <img class="singleProduct" :src="product.prodUrl">
                    <p class="cat">{{ product.category }}</p>
                </div>
                <div class="bottom">
                    <p class="price">R {{ product.prodPrice }}</p>
                    <button class="btn" type="button">Add To Cart</button>
                </div>
            </div>
            <div v-else> <spinner-comp/> </div>
        </div>
    </div>
</template>

<script>
import spinnerComp from './spinnerComp.vue';
    export default {
  components: { spinnerComp },
        computed: {
            product() {
                return this.$store.state.singleBook;
            },
        },
    }
</script>

<style scoped>
    .singleProduct {
        height: 400px;
        width: 300px;
        border: 3px solid black;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
    }
    .name, .cat {
        border: 3px solid black;
        text-align: center;
        margin-top: 10px;
        padding: 5px;
        background-color: #FFE280;
        width: 300px;
    }

    .bottom {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        align-items: center;
        gap: 60px;
    }

    .price, .btn {
        border: 3px solid black;
        background-color: #BEE0DF;
        border-radius: 0px;
        height: 40px;
        padding: 2px;
        text-align: center;
        width: 120px;
    }

    .price {
        margin-top: 17px;
    }
</style>