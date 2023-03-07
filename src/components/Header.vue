<template>
    <section id="header">
        <header>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img class="first-logo" src="../assets/images/logo.png" alt=""></a>
                    <a class="navbar-brand" href="#"><img class="second-logo" src="../assets/images/logo2.png" alt=""></a>

                    <button @click="checkUrl" class="toggler" data-bs-toggle="offcanvas" href="#offcanvasExample"
                        role="button" aria-controls="offcanvasExample" type="button" title="toggler">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- <button id="yaqoub">Click</button> -->
                    <div class="collapse mycanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel"
                                style="color: #22A45D; font-size: 30px; font-weight: 600;">
                                MAIN NAVIGATION
                            </h5>
                            <button type="button" class="btn-close dismiss" id="dismiss" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div style="display: flex; flex-direction: column;">
                                <RouterLink class="nav-link fa fa-gauge" to="/dashboard"> <span>Dashboard</span>
                                </RouterLink>
                                <RouterLink class="nav-link fa fa-light fa-users" to="/dashboard/farmers">
                                    <span>Farmers</span>
                                </RouterLink>
                                <RouterLink class="nav-link fa fa-solid fa-user-nurse" to="/"><span>Staff</span>
                                </RouterLink>
                                <RouterLink class="nav-link fa fa-solid fa-rotate" to="/"><span>Synchronization</span>
                                </RouterLink>
                                <RouterLink class="nav-link fa fa-solid fa-gears" to="/"><span>Settings</span>
                                </RouterLink>
                                <RouterLink class="nav-link fa fa-thin fa-folder-open" to="/"><span>Report</span>
                                </RouterLink>
                            </div>
                            <hr>
                            <div v-if="subMenu" class="subMenu">
                                <ul class="subMenu-list">
                                    <li><a href="">Item One</a></li>
                                    <li><a class="active" href="">Item Two</a></li>
                                    <li><a href="">Item Three</a></li>
                                    <li><a href="">Item Four</a></li>
                                    <li><a href="">Item Five</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-collapse">
                        <ul class="navbar-nav ms-auto">

                            <li class="nav-item">
                                <div class="search-container">
                                    <img class="search-icon" src="../assets/images/search.png" alt="">
                                </div>
                            </li>

                            <li class="nav-item">
                                <div class="lamp-container">
                                    <img class="lamp-icon" src="../assets/images/lamp2.png" alt="">
                                </div>
                            </li>

                            <li class="nav-item">
                                <div class="language-container">
                                    <img class="language-icon" src="../assets/images/language.png" alt="">
                                </div>
                            </li>

                            <li class="nav-item">
                                <div class="profile-container" style="display: flex">
                                    <img class="profile-image" src="../assets/images/profile-image.jpg" alt="">
                                    <div class="container ms-4 py-1" style="line-height: 10px;">
                                        <h4 class="user-name">Kwame Anim</h4>
                                        <span>Farmer</span>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    </section>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {

    var dismissButton = document.getElementById("dismiss");
    var canvas = document.getElementById('offcanvasExample');
    dismissButton.addEventListener('click', myFunction)
    function myFunction() {
        canvas.classList.add("hiding")
    }

    var screen = document.getElementById("offcanvasExample");
    var canvasScreen = document.getElementById('offcanvasExample');
    screen.addEventListener('click', secondFunction)
    function secondFunction() {
        canvasScreen.classList.add("hiding")
    }
})
export default {
    data() {
        return {
            subMenu: false,
            showCanvas: true
        }
    },
    methods: {
        checkUrl() {
            if (this.$route.path === '/dashboard/farmers') {
                this.subMenu = true
            } else {
                this.subMenu = false
            }
        },
    }
}

</script>

<style scoped>
.navbar {
    background-color: #FAFBFC;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 10px 20px;
}

.first-logo {
    display: block;
    max-width: 250px;
    max-height: 70px;
    width: auto;
    height: auto;
}

.second-logo {
    display: block;
    max-width: 230px;
    max-height: 60px;
    width: auto;
    height: auto;
    margin-left: 120px;
}

