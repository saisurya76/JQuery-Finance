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



// ------------------ SIMPLE INTEREST --------------------

//Function to calculate simple interest
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.SimpleInterest = function (borrowed, rate, time) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- CODE BEGINS

            //check
            if (!isNumber(borrowed)) {
                alert("fn : SimpleInterest" + "\nPlease check input" + " 'borrowed'");
                return false;
            }
            if (!isNumber(rate)) {
                alert("fn : SimpleInterest" + "\nPlease check input" + " 'rate'");
                return false;
            }
            if (!isNumber(time)) {
                alert("fn : SimpleInterest" + "\nPlease check input" + " 'time'");
                return false;
            }

            //calculate interest
            var interest = borrowed * (rate / 100) * time;

            //calculate amount
            var amount = borrowed * (1 + (rate / 100 * time));

            //return vals
            $t.data["interest"] = interest;
            $t.data["amount"] = amount;

            //$t.text(amount);



            // -- CODE ENDS

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ COMPOUND INTEREST --------------------

//Function to calculate simple interest
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.CompoundInterest = function (borrowed, rate, time, compoundingPeriod) {

        return this.each(function()
        {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- code begins
              //check
            if (!isNumber(borrowed)) {
                alert("fn : CompoundInterest" + "\nPlease check input" + " 'borrowed'");
                return false;
            }
            if (!isNumber(rate)) {
                alert("fn : CompoundInterest" + "\nPlease check input" + " 'rate'");
                return false;
            }
            if (!isNumber(time)) {
                alert("fn : CompoundInterest" + "\nPlease check input" + " 'time'");
                return false;
            }
            if (!isNumber(compoundingPeriod)) {
                alert("fn : CompoundInterest" + "\nPlease check input" + " 'compoundingPeriod'");
                return false;
            }

            var tmp1 = ( 1 + ( (rate/100) * (1/compoundingPeriod) ) );
            var tmp2 = Math.pow(tmp1,(compoundingPeriod*time)); 
        
            var amount = borrowed * tmp2;

            //return vals
            $t.data["interest"] = amount - borrowed;
            $t.data["amount"] = amount;
            //$t.text(amount);

            // -- code ends

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ COMPOUNDED Fixed deposits \ Recurring Deposits--------------------

//Function to calculate simple interest
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.RecurringDepositMaturity = function (deposit, rate, time) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- code begins
            
            //check
            if (!isNumber(deposit)) {
                alert("fn : RecurringDepositMaturity" + "\nPlease check input " + " 'deposit'");
                return false;
            }
            if (!isNumber(rate)) {
                alert("fn : RecurringDepositMaturity" + "\nPlease check input " + " 'rate'");
                return false;
            }
            if (!isNumber(time)) {
                alert("fn : RecurringDepositMaturity" + "\nPlease check input " + " 'time'");
                return false;
            }
            


            var n = time * 4;
            
            rate = rate/400;
            
            var tmp1 = deposit * (Math.pow((1 + rate),n) - 1);
            var tmp2 =  ( 1 - Math.pow((1 + rate), (-1/3)) );
            
            var amount = tmp1/tmp2;

            //return vals
            $t.data["interest"] = amount - (deposit * (time * 12));
            $t.data["amount"] =  amount;
            //$t.text(amount);

            // -- code ends

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ CreditCardBalance --------------------
//p = x*(1 - (1+r)^-n)/r


//Function to calculate CREDIT CARD BALANCE
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.CreditCardBalance = function (principle, minBalPaymentPercent, rate, nthMonth) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- code begins
            //check
            if (!isNumber(principle)) {
                alert("fn : CreditCardBalance" + "\nPlease check input " + " 'principle'");
                return false;
            }
            if (!isNumber(minBalPaymentPercent)) {
                alert("fn : CreditCardBalance" + "\nPlease check input " + " 'minBalPaymentPercent'");
                return false;
            }
            if (!isNumber(rate)) {
                alert("fn : CreditCardBalance" + "\nPlease check input " + " 'rate'");
                return false;
            }
            if (!isNumber(nthMonth)) {
                alert("fn : CreditCardBalance" + "\nPlease check input " + " 'nthMonth'");
                return false;
            }
            

            var tmp1 = 1 + rate/1200 - minBalPaymentPercent/100.
            var balanceAfterNthMonth = principle * Math.pow(tmp1, nthMonth);

            //return vals
            $t.data["balance"] = balanceAfterNthMonth;
            //$t.text(balanceAfterNthMonth);

            // -- code ends

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ Mortgage Balance --------------------
/*
Balance[m] = Balance[m-1] + Interest[m-1] 􀀀 Payment[m-1]
Interest[m] = Balance[m]  1
12Rate[m]
Rate[m] = APR for that month
Payment[m] = whatever amount was paid that month
*/

//Function to calculate Mortgage BALANCE
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.MortgageBalance = function (balanceLast, interestLast, paymentLast, rateCurrent) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- code begins
            //check
            if (!isNumber(balanceLast)) {
                alert("fn : MortgageBalance" + "\nPlease check input " + " 'balanceLast'");
                return false;
            }
            if (!isNumber(interestLast)) {
                alert("fn : MortgageBalance" + "\nPlease check input " + " 'interestLast'");
                return false;
            }
            if (!isNumber(paymentLast)) {
                alert("fn : MortgageBalance" + "\nPlease check input " + " 'paymentLast'");
                return false;
            }
            if (!isNumber(rateCurrent)) {
                alert("fn : MortgageBalance" + "\nPlease check input " + " 'rateCurrent'");
                return false;
            }
            
            var balanceTemp = balanceLast + interestLast - paymentLast; 
            var interestCurrent = balanceTemp * (rateCurrent / 1200);
            var balanceCurrent = balanceTemp + interestCurrent;
            
            //return vals
            $t.data["balance"] = balanceCurrent;
            //$t.text(balanceAfterNthMonth);

            // -- code ends

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);


// ------------------ Loan EMI --------------------
/*
    E = P (r/m)/ 1- (1 + r/m)^-mn 
  
    P= Present Value i,e. borrowed amount
    r= rate of interest
    m= No. of payment in a year(12)
    n= No years
*/

//Function to calculate Mortgage BALANCE
(function ($, window, document, undefined) {

    // jQuery plugin definition
    $.fn.LoanEMI = function (principle, rateOfInterest, timeperiod) {

        return this.each(function () {
            // express a single node as a jQuery object
            var $t = $(this);

            // -- code begins
            //check
            if (!isNumber(principle)) {
                alert("fn : LoanEMI" + "\nPlease check input " + " 'principle'");
                return false;
            }
            if (!isNumber(rateOfInterest)) {
                alert("fn : LoanEMI" + "\nPlease check input " + " 'rateOfInterest'");
                return false;
            }
            if (!isNumber(timeperiod)) {
                alert("fn : LoanEMI" + "\nPlease check input " + " 'timeperiod'");
                return false;
            }
 
 
 
            var tmp1 = principle * (rateOfInterest / 1200);
            var tmp2 = 1 - Math.pow((1 + (rateOfInterest / 1200)), -(12 * timeperiod));
            var emi = tmp1 / tmp2;
            
            //return vals
            $t.data["emi"] = emi;
            //$t.text(emi);

            // -- code ends

        });

        // allow jQuery chaining
        return this;
    };


})(jQuery);
