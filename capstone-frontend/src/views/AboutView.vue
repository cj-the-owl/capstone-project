<template>
  <div>

    <!-- add a photo of yourself!! -->
    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">About Us</h1>
      <p class="text-center fs-5">Welcome to Bookworm.Co, your literary gateway to the world.Founded in 2023, Bookworm.Co emerged from a passion for the written word and a deep belief in the power of stories to enlighten, inspire, and transform. As a leading online bookstore, we've curated an expansive collection of titles across all genres, ensuring that every reader finds their next favorite book in our virtual aisles.</p>
    </div>

    <div class="about-section">
      <img class="about-img" src="https://i.postimg.cc/fy7xTyqt/Book-aesthetic.jpg" loading="lazy">
      <img class="about-img" src="https://i.postimg.cc/N0Mq6r1t/download-6.jpg" loading="lazy">
      <img class="about-img" src="https://i.postimg.cc/qq29Jcds/Books-book-table-booktok-book-shopping-Waterstones-bookstore-shopping-romance-romcom-love.jpg" loading="lazy">
      <img class="about-img" src="https://i.postimg.cc/7LspZP1q/Mc-Nally-Jackson-Brooklyn.jpg" loading="lazy">

      <p class="text-center" id="about-info">Bookworm.Co began as a dream of Caryn Lodewyk, a passionate bibliophile who believed that every individual should have access to the vast universe of knowledge and imagination. Starting with just a few shelves of books, the store rapidly grew into a cornerstone of the Lansdowne community, thanks to the tireless dedication of our staff and the continuous support from our loyal customers.</p>
      <p class="text-center" id="about-info">With a curated selection of thousands of titles spanning from timeless classics to contemporary bestsellers, our shelves cater to all ages and interests. Whether you're searching for an old-time favorite, a niche genre, or the latest bestseller, chances are you'll find it nestled in our aisles. And if you don't, our knowledgeable staff is always on hand to assist or recommend the perfect read.</p>
      <p class="text-center" id="about-info">At Bookworm.Co, we believe that a bookstore is more than just a shop. It's an experience. That's why we host regular events including author meet-and-greets, book clubs, storytelling sessions for children, and writing workshops. Our cozy reading nook, with its soft armchairs and ambient lighting, offers the perfect escape from the hustle and bustle of daily life.</p>
      <p class="text-center" id="about-info">We pride ourselves on being more than just a business. We’re a part of this community. Through our literacy outreach programs, partnership with local schools, and support for budding authors, we strive to give back and foster a love for reading in every individual.</p>
    </div>

    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Meet The Founder</h1>
    </div>

    <div class="founder-section">
      <img class="founder-img" src="https://i.postimg.cc/8zP5D4Z3/IMG-20221020-105624-763.jpg" loading="lazy">

      <p class="text-center" id="founder-info">Caryn Lodewyk, the visionary behind "Bookworm.Co," was born with a fervent passion for stories. Hailing from the serene Welsh countryside and later studying Literature at Oxford, Caryn embarked on a worldwide journey, immersing herself in global tales and literary cultures. In 2022, she established "Bookworm.Co" in the heart of London. More than just a bookstore, it's a reflection of Caryn's travels and dedication to celebrating stories from all corners of the world. At the core of her ethos is the belief that every book bridges souls and cultures, a philosophy that "Bookworm.Co" cherishes to this day. Caryn's journey with books is a testament to her belief that literature is the bridge between souls, cultures, and epochs. And as you step into "Bookworm.Co," you don't just enter a store - you become part of Caryn's dream, her story, her legacy.</p>
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

  .about-section {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 10px;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 300px;
    height: 450px;
    font-size: 15px;
  }

  .about-img {
    height: 300px;
    width: 300px;
    border: 3px solid black;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 470px;
    width: 500px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 500px;
    height: 470px;
    font-size: 15px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  #heading h1 {
    overflow: hidden;
    width: 15%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(30), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}

  /* media queries */

  @media screen and (max-width: 1400px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 10px;
  }

  .about-img {
    height: 350px;
    width: 350px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 350px;
    height: 500px;
    font-size: 14px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 660px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 660px;
    height: 400px;
    font-size: 15px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 1200px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 10px;
  }

  .about-img {
    height: 300px;
    width: 300px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 300px;
    height: 450px;
    font-size: 14px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 660px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 660px;
    height: 400px;
    font-size: 15px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 900px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 70px;
    padding: 10px;
  }

  .about-img {
    height: 300px;
    width: 300px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 300px;
    height: 450px;
    font-size: 14px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 560px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 560px;
    height: 400px;
    font-size: 14px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 800px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 10px;
  }

  .about-img {
    height: 250px;
    width: 250px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 250px;
    height: 400px;
    font-size: 10px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 460px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 460px;
    height: 400px;
    font-size: 14px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 650px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 10px;
  }

  .about-img {
    height: 200px;
    width: 200px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 200px;
    height: 350px;
    font-size: 10px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 460px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 460px;
    height: 400px;
    font-size: 14px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 600px) {
    .about-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;
  }

  .about-img {
    height: 200px;
    width: 200px;
    border: 3px solid black;
  }

  #about-info {
    border: 3px solid black;
    padding: 10px;
    background-color: #FFE280;
    width: 200px;
    height: 350px;
    font-size: 10px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 460px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 460px;
    height: 400px;
    font-size: 14px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
  @media screen and (max-width: 550px) {
    .about-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 10px;
  }

  #heading {
    font-size: 12px;
  }

  .founder-section {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .founder-img {
    height: 400px;
    width: 360px;
    border: 3px solid black;
  }

  #founder-info {
    border: 3px solid black;
    background-color: #FFE280;
    width: 360px;
    height: 400px;
    font-size: 12px;
    padding: 13px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  }
</style>
