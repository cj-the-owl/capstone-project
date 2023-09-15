<template>
<!-- carousel -->
<div>
  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="carousel-img" src="https://i.postimg.cc/T1DWTY5Y/download-5.jpg" loading="lazy">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1 class="carousel-text">Welcome to Bookworm.Co!</h1>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src="https://i.postimg.cc/dtJCTCXG/download-4.jpg" loading="lazy">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1 class="carousel-text">Your literary gateway to the world!</h1>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src="https://i.postimg.cc/wM27kWPL/90s-anime-Anime-scenery-wallpaper-Cute-anime-wallpaper-Anime-scenery.jpg" loading="lazy">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1 class="carousel-text">We offer a vast variety of genres at affordable prices!</h1>
        </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- best sellers -->

  <div class="container-marketing">
    <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Some of our best sellers</h1>
      <p class="text-center">Discover the best sellers that have captured the hearts and imaginations of readers worldwide. Dive into stories that have left a lasting impact, and find out why they've earned their top spot<br><br>
        <router-link to="/products"><button type="button" class="btn">View Books</button></router-link></p>
      
    </div>
    <div class="row">
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/RZRTMfMs/10-Spiritual-Reads-That-Are-Basically-Portable-Life-Coaches.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/pL2D1TDD/All-the-Bright-Places-Movie-Tie-In-Edition-by-Jennifer-Niven-9780593118924-Penguin-Random-House-com.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/dtn739yy/Glass-Houses-book-by-Rachel-Caine.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>

      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/WzNNcQSf/A-book-about-a-hobby.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/QCwyJ7Bk/The-Subtle-Art-of-Not-Giving-a-F-ck-A-Counterintuitive-Approach-to-Living-a-Good-Life-Mark-Manson.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/wBjnH9dN/What-If-It-s-Us-Book-Review-The-One-with-Too-Many-Harry-Potter-References-Sophia-Ismaa.jpg" width="140" height="450" loading="lazy">
        <router-link to="/products"><button type="button" class="btn">View More</button></router-link>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .carousel-img {
    width: 100%;
    height: 500px;
  }

  .best-sell-img {
    width: 300px;
    height: 400px;
    border: 3px solid black;
  }

  .row {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  #heading {
    border: 3px solid black;
    background-color: #FFE280;
  }

  .btn {
    border: 3px solid black;
    border-radius: 0px;
    background-color: #bee0df;
  }

  .btn:hover {
  color: #ffe280 !important;
  font-weight: bolder;
  }

  .carousel-text {
    font-weight: bolder;
    font-size: 50px
  }

  #heading h1 {
    overflow: hidden;
    width: 45%;
    border-right: .10em solid rgb(255, 192, 75);
    white-space: nowrap; 
    margin: 0 auto; 
    animation: typing 1.5s steps(50), blink .55s step-end infinite;
  }
  @keyframes typing {
  from { width: 0 } 
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 192, 75); }
}

  /*media queries*/

  @media screen and (max-width: 1360px) {
    #heading h1 {
      white-space: wrap;
    }
  }

  @media screen and (max-width: 1130px) {
    .row {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 230px;
    height: 330px; 
  }

  }

  @media screen and (max-width: 900px) {
    .row {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 200px;
    height: 300px; 
  }

  }
  
  @media screen and (max-width: 840px) {
    .row {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 190px;
    height: 290px; 
  }

  }
  @media screen and (max-width: 760px) {
    .row {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 150px;
    height: 250px; 
  }

  }
  @media screen and (max-width: 650px) {
    .row {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 200px;
    height: 300px;
    
  }
  }
  @media screen and (max-width: 500px) {
    .row {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 50px;
  }

  .best-sell-img {
    width: 150px;
    height: 250px;
    
  }

  .carousel-text {
    font-weight: bolder;
    font-size: 40px
  }
  }
  @media screen and (max-width: 400px) {
    .row {
    /* display:contents; */
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    /* gap: 100px; */
  }

  .best-sell-img {
    width: 200px;
    height: 300px;
    
  }

  .carousel-text {
    font-weight: bolder;
    font-size: 30px
  }

  .mt-3 {
    display: grid;
  }
  }
</style>
