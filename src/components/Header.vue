<template>
    <div class="header">
        <div class="header_left">
            <img src="https://www.470france.org/images/FB.png" alt="">
            <div class="header_input">
                <i class="material-icons">search</i>
                <input type="text" placeholder="Rechercher sur facebook">
            </div>
        </div>
        <div class="header_center">
            <div class="header_option">
                <router-link to="/">
                    <i class="material-icons">home</i>
                </router-link>
            </div>
            <div class="header_option">
                <router-link to="/">
                    <i class="material-icons">ondemand_video</i>
                </router-link>
            </div>
            <div class="header_option">
                <router-link to="/">
                    <i class="material-icons">storefront</i>
                </router-link>
            </div>
            <div class="header_option">
                <router-link to="/">
                    <i class="material-icons">groups</i>
                </router-link>
            </div>
            <div class="header_option">
                <router-link to="/">
                    <i class="material-icons">view_quilt</i>
                </router-link>
            </div>
        </div>
        <div class="header_right">
            <p>Créer</p>
            <i class="fab fa-facebook-messenger"></i>
            <i class="fas fa-bell" style="transform: rotate(-10deg) "></i>
            <i><img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/s80x80/64494732_10218895225275622_8609835413160329216_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=A_Noeqch91cAX97coHQ&_nc_oc=AQnCrI5UGp5jMb9v1LN8yBasMm0tpXPFBvE0DG9i3kdUnnR5-7sL1X3OjwAr_rxRm8ZoTnHZW9_NRg7Y7X44_rtu&_nc_ht=scontent-cdt1-1.xx&_nc_tp=28&oh=a9fe2040f1fcfa562bc2e27c50e97487&oe=5FB7F5F5" alt=""></i>
        </div>
    </div>
</template>

<script>
    import '@/css/header.css'
    export default{
        
    }
</script>