<template>
    <div class="container ">
        <h1>Choice and see details</h1>
    
        <div class="row m-2">
            <div class="card m-2 shadow-lg" style="width: 18rem;" v-for="(post, index) in posts" :key="index">
                <img :src="post.image" class="card-img-top" width="300" height="400" alt="...">
                <div class="card-body">
                    <h3 class="card-title">{{ post.category }}</h3>
                    <p class="card-text">{{ post.title }}</p>
                    <button class="btn btn-primary" @click="details(post.id)">Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../js/about.js">

</script>

<style scoped>
.bgImg {
    background-image: url("@/assets/background.webp");
}
</style>

