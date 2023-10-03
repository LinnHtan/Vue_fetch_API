<template>
    <div class="container">
    
        <div class="row">
    
            <div v-for="(l, index) in list" :key="index" class="col-sm-4 shadow-lg">
    
                <div class="card m-3 shadow-lg" style="width: 18rem;">
    
                    <img :src="l.image" class="card-img-top" width="200" height="150" alt="...">
    
                    <div class="card-body">
    
                        <h5 class="card-title">{{ l.name }}</h5>
    
                    </div>
    
                </div>
    
                <div class="float-start ms-3">
    
                    <button class="btn btn-primary" @click="detail(l.id)">Details</button>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script src="../js/axios.js">

</script>
  
  