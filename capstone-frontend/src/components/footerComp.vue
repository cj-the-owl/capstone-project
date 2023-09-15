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
                <router-link to="/products"><li class="navi">Our Books</li></router-link>
                <router-link to="/contact"><li class="navi">Contact Us</li></router-link>
                <router-link to="/admin"><li class="navi">Admin</li></router-link>
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
            <p class="text-center pb-1 fw-bold">Copyright ©️ cj-the-owl {{ new Date().getFullYear() }}</p>
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
        font-weight: bolder;
    }

    .footer-info {
        margin-top: 30px;
        display: flex;
    }

    /* media queries */

    @media screen and (max-width: 1000px) {
        .footer-info {
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .me-auto, .social, p {
            font-size: 10px;
        }

        .me-auto {
            margin-right: 70px !important;
        }
    }
    @media screen and (max-width: 900px) {
        .footer-info {
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .me-auto, .social, p {
            font-size: 10px;
        }

        .me-auto {
            margin-right: 10px !important;
        }
    }
    @media screen and (max-width: 600px) {
        .footer-info {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: center;
            align-items: center;
            
        }

        .me-auto, .social, p {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 500px) {
        .footer-info {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: center;
            align-items: center;
        }

        .me-auto, .social, p {
            font-size: 10px;
        }
    }
</style>