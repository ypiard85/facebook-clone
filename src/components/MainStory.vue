<template>
    <div class="story_item" :style="[bgstory]" >  
        <img :src="logo" :alt="title">       
         <p> {{title}} </p>  
    </div>
</template>

<script>
    export default{
        props:{
            logo:{
                type: String,
                required: true
            },
            
            bg:{
                type: String,
                required: true
            },
            
            title:{
                type: String,
                required: true
            },
            
        },

        data(){
            return{
                bgstory:{
                    backgroundImage: 'url(' + this.bg + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center'
                }
            }
        }
    }
</script>
