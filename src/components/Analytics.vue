<template>
    <div>
        <div class="row gx-4 gy-4 mb-4">
            <div class="col-xl-7 col-lg-7 col-md-7">
                <div class="row g-4">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="income-area">
                            <div class="card percentage">
                                <div class="card-body">
                                    <div style="display: flex; margin-bottom: 30px;">
                                        <h4 style="font-size: 15px; color: #666666; margin-right: 10px;">
                                            This week</h4>
                                        <span class="legend-percent">36% ^</span>

                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <div class="cash">
                                            <h4>GH₵ 2,072</h4>
                                        </div>
                                        <div style="max-width: 50%; max-height: 40%; margin-top: -40px;">
                                            <Line :data="lineDataOne" :options="lineOptionsOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card income">
                                <div class="card-body">
                                    <div style="margin-bottom: 20px">
                                        <span style="font-size: 15px; color: #666666">Income</span>
                                    </div>
                                    <div class="total-inc">
                                        <h4>GH₵ 13,000</h4>
                                        <span>+14%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="revenue">
                            <div class="card">
                                <div class="card-body">
                                    <div class="total-inc">
                                        <span style="color: #000000">Revenue</span>
                                        <h4 style="margin-bottom: -1px;">GH₵
                                            13,000</h4>
                                    </div>
                                    <div style="margin-bottom: 65px">
                                        <span class="legend-percent">36% ^</span>
                                    </div>
                                    <div style="height: 150px; width: 100%;">
                                        <Line :data="lineDataTwo" :options="lineOptionsTwo" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5">
                <div class="total-earning">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div style="width: 50%;">
                                    <span class="heading">Total earning</span>
                                </div>
                                <div class="info-img-container ms-auto">
                                    <img src="../assets/images/information.png" alt="">
                                </div>
                            </div>
                            <div class="text-center">
                                <span class="legend-percent">36% ^</span>
                            </div>
                            <div class="text-start" style="margin-bottom: 35px">
                                <span style="font-size: 12px; color: #666666">April</span>
                            </div>
                            <div style="height: 150px; width: 100%;">
                                <Bar :data="barData" :options="barOptions" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div style="display: flex; justify-content: flex-end;" class="big-card-icons">
                            <div>
                                <img src="../assets/images/zoom-out.png" alt="Zoom-Out">
                            </div>
                            <div>
                                <img src="../assets/images/zoom-in.png" alt="Zoom-Out">
                            </div>
                            <div>
                                <img src="../assets/images/palm-of-hand.png" alt="Zoom-Out">
                            </div>
                            <div>
                                <img src="../assets/images/home.png" alt="Zoom-Out">
                            </div>
                            <div>
                                <img src="../assets/images/menu.png" alt="Zoom-Out">
                            </div>
                        </div>
                        <div>
                            <Line :data="lineDataThree" :options="lineOptionsThree" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, PointElement, Tooltip, LineElement, Legend, BarElement, CategoryScale, LinearScale, Filler } from 'chart.js'

ChartJS.register(Title, PointElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, Filler)
export default {
    name: 'Chart',
    components: {
        Bar,
        Line
    },
    data() {
        return {
            barData: {
                labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d', '14d', '15d', '16d', '17d', '18d', '19d', '20d', '21d'],
                datasets: [
                    {
                        label: 'Fully Rounded',
                        data: [9, 10, 3, 5, 2, 3, 4, 7, 6, 1, 4, 8, 5, 6, 3, 8, 4, 10, 9, 5, 8],
                        borderColor: '#195ff7',
                        backgroundColor: '#195ff7',
                        borderWidth: 2,
                        borderRadius: Number.MAX_VALUE,
                        borderSkipped: false,
                        barPercentage: 0.5,
                        barThickness: 10,
                    }
                ]
            },
            barOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: false,
                    },
                }
            },

            lineDataOne: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August'],
                datasets: [
                    {
                        label: 'Data One',
                        fill: false,
                        backgroundColor: '#7d1aee',
                        borderColor: '#7d1aee',
                        borderRadius: 5,
                        data: [5, 8, 6, 11, 3, 9, 7, 1],
                        pointStyle: 'circle',
                        pointBackgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        tension: 0.5
                    },
                ]
            },
            lineOptionsOne: {
                responsive: true,
                plugins: {
                    legend: {
                        position: false,
                    },
                },
                scales: {
                    y: {
                        display: false
                    },
                    x: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: [0, 0, 0, 0, 0, 0, 5, 0]
                    }
                }
            },
            lineDataTwo: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Data One',
                        fill: false,
                        backgroundColor: '#7d1aee',
                        borderColor: '#7d1aee',
                        borderRadius: 5,
                        data: [8, 18, 13, 23, 9, 4, 16],
                        pointStyle: 'circle',
                        borderWidth: 2,
                        cubicInterpolationMode: 'monotone',
                    },
                ]
            },
            lineOptionsTwo: {
                responsive: true,
                plugins: {
                    legend: {
                        position: false,
                    },
                },
                scales: {
                    y: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: [0, 0, 0, 5, 0, 0, 0]
                    }
                }
            },
            lineDataThree: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Data One',
                        fill: true,
                        backgroundColor: "rgba(34, 164, 93, 0.1)",
                        borderColor: '#22A45D',
                        borderRadius: 5,
                        data: [8, 18, 13, 23, 9, 4, 16],
                        pointStyle: 'circle',
                        borderWidth: 2,
                        cubicInterpolationMode: 'monotone',
                    },
                    {
                        label: 'Data Two',
                        fill: true,
                        backgroundColor: "rgba(125, 26, 238, 0.1)",
                        borderColor: '#7d1aee',
                        borderRadius: 5,
                        data: [3, 20, 14, 16, 7, 11, 13],
                        pointStyle: 'circle',
                        borderWidth: 2,
                        cubicInterpolationMode: 'monotone',
                    },
                ]
            },
            lineOptionsThree: {
                responsive: true,
                plugins: {
                    legend: {
                        position: false,
                    },
                }
            },
        }
    }
}
</script>

<style scoped>
.total-earning,
.revenue,
.income-area {
    height: 300px;
    max-height: 300px;
}

.big-card-icons div {
    margin: 5px;
    height: 20px;
    width: 20px;
}

.big-card-icons img {
    max-width: 100%;
    height: auto;
}

.card {
    border: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.income h4,
.total-inc h4 {
    font-size: 30px auto;
    font-weight: 600;
}

.total-earning .card {
    border: none;
    height: 100%;
}

.total-earning .heading {
    color: #666666;
    font-size: 15px;
}

.info-img-container {
    width: 45px;
    height: 45px;
}

.info-img-container img {
    max-width: 100%;
    height: auto;
}

.te-container {
    display: flex;
}

.total-inc {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.revenue .card {
    height: 100%;
}

.income-area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.income-area .income {
    height: 45%;
}

.income-area .percentage {
    height: 45%;
}

.legend-percent {
    font-size: 12px;
    color: #22A45D;
    font-weight: 600;
}

.total-inc span {
    font-size: 15px;
    font-weight: 600;
    color: #22A45D;
}

.percentage h4 {
    font-size: 15px
}

.cash h4 {
    font-size: 20px;
    font-weight: 600;
}

@media screen and (max-width: 1200px) {

    .income h4,
    .total-inc h4 {
        font-size: 15px;
        font-weight: 600;
    }

    .cash h4 {
        font-size: 12px;
    }

    .total-inc span {
        font-size: 10px
    }

}
</style>