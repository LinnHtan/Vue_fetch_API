<template>
    <div>
        <h1>This is details</h1>
        <div class="col-6 offset-3">
         <div class="text-start m-3">
          <button class="btn btn-dark text-white  col-2" @click="back()"><i class="fa-solid fa-arrow-left fa-beat"></i></button>
         </div>
          <div class="" v-if="po">
              <div class="card m-2 shadow-lg" style="width: 18rem;"  >
                <img :src="po.image" class="card-img-top" width="150" height="200" alt="...">
                <div class="card-body">
                  <h3 class="card-title">{{ po.category }}</h3>
                  <p class="card-text">{{ po.title }}</p>
                  <p class="card-text">Price - {{ po.price }}</p>
                  <p class="card-text">Rating - {{ po.rating.rate }}</p>
                  <p class="card-text">Count - {{ po.rating.count }}</p>
                  <p class="card-text">{{ po.description }}</p>
                </div>
              </div>
            </div>
            <div v-else>
              <p>Loading product details...</p>
          </div>
         
        </div>
    </div>
</template>
<script src="../js/detail.js"></script>

