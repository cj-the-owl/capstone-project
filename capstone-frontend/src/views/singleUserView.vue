<template>
    <div>
        <div class="p-5 m-5" id="heading">
            <h1 class="text-center">User Profile</h1>
        </div>

        <img class="img-fluid" :src="$store.state.user?.userProfile">
        <div>
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