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



//  FHI -  TABLES
function GetInputHTMLTable_FHI(tableId, data) {

    var str = '<table id="' + tableId + '">';

    //head
    str += '<thead><tr>';
    str += '<th>' + 'TotalRevenue' + '</th>';
    str += '<th>' + 'TotalAssets' + '</th>';
    str += '<th>' + 'CostOfGoodsSold' + '</th>';
    str += '<th>' + 'OperatingExpenditure' + '</th>';
    str += '<th>' + 'AvgStockholderEquity' + '</th>';
    str += '<th>' + 'InterestExpense' + '</th>';
    str += '<th>' + 'Taxes' + '</th>';
    str += '<th>' + 'PreferredStockDividend' + '</th>';
    str += '<th>' + 'TotalLiabilities' + '</th>';
    str += '<th>' + 'Sales' + '</th>';
    str += '<th>' + 'Dividend' + '</th>';
    str += '</tr></thead>';

    //rows
    str += '<tbody>';
    data.forEach(function (elem) {
        str += '<tr><td>' + elem[0] + '</td>';
        str += '<td>' + elem[1] + '</td>';
        str += '<td>' + elem[2] + '</td>';
        str += '<td>' + elem[3] + '</td>';
        str += '<td>' + elem[4] + '</td>';
        str += '<td>' + elem[5] + '</td>';
        str += '<td>' + elem[6] + '</td>';
        str += '<td>' + elem[7] + '</td>';
        str += '<td>' + elem[8] + '</td>';
        str += '<td>' + elem[9] + '</td>';
        str += '<td>' + elem[10] + '</td></tr>';

    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

function GetOutputHTMLTable_FHI(tableId, result) {

    var str = '<table id="' + tableId + '">';

    //head
    str += '<thead><tr>';
    str += '<th>' + 'totalExpenditure' + '</th>';
    str += '<th>' + 'netIncome' + '</th>';
    str += '<th>' + 'netIncomeApplicableToCommon' + '</th>';
    str += '<th>' + 'roi' + '</th>';
    str += '<th>' + 'roe' + '</th>';
    str += '<th>' + 'deficit' + '</th>';
    str += '<th>' + 'surplus' + '</th>';
    str += '<th>' + 'debtRatio' + '</th>';
    str += '<th>' + 'grossProfit' + '</th>';
    str += '<th>' + 'grossProfitMargin' + '</th>';
    str += '<th>' + 'grossMargin' + '</th>';
    str += '<th>' + 'operatingIncome' + '</th>';
    str += '<th>' + 'retainedEarnings' + '</th>';
    str += '</tr></thead>';


    //rows
    str += '<tbody>';
    result.forEach(function (elem) {
        str += '<tr><td>' + Math.ceil(elem[0]) + '</td>';
        str += '<td>' + Math.ceil(elem[1]) + '</td>';
        str += '<td>' + Math.ceil(elem[2]) + '</td>';
        str += '<td>' + Math.ceil(elem[3]) + '</td>';
        str += '<td>' + Math.ceil(elem[4]) + '</td>';
        str += '<td>' + Math.ceil(elem[5]) + '</td>';
        str += '<td>' + Math.ceil(elem[6]) + '</td>';
        str += '<td>' + Math.ceil(elem[7]) + '</td>';
        str += '<td>' + Math.ceil(elem[8]) + '</td>';
        str += '<td>' + Math.ceil(elem[9]) + '</td>';
        str += '<td>' + Math.ceil(elem[10]) + '</td>';
        str += '<td>' + Math.ceil(elem[11]) + '</td>';
        str += '<td>' + Math.ceil(elem[12]) + '</td></tr>';

    });

    str += '</tbody>';
    str += '</table>';

    return str;

}

