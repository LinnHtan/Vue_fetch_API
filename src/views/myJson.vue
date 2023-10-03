<template>
    <div class="container">

        <div class="row">
            <div class="col ">
                <div class="col-7">
                    <label class="float-start m-2">Title</label>
                    <input type="text" v-model="title" class="form-control shadow-sm" placeholder="Enter title...">
                    <small class="text-danger" v-if="validation.title == true">Please fill the field!</small>
                </div>
                <div class="col-7">
                    <label class="float-start m-2">Description</label>
                    <textarea class="form-control shadow-sm" v-model="author" placeholder="Enter description..."
                        id=""></textarea>
                    <small class="text-danger" v-if="validation.author == true">Please fill the field!</small>
                </div>
                <button class="btn bg-dark text-white mt-3" @click="saveInfo()">Save</button>
            </div>
            <div class="col ">
                <h2>Total-{{ list.length }}</h2>
                <div class="" v-for="(j, index) in list" :key="index">
                    <div class="row">
                        <div class="card m-3 shadow-sm " style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">{{ j.title }}</h5>
                                <p class="card-text">{{ j.author }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script src="../js/myJson.js"></script>
  
  