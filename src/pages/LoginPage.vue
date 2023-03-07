<template>
  <section id="login-screen">
    <div class="row g-0">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 form-area">
        <div class="container">
          <img src="../assets/logo.png" class="logo" alt="Brand Logo">
          <div class="row pt-4">
            <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
              <h1 class="heading">Login</h1>
              <form class="py-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <div class="input-container">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email or username">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <div class="input-container">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    <i class="eye-icon"></i>
                  </div>
                </div>
                <div class="row mb-3 mx-4">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 form-check sm-text">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-end sm-text">
                    <a href="">Forgot password</a>
                  </div>
                </div>
                <button @click="navigateToDashboard" type="submit" class="submit-btn">Login</button>
              </form>
              <div class="container sign-up">
                <p>Don't have an account? <span><a href="">Sign Up</a></span></p>
              </div>
              <div class="auth-options pt-2">
                <p><span>Or continue with</span></p>
              </div>
              <div class="container py-3">
                <div class="row text-center socials">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <a href="https://google.com">
                      <div class="socials-icon-container">
                        <img src="../assets/google.png" alt="Google">
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <a href="https://facebook.com">
                      <div class="socials-icon-container">
                        <img src="../assets/facebook.png" alt="Facebook">
                      </div>
                    </a>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <a href="https://twitter.com">
                      <div class="socials-icon-container">
                        <img src="../assets/twitter.png" alt="Twitter">
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="conatiner text-center pt-3 terms">
                <p>By clicking the button above, you agree to our <span> <a href="">terms of us</a></span>
                  and <span><a href="">privacy policy</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 hero-area">
        <img src="../assets/hero-image.svg" class="" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    navigateToDashboard() {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
.form-area {
  background-color: #F2F4F6;
  border-radius: 0px 40px 40px 0px;
  margin-right: -60px;
  z-index: 1;
}

.logo {
  height: 40%;
  width: 40%;
  padding-top: 30px;
  padding-left: 40px;
  margin-bottom: 20px;
}

.heading {
  color: #22A45D;
  font-size: 30px;
  font-weight: 600;
}

.form-label {
  font-size: 20px;
  font-weight: normal;
}

.input-container {
  position: relative;
  border-radius: 5px;
}

.form-control {
  width: 100%;
  padding: 12px 36px 12px 12px;
  border-radius: 15px;
}

.form-control:focus {
  border-color: #22A45D;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.eye-icon {
  background-image: url('../assets/hide.png');
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 12;
  background-size: cover;
  top: 35%;
  right: 4%;
  cursor: pointer;
  color: lightgray;
}

.form-check-input {
  border: 1px solid #22A45D
}

.form-check-input:checked {
  background-color: #22A45D;
  border-color: #22A45D;
}

.form-check-input:focus {
  border-color: #22A45D;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.sm-text {
  font-size: 15px;
  font-weight: normal;
}

.sm-text a {
  color: #000000;
}

.submit-btn {
  width: 100%;
  background-color: #22A45D;
  border: none;
  font-size: 20px;
  border-radius: 15px;
  color: #FFFFFF;
  padding: 10px;
  font-weight: 600;
}

.submit-btn:hover {
  background-color: #0b532b;
}

.sign-up {
  font-size: 12px;
  color: #666666;
}

.sign-up span a {
  text-decoration: none;
  color: #22A45D;
  padding-left: 5px;
}

.sign-up span a:hover {
  color: #0b532b;
}

.auth-options p {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
  font-size: 15px;
}

.auth-options p span {
  background: #F2F4F6;
  padding: 0 10px;
}

.socials img {
  max-width: 100%;
  width: 30%;
  height: auto;
}

.socials-icon-container {
  border: 1px solid var(--bs-border-color);
  padding: 10px 0px;
  border-radius: 20px;
  background-color: #FFFFFF;
  position: relative;
  top: 0;
  transition: top ease 0.3s;
}

.socials-icon-container:hover {
  top: -2px;
  background-color: #F3F3FC;
  border: 1px solid #22A45D;
}

.terms {
  font-size: 12px;
}

.terms span a {
  text-decoration: none;
  color: #22A45D;
}

.hero-area {
  margin-left: -40px;
}


@media screen and (max-width: 992px) {
  .hero-area {
    display: none
  }

  .form-area {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    padding-top: 30px;
    padding-left: 0px;
  }
}

@media screen and (max-width: 576px) {
  .sm-text {
    width: 50%;
  }

  .col-sm-4 {
    width: 33.33%;
  }
}
</style>