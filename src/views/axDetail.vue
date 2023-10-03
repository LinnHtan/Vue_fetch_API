<template>
    <div class="container">
        <div v-if="alien">
            <div class="col-7 offset-3">
                <div class=" m-3 ">
                    <button class="btn btn-dark text-white  col-1   " @click="back()"><i
                            class="fa-solid fa-arrow-left fa-beat"></i></button>
                </div>
                <div class="d-flex justify-content-center">
                    <div>
                        <div class="card m-3 shadow-lg" style="width: 25rem;">
                            <img :src="alien.image" class="text-center" width="400" height="400" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Name - {{ alien.name }}</h5>
                                <p class="card-text">Status - {{ alien.status }}</p>
                                <p class="card-text">Species - {{ alien.species }}</p>
                                <p class="card-text">Gender - {{ alien.gender }}</p>
                                <p class="card-text">Location - {{ alien.location.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>
<script src="../js/axdetail.js"></script>