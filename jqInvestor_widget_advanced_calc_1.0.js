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

/*
//widget requirements
1. will take in array data
2. Will output array data
*/

// ------------------ FINANCIAL HEALTH INDICATORS --------------------



(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.GetFinancialHealthIndicatorsData = function (ctrlId, inArray) {
        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //test
            //var inArray = [[100000, 150000, 20000, 10000, 45000, 10000, 2000, 10000, 10000, 60000, 10000], [10000, 15000, 2000, 1000, 4500, 1000, 200, 1000, 1000, 6000, 1000], [200000, 250000, 30000, 20000, 55000, 20000, 3000, 20000, 20000, 70000, 20000], [120000, 170000, 22000, 12000, 47000, 12000, 2200, 12000, 12000, 62000, 12000], [150000, 200000, 25000, 15000, 50000, 15000, 2500, 15000, 15000, 65000, 15000]]];
            var outArr = [[totalExpenditure = 0, netIncome = 0, netIncomeApplicableToCommon = 0, roi = 0, roe = 0, deficit = 0, surplus = 0, debtRatio = 0, grossProfit = 0, grossProfitMargin = 0, grossMargin = 0, operatingIncome = 0, retainedEarnings = 0]];

            var i = 0;
            inArray.forEach(function (elem) {
                var dataTemp = $(ctrlId).FinancialHealthIndicators(elem[0], elem[1], elem[2], elem[3], elem[4], elem[5], elem[6], elem[7], elem[8], elem[9], elem[10]);
                //alert(dataTemp.data["totalExpenditure"] + " " + dataTemp.data["netIncome"]);
                if (i == 0) {
                    outArr[0] = [totalExpenditure = dataTemp.data["totalExpenditure"], netIncome = dataTemp.data["netIncome"], netIncomeApplicableToCommon = dataTemp.data["netIncomeApplicableToCommon"], roi = dataTemp.data["roi"], roe = dataTemp.data["roe"], deficit = dataTemp.data["deficit"], surplus = dataTemp.data["surplus"], debtRatio = dataTemp.data["debtRatio"], grossProfit = dataTemp.data["grossProfit"], grossProfitMargin = dataTemp.data["grossProfitMargin"], grossMargin = dataTemp.data["grossMargin"], operatingIncome = dataTemp.data["operatingIncome"], retainedEarnings = dataTemp.data["retainedEarnings"]];
                }
                else {
                    outArr.push([totalExpenditure = dataTemp.data["totalExpenditure"], netIncome = dataTemp.data["netIncome"], netIncomeApplicableToCommon = dataTemp.data["netIncomeApplicableToCommon"], roi = dataTemp.data["roi"], roe = dataTemp.data["roe"], deficit = dataTemp.data["deficit"], surplus = dataTemp.data["surplus"], debtRatio = dataTemp.data["debtRatio"], grossProfit = dataTemp.data["grossProfit"], grossProfitMargin = dataTemp.data["grossProfitMargin"], grossMargin = dataTemp.data["grossMargin"], operatingIncome = dataTemp.data["operatingIncome"], retainedEarnings = dataTemp.data["retainedEarnings"]]);
                }

                //alert("out: " + outArr[i]);
                i = i + 1;

            });

            //return vals
            $t.data["dataSetFHI"] = outArr;


            //$t.text(amount);


            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

