<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cartModal" id="nav-link">Cart</button>

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
                        <button type="button" class="btn" id="but" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn" id="but">Checkout Items</button>
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

    #but, .btn-close {
        border: 3px solid black;
        border-radius: 0px;
        background-color: #BEE0DF;
        color: black !important
    }

    #but:hover, .btn-close:hover {
        color: #FFE280 !important;
        font-weight: bolder;
    }

    #nav-link {
        border-radius: 0px;
    }

    #nav-link:hover {
        border: 2px solid black;
        background-color: #FFE280;
        color: black !important;
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

    </style>