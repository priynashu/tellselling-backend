const Billings = require('../../models/Billing');
const stripe = require("stripe")("sk_test_Z86uql0sJMzkc3GFL6pRfgxm00fLK1M5QJ")
const retrievePayments = async(req,res)=>{
    console.log("inside last");
    const { tenantId } = req.params;
//     const charges = await stripe.charges.list({
//   limit: 3,
// });
const recentPlan = await Billings.findOne({ tenantId: tenantId });
const charges = await stripe.charges.search({
    query: `customer:"${recentPlan.customerId}"`,
  });
      console.log("payments history");
      return res.json(charges)
      
}

module.exports = retrievePayments; 