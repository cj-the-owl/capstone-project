<template>
    <div>
        <div class="card">
            <div v-if="product">
                <h1>{{ product.prodName }}</h1>
                <div>
                    <img :src="product.prodUrl">
                    <p>{{ product.Category }}</p>
                    <p>R {{ product.prodPrice }}</p>
                </div>
            </div>
            <div v-else>I dunno bru</div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            product() {
                return this.$store.state.singleBook;
            },
        },
    }
</script>