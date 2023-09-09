<template>
    <div>
        <div class="p-5 m-3" id="heading">
            <h1 class="text-center">My Profile</h1>
        </div>

        
        
        <div class="user-info">
            <img class="img-fluid" :src="$store.state.user?.userProfile">
            <h3>Hello there, {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h3>
            <h4>{{ $store.state.user?.emailAdd }}</h4>
            <h4>{{ $store.state.user?.userRole }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .user-info {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;
    }

    .img-fluid {
        width: 300px;
    }

    #heading {
        border: 3px solid black;
        background-color: #FFE280;
    }
</style>