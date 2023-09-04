<template>
<!-- carousel -->

  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="carousel-img" src="https://i.postimg.cc/T1DWTY5Y/download-5.jpg">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1>Text One</h1>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src="https://i.postimg.cc/dtJCTCXG/download-4.jpg">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1>Text Two</h1>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src="https://i.postimg.cc/wM27kWPL/90s-anime-Anime-scenery-wallpaper-Cute-anime-wallpaper-Anime-scenery.jpg">
        <div class="container">
        <div class="carousel-caption text-start">
          <h1>Text Three</h1>
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
      <p class="text-center">Discover the best sellers that have captured the hearts and imaginations of readers worldwide. Dive into stories that have left a lasting impact, and find out why they've earned their top spot</p>
    </div>
    <div class="row">
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/RZRTMfMs/10-Spiritual-Reads-That-Are-Basically-Portable-Life-Coaches.jpg" width="140" height="450">
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/pL2D1TDD/All-the-Bright-Places-Movie-Tie-In-Edition-by-Jennifer-Niven-9780593118924-Penguin-Random-House-com.jpg" width="140" height="450">
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/dtn739yy/Glass-Houses-book-by-Rachel-Caine.jpg" width="140" height="450">
      </div>
    </div>
    <div class="row">
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/WzNNcQSf/A-book-about-a-hobby.jpg" width="140" height="450">
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/QCwyJ7Bk/The-Subtle-Art-of-Not-Giving-a-F-ck-A-Counterintuitive-Approach-to-Living-a-Good-Life-Mark-Manson.jpg" width="140" height="450">
      </div>
      <div class="mt-3 col-lg-4">
        <img class="best-sell-img" src="https://i.postimg.cc/wBjnH9dN/What-If-It-s-Us-Book-Review-The-One-with-Too-Many-Harry-Potter-References-Sophia-Ismaa.jpg" width="140" height="450">
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
    width: 100%;
  }

  #heading {
    border: 3px solid black;
    background-color: #FFE280;
  }
</style>
