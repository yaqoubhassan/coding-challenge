<template>
    <div class="card">
        <div class="card-body">
            <div class="agenda">
                <div class="agenda-img-container">
                    <img src="../assets/images/agenda.png" alt="">
                </div>
                <div class="agenda-description">
                    <h3>Farmer's Panel</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sit quia
                        inventore error hic doloremque?</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 30px 0px 20px 40px;
    margin-bottom: 20px;
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

.agenda-description p {
    font-size: 15px;
    color: #666666;
}

.agenda-description h3 {
    font-size: 30px;
    font-weight: 600;
}
</style>