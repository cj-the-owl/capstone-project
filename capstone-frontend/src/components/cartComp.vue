<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cartModal">Cart</button>

        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledBy="cartModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-dark" id="cartModalLabel">My Cart</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-for="product in getCart" :key="product.cartID">
                        <img :src="product.prodURL">
                        <h5>Name: {{ product.prodName }}</h5>
                        <p>Category: {{ product.category }}</p>
                        <p>Price: R {{ product.prodPrice }}</p>
                        <p>Quantity: {{ product.quantity }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn">Checkout Items</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        Name: 'Cart',
        computed: {
            getCart() {
                console.log(this.$store.state.cart);
                return this.$store.state.cart
            }
        },

        mounted() {
            this.$store.dispatch('getCart', this.id)
        }
    }
</script>