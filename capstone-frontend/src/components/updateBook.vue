<template>
    <div>
        <div>
            <button class="btn" type="button" @click="editModal(product.prodID)" data-bs-toggle="modal" :data-bs-target="'#updateModal' + product.prodID">Edit</button>
            <div class="modal fade" :id="'updateModal' + product.prodID" tabindex="-1" :aria-labelledBy="'updateModalLabel' + product.prodID" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="updateModalLabel">Edit Book</h2>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <input class="input" type="text" placeholder="Book Name" v-model="editProduct.prodName">
                            <input class="input" type="text" placeholder="Quantity" v-model="editProduct.quantity">
                            <input class="input" type="text" placeholder="Price" v-model="editProduct.prodPrice">
                            <input class="input" type="text" placeholder="Category" v-model="editProduct.category">
                            <input class="input" type="text" placeholder="Image Url" v-model="editProduct.prodUrl">
                        </div>
                        <div class="modal-footer">
                            <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                            <button class="btn" type="button" data-bs-dismiss="modal" @click="updateProduct(product.prodID)">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"],
        data() {
            return {
                editProduct: {
                    ...this.product,
                },
                editProdID: null,
                model: {
                    product: {
                        prodName: "",
                        quantity: 0,
                        prodPrice: 0,
                        quantity: "",
                        prodPrice: "",
                        category: "",
                        prodUrl: "",

                    },
                },
            };
        },
        computed: {
            currentProd() {
                return this.$store.state.product;
            },
        },
        methods: {
            editModal(prodID) {
                this.editProdID = prodID;
                this.editProduct = {
                    ...this.$store.state.products.find((product) => product.prodID === prodID),
            };
        },
        updateProduct(prodID) {
            this.$store.dispatch("updateProduct", {
                prodID: prodID,
                ...this.editProduct,
            })
            .then(() => {
                alert("Book has been updated");
            })
            .catch((err) => {
                console.error("Error: ", err)
            });
            setTimeout(() => {
                location.reload()
            }, 500)
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