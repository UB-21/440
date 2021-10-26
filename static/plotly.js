d3.csv("/Users/liuqian/Desktop/DS440/Lavan's graph/data_tagged.csv", function(err, rows) {

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'sentiment'),
        line: { color: '#17BECF' }
    }


    var data = [trace1];

    var layout = {
        title: 'Basic Time Series',
    };

    Plotly.newPlot('myDiv', data, layout);
})