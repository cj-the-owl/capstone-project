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
                            <input class="input" type="text" placeholder="Book Name" v-model="editProduct.product.prodName">
                            <input class="input" type="text" placeholder="Quantity" v-model="editProduct.product.quantity">
                            <input class="input" type="text" placeholder="Price" v-model="editProduct.product.prodPrice">
                            <input class="input" type="text" placeholder="Category" v-model="editProduct.product.category">
                            <input class="input" type="text" placeholder="Image Url" v-model="editProduct.product.prodUrl">
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
                console.log("Updated");
            })
            .catch((err) => {
                console.error("Error: ", err)
            });
        },
    },
};
</script>