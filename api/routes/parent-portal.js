var express  = require('express');
var manager = require('../manager/manager');
var router = express.Router();

/**
 * Handle a request for total-balance
 */
router.post("/get-total-balance", function(req, res, next) {
    let body = req.body;
    let username = body.username;

    manager.getAccountingData(username, (result) => {
        let total = 0;

        //Calculate the total balance accross all terms for all children
        for(term of result.dataPerTerm) {
            for(child of term.dataPerChild) {
                total += (child.amountDue - child.totalPayed);
            }
        }

        res.status(200);
        res.send({totalBalance: total});
    }, ({ message }) => {
        console.log(message);
        res.status(500);
        res.send(message);
    });
});

/**
 * Handle a request for all the children associated with the given username
 */
router.post("/get-children", function(req, res, next) {
    let body = req.body;
    let username = body.username;

    manager.getParentInformation(username, (result) => {
        let children = result.children;
        res.status(200);
        res.send(children);
    }, ({message}) => {
        console.log(message);
        res.status(500);
        res.send(message);
    });
});

router.post("/get-data-for-child", function(req, res, next) {
    let body = req.body;
    let childData = body.child;
    let username = body.username;

    let firstName = childData.firstName;
    let lastName = childData.lastName;

    manager.getAccountingData(username, (result) => {
        let total;

        /* Calculate the total balance for the given child associated with the given username
        * The total will be undefined if the given child has no accounting data entry under the
        * given username 
        */

        for(term of result.dataPerTerm) {
            for(child of term.dataPerChild) {
                if(child.firstName === firstName && child.lastName === lastName) {
                    if(total === undefined) {
                        total = 0;
                    }

                    total += (child.amountDue - child.totalPayed);
                }
            }
        }

        res.status(200);
        res.send({totalBalance: total});
    }, ({message}) => {
        console.log(message);
        res.status(500);
        res.send(message);
    })
});

router.post("/get-payment-history", function(req, res, next) {
    let body = req.body;
    let username = body.username;
    let childData = body.child;

    manager.getAccountingData(username, (data) => {
        let paymentHistory = data.paymentHistory;
        let result = [];

        if(!childData) {
            result = paymentHistory;
        } else {
            paymentHistory.map((value) => {
                if(value.for.firstName === childData.firstName && value.for.lastName === childData.lastName) {
                    result.push(value);
                }
            }); 
        }

        res.status(200);
        res.send({paymentHistory: result});
    }, ({message}) => {
        console.log(message);
        res.status(500);
        res.send(message);
    });
});

module.exports = router;