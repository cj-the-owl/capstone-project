<template>
  <div>
    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">About Us</h1>
      <p class="text-center">Welcome to Bookworm.Co, your literary gateway to the world.Founded in 2023, Bookworm.Co emerged from a passion for the written word and a deep belief in the power of stories to enlighten, inspire, and transform. As a leading online bookstore, we've curated an expansive collection of titles across all genres, ensuring that every reader finds their next favorite book in our virtual aisles.</p>
    </div>

    <div class="something">
      <img src="#">
      <img src="#">
      <img src="#">

      <p class="text-center" id="about-info">Bookworm.Co began as a dream of Caryn Lodewyk, a passionate bibliophile who believed that every individual should have access to the vast universe of knowledge and imagination. Starting with just a few shelves of books, the store rapidly grew into a cornerstone of the Lansdowne community, thanks to the tireless dedication of our staff and the continuous support from our loyal customers.</p>
      <p class="text-center" id="about-info">With a curated selection of thousands of titles spanning from timeless classics to contemporary bestsellers, our shelves cater to all ages and interests. Whether you're searching for an old-time favorite, a niche genre, or the latest bestseller, chances are you'll find it nestled in our aisles. And if you don't, our knowledgeable staff is always on hand to assist or recommend the perfect read.</p>
      <p class="text-center" id="about-info">At Bookworm.Co, we believe that a bookstore is more than just a shop. It's an experience. That's why we host regular events including author meet-and-greets, book clubs, storytelling sessions for children, and writing workshops. Our cozy reading nook, with its soft armchairs and ambient lighting, offers the perfect escape from the hustle and bustle of daily life.</p>
    </div>
  </div>
  
    
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #heading {
    background-color: #FFE280;
    border: 3px solid black;
  }

  .something {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 10px;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 300px;
    height: 450px;
  }
</style>
