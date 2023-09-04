<template>
    <div>
        <div class="p-5 m-5" id="heading">
      <h1 class="text-center">Contact Us</h1>
    </div>
    <div class="row-align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100 p-5 m-4 rounded text center" id="contact-details">
                <img src="#">
                <p class="text black">314 Imam Haron Road Lansdowne Cape Town</p>
                <p class="text black">0712345678</p>
                <p class="texxt-black">lodewykcarynjayn@gmail.com</p>
                <ul>
                    <li><img src="https://i.postimg.cc/JhRJh7xR/icons8-instagram-50-4.png"></li>
                    <li><img src="https://i.postimg.cc/cJR1gsvL/icons8-github-50-4.png"></li>
                    <li><img src="https://i.postimg.cc/fRmjLrhf/icons8-linkedin-50-4.png"></li>
                </ul>
            </div>
        </div>

        <div class="col-md-6">
            <div class="h-100 p-5 m-4 text-black rounded-3" id="form-side">
                <form action="#" method="POST">
                    <div class="col-6 fs-5 pb-4">
                        <input type="text" class="form-input" id="fullName" placeholder="Full Name Here" required oninvalid="this.setCustomValidity('Insert Name & Surname')">
                    </div>
                    <div class="col-12 fs-5 pb-4">
                        <input type="text" class="form-input" id="email" placeholder="Your Email Here" required oninvalid="this.setCustomValidity('Insert Email')">
                    </div>
                    <div class="col-12 fs-5 pb-4">
                        <input type="text" class="form-input" id="message" placeholder="Your Message Here" required oninvalid="this.setCustomValidity('Insert a Message')">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn" id="form-btn">Submit Here</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="position relative overflow-hidden" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            
        </div>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    #heading {
        border: 3px solid black;
        background-color: #FFE280;
  }

  ul {
    list-style: none;
    display: flex;
    padding-left: 0rem;
  }

  li {
    padding-right: 40px;
  }
    .row-align-items-md-stretch {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
    }

    .form-input {
        border: 3px solid black;
        background-color: #F9F0E9;
        height: 40px;
    }

    #fullName, #email, #message {
        width: 20rem;
    }

    #message {
        height: 120px;
    }

    #form-btn {
        border: 3px solid black;
        border-radius: 0px;
        background-color: #BEE0DF;
        width: 20rem;
        height: 50px;
    }

    #form-side {
        border: 3px solid black;
        width: 425px;
        height: 420px !important;
        background-color: #FFE280;
    }

    #hero {
        background-image: url(https://i.postimg.cc/qvxtCXhK/Screenshot-2023-09-04-140941.png);
        background-repeat: no-repeat;
        background-size: cover;
        height: 25rem;
        background-position: center;
    }
</style>