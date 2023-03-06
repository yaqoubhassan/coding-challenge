<template>
    <div class="">
        <h3>MAIN NAVIGATION</h3>
    </div>
    <div class="side-bar">
        <ul class="side-menu">
            <RouterLink class="nav-link fa fa-gauge" to="/dashboard"> <span>Dashboard</span>
            </RouterLink>
            <RouterLink class="nav-link fa fa-light fa-users" to="/dashboard/farmers"><span>Farmers</span></RouterLink>
            <RouterLink class="nav-link fa fa-solid fa-user-nurse" to="/"><span>Staff</span></RouterLink>
            <RouterLink class="nav-link fa fa-solid fa-rotate" to="/"><span>Synchronization</span></RouterLink>
            <RouterLink class="nav-link fa fa-solid fa-gears" to="/"><span>Settings</span></RouterLink>
            <RouterLink class="nav-link fa fa-thin fa-folder-open" to="/"><span>Report</span></RouterLink>
        </ul>
    </div>
</template>

<style scoped>
.side-bar {
    margin-top: 40px;
    font-size: 20px;
}

/* .side-menu {
    list-style: none;
} */

.nav-link {
    padding: 20px 0px 0px 20px;
    margin: 5px 10px;
    padding-right: 50px;
}

span {
    font-family: 'Poppins';
    margin-left: 10px;
    font-size: 20px;
}

.side-menu a {
    text-decoration: none;
    /* color: #000000; */
}

a:hover {
    color: #22A45D;
}

a.router-link-exact-active {
    color: #22A45D;
}


h3 {
    font-size: 25px;
    color: #22A45D;
    font-weight: 600;
}

.fa {
    font-size: 20px;
    margin-right: 15px;
    color: #666666;
}



@media screen and (max-width: 1300px) {
    span {
        display: none;
    }

    h3 {
        display: none;
    }

    .nav-link {
        padding: 20px 0px 0px 0px;
        margin: 5px 10px;
        padding-right: 20px;
    }

}
</style>