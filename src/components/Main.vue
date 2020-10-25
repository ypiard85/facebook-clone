<template>
    <div class="main"> 
        <div class="main_left">
            <MainOption to="/" title="Yoann Piard" img="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/s80x80/64494732_10218895225275622_8609835413160329216_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=A_Noeqch91cAX97coHQ&_nc_oc=AQnCrI5UGp5jMb9v1LN8yBasMm0tpXPFBvE0DG9i3kdUnnR5-7sL1X3OjwAr_rxRm8ZoTnHZW9_NRg7Y7X44_rtu&_nc_ht=scontent-cdt1-1.xx&_nc_tp=28&oh=a9fe2040f1fcfa562bc2e27c50e97487&oe=5FB7F5F5" />
            <MainOption to="/" title="Covid-19 - Centre d'information" img="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" />
            <MainOption to="/" title="Amis" img="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
            <MainOption to="/" title="Groupes" img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" />
            <MainOption to="/" title="Marketplace" img="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" />
            <MainOption to="/" title="Vidéos" img="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" />
            <MainOption to="/" title="Evenements" img="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" />
            <MainOption to="/" title="Souvenirs" img="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" />
            <MainOption to="/" title="Enregistrements" img="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" />      
        </div>
        <div class="main_center">            
            <div class="story">
                <MainStory logo="https://i.pinimg.com/originals/48/77/7f/48777f3752c15ff5f6b4050550837313.jpg" title="Squeezie" bg="https://pbs.twimg.com/media/EiwJbq4WoAAEmKI.jpg" />
                <MainStory logo="https://cdn-s-www.vosgesmatin.fr/images/E4BA5F76-3FA8-47C1-ABF4-65C3CF3EC68F/NW_detail_M/title-1576680650.jpg" title="Norman" bg="https://www.nautiljon.com/images/actualite/00/30/1548251104560_image.jpg" />
                <MainStory logo="https://yt3.ggpht.com/a/AATXAJyZ59XTf3i_Zt41u6UXe_Ew1j-sHWd6yHjlEfCiJA=s900-c-k-c0x00ffffff-no-rj" title="김버그" bg="https://i.ytimg.com/vi/Tgn_8Y2si4o/hqdefault.jpg" />
                <MainStory logo="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/blackpink-la-pop-coreenne-a-l-assaut-du-monde-1696593/27659153-1-fre-FR/Blackpink-la-pop-coreenne-a-l-assaut-du-monde.jpg" title="Black Pink" bg="https://images-na.ssl-images-amazon.com/images/I/71FX5hoqgjL._AC_SY606_.jpg" />
                <MainStory logo="https://pbs.twimg.com/media/C2HtV2DW8AAlmgA.jpg" title="Dr.Nozman" bg="https://yt3.ggpht.com/a/AATXAJwvTaCbolFWPuYGui00FFF9lrUTLnHudmnhIC4R6w=s900-c-k-c0x00ffffff-no-rj" />   
            </div>           
                <FeedMessage @addpostaction="AddNewPost" />          
                <Moment />           
        </div>        
        <MainRight />
        
    </div>
</template>


<script>
    import MainOption from '@/components/MainOption'
    import MainStory from '@/components/MainStory'
    import FeedMessage from '@/components/FeedMessage'
    import Moment from '@/components/Moment'
    import MainRight from '@/components/MainRight'
    import '@/css/main.css'
    import '@/css/feed.css'
    import '@/css/moment.css'
    import '@/css/mainright.css'
    import {FacebookService} from '@/service/facebook.service'

    export default{
        components:{
            MainOption, MainStory, FeedMessage, Moment, MainRight
        },

        methods:{
            AddNewPost(){
                FacebookService.addPost({
                    date: this.$store.state.datetime,
                    text: this.$store.state.text,
                    image:  this.$store.state.image
                })
                this.$store.state.text = ' '
                this.$store.state.image = ' '
            }      
        }
    }
</script>