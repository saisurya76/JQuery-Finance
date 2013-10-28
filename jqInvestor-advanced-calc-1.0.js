/* ===================================================
The MIT License (MIT)

Copyright (c) [2013] [Sai Suryanarayana Bollapragada]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ========================================================== */



// ------------------ RETURN ON EQUITY --------------------

//Function to calculate return on equity
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.ROE = function (NetIncome, AvgStockholderEquity) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //check
            if (!isNumber(NetIncome)) {
                alert("fn : ROE" + "\nPlease check input" + " 'NetIncome'");
                return false;
            }
            if (!isNumber(AvgStockholderEquity)) {
                alert("fn : ROE" + "\nPlease check input" + " 'AvgStockholderEquity'");
                return false;
            }
            

            //calculate roe
            var roe = NetIncome / AvgStockholderEquity;

            //return vals
            $t.data["roe"] = roe;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

// ------------------ RETURN ON INVESTMENT --------------------

//Function to calculate return on Investment
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.ROI = function (NetIncome, TotalAssets) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //check
            if (!isNumber(NetIncome)) {
                alert("fn : ROI" + "\nPlease check input" + " 'NetIncome'");
                return false;
            }
            if (!isNumber(TotalAssets)) {
                alert("fn : ROI" + "\nPlease check input" + " 'TotalAssets'");
                return false;
            }
          

            //calculate roi
            var roi = NetIncome / TotalAssets;

            //return vals
            $t.data["roi"] = roi;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

// ------------------ FINANCIAL HEALTH INDICATORS --------------------

//Function to calculate return on Investment
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.FinancialHealthIndicators = function (totalRevenue, totalAssets, costOfGoodsSold, operatingExpenditure, avgStockholderEquity, interestExpense, taxes, preferredStockDividend, totalLiabilities, sales, dividend) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //check
            if (!isNumber(totalRevenue)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'totalRevenue'");
                return false;
            }
            if (!isNumber(totalAssets)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'totalAssets'");
                return false;
            }
            if (!isNumber(costOfGoodsSold)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'costOfGoodsSold'");
                return false;
            }
            if (!isNumber(operatingExpenditure)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'operatingExpenditure'");
                return false;
            }
            if (!isNumber(avgStockholderEquity)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'avgStockholderEquity'");
                return false;
            }
            if (!isNumber(interestExpense)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'interestExpense'");
                return false;
            }
            if (!isNumber(taxes)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'taxes'");
                return false;
            }
            if (!isNumber(preferredStockDividend)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'preferredStockDividend'");
                return false;
            }
            if (!isNumber(totalLiabilities)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'totalLiabilities'");
                return false;
            }
            if (!isNumber(sales)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'sales'");
                return false;
            }
            if (!isNumber(dividend)) {
                alert("fn : FinancialHealthIndicators" + "\nPlease check input" + " 'dividend'");
                return false;
            }
            
            
            
            var deficit = NaN;
            var surplus = NaN;

            //calculate indicators
            var totalExpenditure = operatingExpenditure + costOfGoodsSold + interestExpense + taxes;
            var netIncome = totalRevenue - totalExpenditure;
            var netIncomeApplicableToCommon = totalRevenue - totalExpenditure - preferredStockDividend;
            var roi = netIncome / totalAssets;
            var roe = netIncome / avgStockholderEquity;
            
            if(netIncome < 0){
                var deficit = netIncome;
            }
            if(netIncome > 0){
                var surplus = netIncome;
            }
            
            var debtRatio = totalLiabilities / totalAssets;
            var grossProfit = totalRevenue - costOfGoodsSold;
            var grossProfitMargin = grossProfit / totalRevenue;
            var grossMargin = sales - costOfGoodsSold;
            var operatingIncome = grossMargin - operatingExpenditure;
            var retainedEarnings = netIncome - dividend;
            
            //return vals
            $t.data["totalExpenditure"] = totalExpenditure;
            $t.data["netIncome"] = netIncome;
            $t.data["netIncomeApplicableToCommon"] = netIncomeApplicableToCommon;
            $t.data["roi"] = roi;
            $t.data["roe"] = roe;
            $t.data["deficit"] = deficit;
            $t.data["surplus"] = surplus;
            $t.data["debtRatio"] = debtRatio;
            $t.data["grossProfit"] = grossProfit;
            $t.data["grossProfitMargin"] = grossProfitMargin;
            $t.data["grossMargin"] = grossMargin;
            $t.data["operatingIncome"] = operatingIncome;
            $t.data["retainedEarnings"] = retainedEarnings;
            
            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

// ------------------ FREE CASH FLOW --------------------

//Function to calculate return on FreeCashFlow
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.FreeCashFlow = function (netIncome, depreciation, amortization, CapitalExpenditure, changeInNetWorkingCapital) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //check
            if (!isNumber(netIncome)) {
                alert("fn : FreeCashFlow" + "\nPlease check input" + " 'netIncome'");
                return false;
            }
            if (!isNumber(depreciation)) {
                alert("fn : FreeCashFlow" + "\nPlease check input" + " 'depreciation'");
                return false;
            }
            if (!isNumber(amortization)) {
                alert("fn : FreeCashFlow" + "\nPlease check input" + " 'amortization'");
                return false;
            }
            if (!isNumber(CapitalExpenditure)) {
                alert("fn : FreeCashFlow" + "\nPlease check input" + " 'CapitalExpenditure'");
                return false;
            }
            if (!isNumber(changeInNetWorkingCapital)) {
                alert("fn : FreeCashFlow" + "\nPlease check input" + " 'changeInNetWorkingCapital'");
                return false;
            }
            


            //calc networkingcapital increase or decrease
            var nwc = NaN;
            if(changeInNetWorkingCapital >0){
                nwc = - changeInNetWorkingCapital;
            }
            if(changeInNetWorkingCapital <0){
                nwc = changeInNetWorkingCapital;
            }
            
            //calculate 
            var freeCashFlow = netIncome + depreciation + amortization - CapitalExpenditure + nwc;

            //return vals
            $t.data["freeCashFlow"] = freeCashFlow;
            //$t.text(freeCashFlow);


            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

