const {
    request
} = require('../utils/client');
const getSales = async (req) => {
    try {

        const {
            saleID,
            accountID
        } = req.query
        const sale_response = await request(`/${accountID}/Sale/${saleID}.json`);

        // Getting Data from Sale Request
        const {
            calcTotal,
            calcTax1
        } = sale_response.data.Sale;

        return {
            calcTotal: calcTotal,
            taxTotal: calcTax1,
        }
    } catch (err) {
        console.log(err)
    }
}

// Getting data from query Paramters
const getParams = async (req) => {
    try {

        const {
            type,
            accountID,
            systemUserID,
            employeeID,
            saleID,
            customerID,
            shopID,
            registerID,
            returnURL
        } = req.query
     
        return {
            requestType: type,
            accountID: accountID,
            systemUserID: systemUserID,
            employeeID: employeeID,
            saleID: saleID,
            customerID: customerID,
            shopID: shopID,
            registerID: registerID,
            returnURL: returnURL
        }
    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    getSales, getParams
}