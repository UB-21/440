d3.csv("~/Desktop/DS440/Dataset/data_tagged.csv", function(err, rows) {
    // d3.csv("https://raw.githubusercontent.com/UB-21/440/ca18df94eed032c814a0e630e0f39a851c4b50c6/data_tagged.csv", function(err, rows) {

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'label'),
        line: { color: '#17BECF' }
    }


    var data = [trace1];

    var layout = {
        title: 'Basic Time Series',
    };

    Plotly.newPlot('myDiv', data, layout);
})