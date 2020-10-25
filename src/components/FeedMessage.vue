<template>
    <div class="feed">
    <div class="feed_message">
        <div class="feed_message_top">
            <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/s80x80/64494732_10218895225275622_8609835413160329216_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=A_Noeqch91cAX97coHQ&_nc_oc=AQnCrI5UGp5jMb9v1LN8yBasMm0tpXPFBvE0DG9i3kdUnnR5-7sL1X3OjwAr_rxRm8ZoTnHZW9_NRg7Y7X44_rtu&_nc_ht=scontent-cdt1-1.xx&_nc_tp=28&oh=a9fe2040f1fcfa562bc2e27c50e97487&oe=5FB7F5F5" alt="">
            <form action="" @submit="addpost" >                
                    <input v-model="$store.state.text" type="text" class="messageSender_input" placeholder="Que voulez vous dire Yoann ?">               
                    <input v-model="$store.state.image" type="text" placeholder="Image">                            
                    <button type="submit" style="display: none;" >submit</button>
            </form>         
        </div>
        <div class="feed_message_option">
            <div class="option">
                <i class="fas fa-video" style="color: red;"></i>
                <span>Vidéo en direct</span>
            </div>
            <div class="option">
                <i class="fas fa-images" style="color: rgb(3, 187, 3);"></i>
                <span>Photo/Vidéo</span>
            </div>
            <div class="option">
                <i class="fas fa-smile" style="color: orange;"></i>
                <span>Humeur/Activité</span>
            </div>        
        </div>
    </div>
</div>
</template>

<script>
    export default{

        data(){
            return{

            }
        },

        methods:{
            addpost(){
                this.$emit('addpostaction')
            }
        }
    }
</script>