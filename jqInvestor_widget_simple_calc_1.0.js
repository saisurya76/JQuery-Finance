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

// ------------------ SIMPLE INTEREST Widget--------------------



(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.GetSimpleInterestData = function (ctrlId, inArray) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //test
            //var inArray = [[100, 2, 10], [1, 2, 7.0], [2, 2, 15.7], [3, 2, 0.5], [4, 2, -10.4], [75, 2, 1.1], [6, 2, 13.2]];
            var outArr = [[interest = 0, amount = 0]];

            var i = 0;
            inArray.forEach(function (elem) {
                var dataTemp = $(ctrlId).SimpleInterest(elem[0], elem[1], elem[2]);
                //alert(dataTemp.data["interest"] + " " + dataTemp.data["amount"]);
                if (i == 0) {
                    outArr[0] = [interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]];
                }
                else {
                    outArr.push([interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]]);
                }
                
                //alert("out: " + outArr[i]);
                i = i + 1;
                
            });

            //return vals
            $t.data["dataSetSI"] = outArr;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ COMPOUND INTEREST Widget--------------------



(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.GetCompoundInterestData = function (ctrlId, inArray) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //test
            //var inArray = [[100, 2, 10, 4], [1, 2, 7.0, 4], [2, 2, 15.7, 4], [3, 2, 0.5, 4], [4, 2, -10.4, 4], [75, 2, 1.1, 4], [6, 2, 13.2, 4]];
            var outArr = [[interest = 0, amount = 0]];

            var i = 0;
            inArray.forEach(function (elem) {
                var dataTemp = $(ctrlId).CompoundInterest(elem[0], elem[1], elem[2], elem[3]);
                //alert(dataTemp.data["interest"] + " " + dataTemp.data["amount"]);
                if (i == 0) {
                    outArr[0] = [interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]];
                }
                else {
                    outArr.push([interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]]);
                }

                //alert("out: " + outArr[i]);
                i = i + 1;

            });

            //return vals
            $t.data["dataSetCI"] = outArr;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ RECURRING DEPOSIT MATURITYWidget--------------------



(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.GetRecurringDepositMaturityData = function (ctrlId, inArray) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //test
            //var inArray = [[100, 2, 10], [1, 2, 7.0], [2, 2, 15.7], [3, 2, 0.5], [4, 2, -10.4]];
            var outArr = [[interest = 0, amount = 0]];

            var i = 0;
            inArray.forEach(function (elem) {
                var dataTemp = $(ctrlId).RecurringDepositMaturity(elem[0], elem[1], elem[2]);
                //alert(dataTemp.data["interest"] + " " + dataTemp.data["amount"]);
                if (i == 0) {
                    outArr[0] = [interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]];
                }
                else {
                    outArr.push([interest = dataTemp.data["interest"], amount = dataTemp.data["amount"]]);
                }

                //alert("out: " + outArr[i]);
                i = i + 1;

            });

            //return vals
            $t.data["dataSetRD"] = outArr;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);

// ------------------ RECURRING DEPOSIT MATURITYWidget--------------------



(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.CreditCardBalanceData = function (ctrlId, inArray) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS
            //test
            //var inArray = [[100000, 2, 10,4], [100000, 2, 10,5], [100000, 2, 10,6], [100000, 2, 10,7], [100000, 2, 10,8]];
            var outArr = [[month = 0, balance = 0]];

            var i = 0;
            inArray.forEach(function (elem) {
                var dataTemp = $(ctrlId).CreditCardBalance(elem[0], elem[1], elem[2], elem[3]);
                //alert(dataTemp.data["interest"] + " " + dataTemp.data["amount"]);
                if (i == 0) {
                    outArr[0] = [month = elem[3], balance = dataTemp.data["balance"]];
                }
                else {
                    outArr.push([month = elem[3], balance = dataTemp.data["balance"]]);
                }

                //alert("out: " + outArr[i]);
                i = i + 1;

            });

            //return vals
            $t.data["dataSetCB"] = outArr;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);
