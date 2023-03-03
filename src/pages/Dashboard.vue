<template>
    <div>
        <app-header></app-header>
        <section>
            <div class="row">
                <div class="col-xl-2 col-md-10" id="mainNavigation">
                    <div class="text-center">
                        <h3>MAIN NAVIGATION</h3>
                    </div>
                    <div class="side-bar">
                        <ul class="side-menu">
                            <li><a class="active" href="#">Dashboard</a></li>
                            <li><a href="#">Farmers</a></li>
                            <li><a href="#">Staff</a></li>
                            <li><a href="#">Synchronization</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                    </div>

                </div>
                <div class="col-xl-10 col-md-10" id="mainContent">
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <div class="agenda">
                                    <div class="agenda-img-container">
                                        <img src="../assets/images/agenda.png" alt="">
                                    </div>
                                    <div class="agenda-description">
                                        <h3>Farmer's Panel</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sit quia inventore error hic doloremque?</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7 bg-dark">hello</div>
                            <div class="col-xl-5 col-lg-5 col-md-5 bg-primary">Hello</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import Header from '../components/Header.vue'

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style scoped>
#mainNavigation {
    padding: 40px 20px;
    max-height: 100%;
    background-color: #FFFFFF;
    z-index: 1;
}

#mainNavigation h3 {
    font-size: 25px;
    color: #22A45D;
}

#mainContent {
    background-color: #F2F4F6;
    height: 100%;
    padding: 30px 60px 10px 40px;
}

.side-bar {
    margin-top: 40px;
    font-size: 20px;
}

.side-menu {
    list-style: none;
}

.side-menu li {
    padding: 5px 0px 0px 10px
}

a {
    text-decoration: none;
    color: #000000;
}

a:hover {
    color: #22A45D;
}

a.active {
    color: #22A45D;
}

.card {
    /* margin: 30px 30px 10px 20px; */
    border: none;
    border-radius: 10px;
    padding: 30px 0px 20px 40px;
}

.agenda {
    display: flex;    
}

.agenda-img-container {
    height: 80px;
    width: 80px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.agenda-img-container img {
    max-width: 100%;
    height: auto;
}

.agenda-description {
    margin-left: 40px;
    padding-top: 10px;
}

.agenda-description h3 {
    font-size: 30px
}

.agenda-description p {
    font-size: 15px;
    color: #666666;
}
</style>