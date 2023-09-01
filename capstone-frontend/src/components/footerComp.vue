<template>
    <footer>
        <div class="footer-info">
            <ul class="me-auto">
                <li class="fw-bold">Bookworm.Co</li>
                <li>Address</li><br>
                <li>Phone</li><br>
                <li>Email</li>
            </ul>
            <ul class="social">
                <li class="fw-bold">Socials</li>
                <li>Instagram</li><br>
                <li>LinkedIn</li><br>
                <li>Facebook</li>
            </ul>
            <ul class="social">
                <li class="fw-bold">Navigation:</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Books</li>
                <li>Contact Us</li>
                <li>Admin</li>
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

    .footer-info {
        margin-top: 30px;
        display: flex;
    }
</style>