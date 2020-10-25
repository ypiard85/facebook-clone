<template>
    <div>
    <div class="moment" v-for="post in posts " :key="post.id">
    <div class="moment_post">
        <div class="moment_top">
            <div class="moment_left">
                <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/s80x80/64494732_10218895225275622_8609835413160329216_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=A_Noeqch91cAX97coHQ&_nc_oc=AQnCrI5UGp5jMb9v1LN8yBasMm0tpXPFBvE0DG9i3kdUnnR5-7sL1X3OjwAr_rxRm8ZoTnHZW9_NRg7Y7X44_rtu&_nc_ht=scontent-cdt1-1.xx&_nc_tp=28&oh=a9fe2040f1fcfa562bc2e27c50e97487&oe=5FB7F5F5" alt="">
                <div class="moment_info_user">
                    <p style="font-weight: bold;">Yoann Piard</p>
                    <p class="date">11h <span style="margin-top: -5px; font-weight: bold;">.</span> <span><i class="material-icons">groups</i></span></p>
                </div>
            </div>
            <div class="moment_right">
                <i class="material-icons">more_horiz</i>
            </div>            
        </div>
        <hr>
        
            <div class="post">
                <div class="post_text">
                    {{post.text}}
                </div>

                <div class="post_img">
                    <img :src="post.image" alt="">
                </div>

                <div class="post_option">
                    <div class="option">
                        <i class="far fa-thumbs-up"></i>
                        <span>J'aime</span>
                    </div>
                    <div class="option">
                        <i class="far fa-comment-alt"></i>
                        <span>Commenter</span>
                    </div>
                    <div class="option">
                        <i class="fas fa-share"></i>
                        <span>Partager</span>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
</template>


<script>

    export default{
        data(){
            return{
                posts: null
            }
        },

       async mounted(){
            this.posts = await this.$store.getters.getPost
        }
    }
</script>