<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>Personal Details</h4>
                <button class="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="first nav-link" aria-current="page" href="#">Item one</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Item two</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item three</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item four</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Item five</a>
                    </li>
                </ul>

            </div>
            <div class="card-body">
                <div class="row pt-3">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="text-center">
                            <div class="img-container mb-3">
                                <img src="../assets/profile-image.jpg" alt="">
                            </div>
                            <div class="container d-flex py-3">
                                <div class="container">
                                    <div class="cam-container">
                                        <img src="../assets/camera.png" alt="">
                                    </div>
                                    <span class="icon-caption">Take a photo</span>
                                </div>

                                <div class="container">
                                    <div class="upload-container">
                                        <img src="../assets/upload.png" alt="">
                                    </div>
                                    <span class="icon-caption">Upload photo</span>
                                </div>
                            </div>
                            <div class="gender-container">
                                <h5 style="font-size: 15px;">Gender</h5>
                                <div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1">
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2">
                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <form>
                            <div class="row g-3">
                                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 form-area">
                                    <div class="row g-3">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Birth Place</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
                                            <input type="date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">House Number</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Community</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Occupation</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">District</label>
                                            <input type="email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Region</label>
                                            <select class="form-control form-select">
                                                <option selected>Greater Accra</option>
                                                <option value="1">Region 1</option>
                                                <option value="2">Region 2</option>
                                                <option value="3">Region 3</option>
                                            </select>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Marital Status</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                            placeholder="Write a short introduction"></textarea>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="text-end form-btn">
                                    <button class="reset-btn">Reset</button>
                                    <button class="save-btn">Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-btn button {
    border-radius: 10px;
    padding: 5px 30px;
    font-size: 12px;
}

.reset-btn {
    margin-right: 15px;
    border: none;
    background-color: #22A45D;
    color: #FFFFFF;
    border: 2px solid #22A45D;
}

.save-btn {
    background-color: transparent;
    border: 2px solid #22A45D;
}

.save-btn:hover {
    background-color: #054221;
    color: #FFFFFF;
    border: 2px solid #054221;
}

.reset-btn:hover {
    background-color: #054221;
    border: 2px solid #054221;
}

input,
select {
    border-radius: 4px;
}

input:focus,
select:focus,
textarea:focus {
    border: 2px solid #22A45D;
    box-shadow: none;
}

.form-label {
    margin-bottom: 0px;
    color: #000000;
    font-size: 15px
}

.form-area .row {
    margin-bottom: 30px;
}

.gender-container {
    padding: 50px 0px 0px 30px;
    text-align: start;
}

.form-check input[type="radio"]:checked+label {
    color: #000000;
}

.form-check-label {
    color: #666666
}

.form-check-input {
    border: 1px solid #666666;
}

.form-check-input:checked {
    background-color: #22A45D;
    border: 1px solid #000000
}

.form-check-input:focus {
    border-color: #22A45D;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.cam-container,
.upload-container {
    border-radius: 50%;
    border: 1px solid #666666;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 5px;
}

.cam-container img,
.upload-container img {
    width: 100%;
    height: 100%;
}

.upload-container {
    background-color: black;
}

.upload-container img {

    -webkit-filter: invert(100%);
    /* Safari/Chrome */
    filter: invert(100%);
}

.nav-link {
    color: #666666;
    font-size: 15px;
    font-weight: 600;
    margin-right: 15px
}

.nav-link:hover {
    text-decoration: underline 2px #22A45D;
    text-underline-offset: 24px;
}

.first {
    margin-left: -18px;
}

a.active {
    text-decoration: underline 2px #22A45D;
    text-underline-offset: 24px;
}

.card {
    border: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card-header {
    background-color: #FAFBFC;
    padding: 20px 0px 10px 30px;

}

h4 {
    font-size: 25px;
    font-weight: 600;
}

.img-container {
    border: 3px solid #22A45D;
    padding: 2px;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    text-align: center;
    margin-left: auto !important;
    margin-right: auto !important;
}

.img-container img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
}

.icon-caption {
    color: #666666;
    font-size: 15px;
}

@media screen and (max-width: 682px) {
    .nav {
        display: none;
    }
}
</style>