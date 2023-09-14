<template>
    <div>
        <div>
            <button class="btn" type="btn" data-bs-toggle="modal" data-bs-target="#addModal">Add</button>

            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="addModalLabel">Add Book</h2>
                            <button class="btn-close" data-bs-dismiss="modal" type="button" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <input class="input m-2" type="text" placeholder="Book Title" v-model="model.product.prodName">
                            <input class="input m-2" type="text" placeholder="Quantity" v-model="model.product.quantity">
                            <input class="input m-2" type="text" placeholder="Price" v-model="model.product.prodPrice">
                            <input class="input m-2" type="text" placeholder="Category" v-model="model.product.category">
                            <input class="input m-2" type="text" placeholder="Image Url" v-model="model.product.prodUrl">
                        </div>
                        <div class="modal-footer">
                            <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                            <button class="btn" type="button" data-bs-dismiss="modal" @click="saveProduct">Save Book</button>
                        </div>
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
                    product: {
                        prodName: "",
                        quantity: "",
                        prodPrice: "",
                        category: "",
                        prodUrl: "",
                    }
                }
            };
        },
        methods: {
            saveProduct() {
                this.$store.dispatch("saveProduct", this.model.product);
                setTimeout(() => {
                    location.reload();
                }, 500);
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