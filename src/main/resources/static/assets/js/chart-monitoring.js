

function drawGraph(data,element,colors,type) {
    var options = {
        colors: colors,
        backgroundColor: '#f1f8e9'
    };

    switch (type) {
        case 'line':  var chart = new google.visualization.LineChart(element); break;
        case 'pie':   var chart = new google.visualization.PieChart(element);
            options = {
                pieHole: 0.5,
                pieSliceTextStyle: {
                    color: 'black',
                },
                colors:colors,
                legend: 'none'
            };

        break;
        default: alert('wrong type');
    }

    chart.draw(data, options);
}