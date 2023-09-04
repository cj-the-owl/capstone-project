<template>
    <footer>
        <div class="footer-info">
            <ul class="me-auto">
                <li class="fw-bold">Bookworm.Co</li>
                <li>314 Imam Haron Road Lansdowne</li><br>
                <li>0712345678</li><br>
                <li>lodewykcarynjayn@gmail.com</li>
            </ul>
            <ul class="social">
                <li class="fw-bold">Socials</li>
                <a href="https://www.instagram.com/cj.the.owl/"><li class="soc">Instagram</li></a><br>
                <a href="https://www.linkedin.com/in/caryn-jayn-lodewyk-411165276/"><li class="soc">LinkedIn</li></a><br>
                <a href="https://www.facebook.com/carynjayn.lodewyk"><li class="soc">Facebook</li></a>
            </ul>
            <ul class="social">
                <li class="fw-bold">Navigation:</li>
                <router-link to="/"><li class="navi">Home</li></router-link> 
                <router-link to="/about"><li class="navi">About Us</li></router-link>
                <li class="navi">Our Books</li>
                <router-link to="/contact"><li class="navi">Contact Us</li></router-link>
                <li class="navi">Admin</li>
            </ul>
            <ul class="social">
                <li class="fw-bold">Business Hours:</li>
                <li>Mon-Fri:</li>
                <li>8AM - 6PM</li>
                <li>Sat:</li>
                <li>9AM - 3PM</li>
                <li>Sun: Closed</li>
            </ul>
        </div>
        <div>
            <p class="text-center pb-1 fw-bold">Copyright ©️ cj-the-owl</p>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    footer {
        background-color: #BEE0DF;
    }

    .me-auto, .social, p {
        margin-bottom: 0px;
        list-style: none;
        padding: 10px;
        font-size: 12px;
    }

    .social {
        padding-right: 20px;
    }

    li {
        color: black;
    }

    a {
        text-decoration: none;
    }

    .navi:hover, .soc:hover {
        color: #FFE280;
    }

    .footer-info {
        margin-top: 30px;
        display: flex;
    }
</style>