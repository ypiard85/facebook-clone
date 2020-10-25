<template>    
    <div class="main_option">
         <router-link :to="to">
            <img :src="img" height="40" alt="">
            <p> {{title}} </p>
        </router-link>  
    </div>
         
</template>

<script>    
    export default{
        props:{
            to:{
                type: String,
                required: true,
                default: null
            },
            title:{
                type: String,
                required: true,
                default: null
            },
            img:{
                type: String,
                required: true,
                default: null
            },
        }
    }
</script>