.search-container {
    /* position: relative; */
    padding: 10px 8px 0px 5px;
    background-color: #F2F4F6;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 20px;
    justify-content: center;
    text-align: center;
}

.search-icon {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    height: 70%;
    width: 70%;
}

.lamp-container {
    position: relative;
    height: 50px;
    width: 50px;
    padding: 5px;
    background-color: #000000;
    border-radius: 10px;
    margin-right: 20px;
}

.lamp-icon {
    height: 100%;
    width: 100%;
}

.language-container {
    height: 50px;
    width: 50px;
    padding: 5px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-right: 70px;
}

.language-icon {
    height: 100%;
    width: 100%;
}

.profile-container {
    height: 60px;
    width: 60px;
    margin-right: 250px;
}

.profile-image {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.user-name {
    white-space: nowrap;
    font-size: 25px;
}

.profile-container span {
    color: #666666;
    font-size: 15px
}

.nav-link {
    padding: 20px 0px 0px 20px;
    margin: 5px 10px;
    padding-right: 50px;
    color: #666666;
}

.nav-link span {
    font-family: 'Poppins';
    margin-left: 10px;
    font-size: 20px;
}

.nav-link:hover {
    color: #22A45D;
}

a.router-link-exact-active {
    color: #22A45D;
}

.subMenu-list a {
    text-decoration: none;
    color: #666666;
    font-size: 20px;
    font-weight: 600;
}

.subMenu-list a:hover {
    color: #22A45D;
}

.subMenu-list a.active {
    color: #22A45D;
}

.subMenu-list li {
    list-style: none;
    margin-bottom: 10px;
}

.toggler {
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    color: var(--bs-navbar-color);
    background-color: transparent;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);
}

.mycanvas {
    --bs-offcanvas-zindex: 1045;
    --bs-offcanvas-width: 400px;
    --bs-offcanvas-height: 30vh;
    --bs-offcanvas-padding-x: 1rem;
    --bs-offcanvas-padding-y: 1rem;
    --bs-offcanvas-color: var(--bs-body-color);
    --bs-offcanvas-bg: var(--bs-body-bg);
    --bs-offcanvas-border-width: var(--bs-border-width);
    --bs-offcanvas-border-color: var(--bs-border-color-translucent);
    --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075);
    --bs-offcanvas-transition: transform 0.3s ease-in-out;
    --bs-offcanvas-title-line-height: 1.5;
}

.mycanvas.show:not(.hiding),
.mycanvas.showing {
    transform: none;
}

.mycanvas.hiding,
.mycanvas.show,
.mycanvas.showing {
    visibility: visible;
}

.mycanvas.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
}

.mycanvas {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
}

@media (min-width: 1200px) {


    .navbar-expand-lg .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto !important;
        height: auto !important;
        visibility: visible !important;
        background-color: transparent !important;
        border: 0 !important;
        transform: none !important;
        transition: none;
    }
}

@media (min-width: 1200px) {
    .navbar-expand-lg .toggler {
        display: none;
    }
}


@media screen and (max-width: 1200px) {
    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }

    .navbar-expand-lg .navbar-toggler {
        display: block;
    }

    .navbar-brand {
        display: none;
    }

    .search-container {
        height: 40px;
        width: 40px;
        text-align: center;
        justify-content: center;
        padding: 7px 5px 8px 5px;
    }

    .lamp-container,
    .language-container {
        height: 40px;
        width: 40px;
        text-align: center;
        justify-content: center;
    }

    .profile-container {
        height: 40px;
        width: 40px;
        margin-right: 120px;
    }

    .user-name {
        white-space: nowrap;
        font-size: 15px;
    }

    .profile-container span {
        font-size: 12px;
    }

}

@media (max-width: 992px) {
    .profile-container {
        margin-right: 0px;
    }

    .user-name,
    .profile-container span {
        display: none;
    }


    .language-container {
        margin-right: 20px;
    }

    .navbar {
        padding-left: 0px;
        padding-right: 0px;
    }
}
</style>