<template>
  <div>
    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Our Books</h1>
      <div class="sort-stuff">
        <select class="btn text-start" required v-model="category">
        <option value="All">All Categories</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Young-Adult">Young-Adult</option>
        <option value="Fiction">Fiction</option>
        <option value="Fantasy Fiction">Fantasy Fiction</option>
      </select>

        <input
          type="search"
          v-model="search"
          class="form control"
          placeholder="Search Book Title"
          aria-label="Search"
          aria-describedby="search-addon"
        />

      <button type="button" @click="sortByPrice()" class="btn">
        Sort By Price
      </button>
      </div>
    </div>

    <div v-if="products" class="flex-container" id="prods">
      <div
        class="display"
        v-for="product in products"
        :key="product.prodID"
        :product="product"
      >
        <!-- <router-link :to="{name: 'product', params:{id: product.prodID}}"> -->
        <img class="book-img" :src="product.prodUrl" />
        <div class="book-name">
          <h5>{{ product.prodName }}</h5>
          <p>{{ product.category }}</p>
          <p>R{{ product.prodPrice }}</p>
        </div>

        <!-- <p class="book-price">R {{ product.prodPrice }}</p> -->
        <button class="btn" type="button" @click="viewBook(product.prodID)">
          View More
        </button>
        <!-- </router-link> -->
      </div>
    </div>
    <div v-else><spinner-comp /></div>
  </div>
</template>

<script>
import spinnerComp from "@/components/spinnerComp.vue";
export default {
  components: { spinnerComp },

  data() {
    return {
      search: "",
      category: "All",
    };
  },

  computed: {
    // search() {
    //     let filterByCategory = this.products.filter(item => item.category == this.category || this.category == '')
    //     if (this.searchByTitle.trim().length > 0) {
    //         return filterByCategory.filter((input) => input.prodName.toLowerCase().includes(this.searchByTitle.trim().toLowerCase()))
    //     }
    //     return filterByCategory
    // },
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.prodName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    sortByPrice() {
      this.$store.commit("setPriceSort");
    },
    log(id) {
      console.log(id);
    },
    viewBook(prodID) {
      const selectBook = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSingleBook", selectBook);
      this.$router.push({ name: "singleBookView", params: { prodID: prodID } });
    },
  },
};
</script>

<style scoped>
#heading {
  border: 3px solid black;
  background-color: #ffe280;
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
  padding: 10px;
  /* height: 50px; */
  background-color: #ffe280;
  inline-size: 300px;
  overflow-wrap: break-word;
}

.btn {
  border: 3px solid black;
  border-radius: 0px;
  background-color: #bee0df;
}

.sort-stuff {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5px;
}

/* media queries */

@media screen and (max-width: 1350px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 350px;
    width: 250px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }
}
@media screen and (max-width: 1200px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
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
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 300px;
    overflow-wrap: break-word;
  }
}
@media screen and (max-width: 1000px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 350px;
    width: 250px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }
}
@media screen and (max-width: 850px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 300px;
    width: 200px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 200px;
    overflow-wrap: break-word;
  }
}
@media screen and (max-width: 650px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 350px;
    width: 250px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }

  .sort-stuff {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
}
}
@media screen and (max-width: 750px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
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
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 300px;
    overflow-wrap: break-word;
  }
}
@media screen and (max-width: 650px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 350px;
    width: 250px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }

  .sort-stuff {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
}
}
@media screen and (max-width: 550px) {
  #prods {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 300px;
    width: 200px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 200px;
    overflow-wrap: break-word;
  }

  .sort-stuff {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
}
}
@media screen and (max-width: 500px) {
  #prods {
    display: grid;
    grid-template-columns: auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
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
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }

  .sort-stuff {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
}
}
@media screen and (max-width: 400px) {
  #prods {
    display: grid;
    grid-template-columns: auto;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .book-img {
    height: 350px;
    width: 250px;
    border: 3px solid black;
  }

  .book-name {
    text-align: center;
    border: 3px solid black;
    border-top: 0px;
    padding: 10px;
    /* height: 50px; */
    background-color: #ffe280;
    inline-size: 250px;
    overflow-wrap: break-word;
  }

  .sort-stuff {
    display: grid;
    grid-template-columns: auto;
    gap: 5px;
}
}
</style>
