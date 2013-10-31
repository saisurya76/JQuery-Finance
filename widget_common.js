//  SI -  TABLES

function GetInputHTMLTable_SI(tableId, data) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Principle</th><th>Rate</th><th>Time</th></tr></thead>';
    str += '<tbody>';

    data.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

function GetOutputHTMLTable_SI(tableId, result) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Interest</th><th>Amount</th></tr></thead>';
    str += '<tbody>';

    result.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + Math.ceil(elem[0]) + '</td><td>' + Math.ceil(elem[1]) + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

//  CI -  TABLES

function GetInputHTMLTable_CI(tableId, data) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Principle</th><th>Rate</th><th>Time</th><th>Compounding Period</th></tr></thead>';
    str += '<tbody>';

    data.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

function GetOutputHTMLTable_CI(tableId, result) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Interest</th><th>Amount</th></tr></thead>';
    str += '<tbody>';

    result.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + Math.ceil(elem[0]) + '</td><td>' + Math.ceil(elem[1]) + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

//  RD -  TABLES

function GetInputHTMLTable_RD(tableId, data) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Deposit</th><th>Rate</th><th>Time</th></tr></thead>';
    str += '<tbody>';

    data.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

function GetOutputHTMLTable_RD(tableId, result) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Interest</th><th>Amount</th></tr></thead>';
    str += '<tbody>';

    result.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + Math.ceil(elem[0]) + '</td><td>' + Math.ceil(elem[1]) + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

//  CB -  TABLES

function GetInputHTMLTable_CB(tableId, data) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Principle</th><th>minPaymentPercent</th><th>Rate</th><th>Month</th></tr></thead>';
    str += '<tbody>';

    data.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

function GetOutputHTMLTable_CB(tableId, result) {

    var str = '<table id="' + tableId + '">';
    str += '<thead><tr><th>Month</th><th>Balance</th></tr></thead>';
    str += '<tbody>';

    result.forEach(function (elem) {
        //alert(elem[0] + "," + elem[1]);
        str += '<tr><td>' + elem[0] + '</td><td>' + Math.ceil(elem[1]) + '</td></tr>';
    });

    str += '</tbody>';
    str += '</table>';

    return str;

}
