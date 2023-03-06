<template>
    <section id="header">
        <header>
            <nav class="navbar navbar-expand-lg py-2 px-5 fixed-top">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#"><img class="first-logo" src="../assets/images/logo.png" alt=""></a>
                    <a class="navbar-brand" href="#"><img class="second-logo" src="../assets/images/logo2.png" alt=""></a>

                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->

                    <div class="navbar-collapse" id="navbarNav">
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

<style scoped>
.navbar {
    background-color: #FAFBFC;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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

@media screen and (max-width: 1200px) {
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
        /* padding: 7px 5px 8px 5px; */
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
</style>