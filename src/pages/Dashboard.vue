<template>
    <div>
        <HeaderComponent />
        <section id="stats">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3" id="mainNavigation">
                    <SideBarComponent />

                </div>
                <div class="col-xl-9 col-lg-9 col-md-9" id="mainContent">
                    <div>
                        <FarmerPanelComponent />
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </section>
    </div>
</template>


<script>
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'
import SideBarComponent from '../components/SideBar.vue'
import FarmerPanelComponent from '../components/FarmerPanel.vue'
import AnalyticsComponent from '../components/Analytics.vue'

export default {
    name: 'Chart',
    components: {
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        FarmerPanelComponent,
        AnalyticsComponent
    },
}
</script>

<style scoped>
#stats {
    margin-top: 90px;
}

#mainNavigation {
    padding: 40px 40px;
    max-height: 100%;
    background-color: #FFFFFF;
    height: 100%;
}

#mainContent {
    background-color: #F2F4F6;
    padding: 30px 60px 40px 40px;
}

@media screen and (max-width: 1300px) {
    #mainNavigation {
        width: 10%;
    }

    #mainContent {
        width: 90%;
    }

}

@media screen and (max-width: 1200px) {
    #mainNavigation {
        display: none;
    }

    #mainContent {
        width: 100%;
    }

    #stats {
        margin-top: 50px;
    }

}
</style>