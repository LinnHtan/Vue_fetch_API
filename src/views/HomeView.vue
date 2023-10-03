<template>
    <div class="container">
        <h1 class="mb-3 mt-1">My Shop</h1>
        <button class="btn btn-danger" @click="getData">Get Data</button>
        <h1 v-if="loadingStatus == true">Loading...</h1>
        <div v-else>
            <table class="table table-hover m-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="posts.length == 0">
                        <th scope="row" colspan="5" class="text-danger">
                            <h1>There is no data</h1>
                        </th>
    
                    </tr>
                    <tr v-else v-for="(post,index) in posts" :key="index">
                        <th>{{ post.id }}</th>
                        <td>{{ post.category }}</td>
                        <td>
                            <img :src="post.image" width="200" height="150" alt="">
                        </td>
                        <td>{{ post.price }}</td>
                        <td>{{ post.description }}</td>
    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="../js/home.js">

</script>

