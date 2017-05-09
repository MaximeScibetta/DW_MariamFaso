/*******************PREMIERE STAT******************** */
var data1 = {
    labels: [
        "Outils manquant",
        "Outils donnés"
    ],
    datasets: [{
        data: [350, 100],
        backgroundColor: [
            "#f0776c",
            "#ffd071",
            // "#3498db",
            //"#1abc9c"
        ],
        hoverBackgroundColor: [
            "#ff685b",
            "#FFCE56",
            // "#36A2EB"
        ]
    }]
};

var ctx1 = document.getElementById("asblStats").getContext("2d");
//ctx1.canvas.width = 400;
//ctx1.canvas.height = 400;
var myDoughnut = new Chart(ctx1, {
    type: 'doughnut',
    data: data1,
    options: {}
});
/************************2e SECTION ********************* */
/************************2e SECTION ********************* */
/************************2e SECTION ********************* */
var data2 = {
    labels: [
        "Manquant",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 200],
        backgroundColor: [
            "#f0776c",
            "#ffd071",
            "#3498db",
            "#1abc9c"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB"
        ],
        labels: {
            legend: "test"
        }
    }]
};
var ctx2 = document.getElementById("asblStat1").getContext("2d");
ctx2.canvas.width = 250;
ctx2.canvas.height = 250;
var myDoughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: {}
});

/***********************2e section 2eme stat************************* */
var data3 = {
    labels: [
        "Manquant",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 200],
        backgroundColor: [
            "#f0776c",
            "#ffd071",
            "#3498db",
            "#1abc9c"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB"
        ],
        labels: {
            legend: "test"
        }
    }]
};
var ctx3 = document.getElementById("asblStat2").getContext("2d");
ctx3.canvas.width = 400;
ctx3.canvas.height = 400;
var myDoughnut = new Chart(ctx3, {
    type: 'doughnut',
    data: data3,
    options: {}
});

/**********************3e stats********************* */
var data4 = {
    labels: [
        "Manquant",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 200],
        backgroundColor: [
            "#f0776c",
            "#ffd071",
            "#3498db",
            "#1abc9c"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB"
        ],
        labels: {
            legend: "test"
        }
    }]
};
var ctx4 = document.getElementById("asblStat3").getContext("2d");
ctx4.canvas.width = 400;
ctx4.canvas.height = 400;
var myDoughnut = new Chart(ctx4, {
    type: 'doughnut',
    data: data4,
    options: {}
});