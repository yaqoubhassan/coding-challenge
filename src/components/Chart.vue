<template>
    <div style="height: 150px; width: 100%;">
        <!-- <canvas id="myChart" height="100%" width="100%"></canvas> -->
        <!-- <Bar :data="chartData1" :options="chartOptions1" /> -->
        <Bar :data="chartData" :options="chartOptions" height="100%" width="100%" />
        <Line :data="chartData" :options="chartOptions" height="100%" width="100%" />
    </div>
</template>

<script>
// import Chart from 'chart.js/auto';
// import { onMounted } from 'vue';

import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, PointElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, Filler } from 'chart.js'

ChartJS.register(Title, PointElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, Filler)


export default {
    name: 'Chart',
    components: { Bar, Line },
    props: {
        chartData: {
            type: Object,
            required: true
        },
        chartOptions: {
            type: Object,
            default: () => { }
        }
    }
}
// export default {
//     props: {
//         labels: Array
//     },
//     setup() {
//         onMounted(() => {
//             const ctx = document.getElementById('myChart');
//             let myChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d', '14d', '15d', '16d', '17d', '18d', '19d', '20d', '21d'],
//                     datasets: [
//                         {
//                             label: 'Fully Rounded',
//                             data: [9, 10, 3, 5, 2, 3, 4, 7, 6, 1, 4, 8, 5, 6, 3, 8, 4, 10, 9, 5, 8],
//                             borderColor: '#195ff7',
//                             backgroundColor: '#195ff7',
//                             borderWidth: 2,
//                             borderRadius: Number.MAX_VALUE,
//                             borderSkipped: false,
//                             barPercentage: 0.5,
//                             barThickness: 10,
//                             // maxBarThickness: 8,
//                         }
//                     ]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: false,
//                         },
//                         // title: {
//                         //     display: true,
//                         //     text: '36%  ^',
//                         //     color: '#22A45D'
//                         // }
//                     }
//                 },
//             });
//         })
//     }
// }
</script>