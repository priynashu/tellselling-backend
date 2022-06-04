const Billings = require('../../models/Billing');
const { v4: uuidv4 } = require('uuid');
const { v4 } = require('uuid');
const { response } = require('express');
const stripe = require("stripe")("sk_test_Z86uql0sJMzkc3GFL6pRfgxm00fLK1M5QJ")

const stripePayment = async (req, res) => {
  // console.log("backend stripe",req.body);
  const { token,product,tenantId } = req.body;
  let customerID = ""
  const recentPlan = await Billings.findOne({ tenantId: tenantId });

    // const customer = stripe.customers.create({
    //   email:token.email,
    //   source:token.id
    // })

    // const key = v4;

    // const charge = await stripe.charges.create({
    //   amount: product.price * 100,
    //   currency: 'usd',      
    //   source:token.id,
    //   receipt_email: token.email,
    //   description: `Purchased the ${product.name} plan`,
    // });
    // console.log("Charge: ",{charge});
    // return res.status(200).json({ status: 'Success'});
    // console.log("recentPlan.customerId",recentPlan.customerId);
    if(recentPlan && recentPlan.customerId)
    {
      try {
        
            stripe.charges.create({
              amount: product.price * 100,
              currency: "usd",
              customer: recentPlan.customerId,
              receipt_email: token.email,
              description: `Purchased the ${product.name} plan`,
            }).then(response=>{
            console.log("stripe res",response);
          })
          return res.status(200).json({ status: 'Success',customerId:recentPlan.customerId});
      } catch (error) {
        console.log(error);
        return res.status(400).json({ status: 'Failed' });
      }
    }
    else{
      console.log("inside non customerID");
      try {
    stripe.customers
      .create({        
        email: token.email,
        source: token.id
      })
      .then(customer =>
        stripe.charges.create({
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name} plan`,
        })
      )
      .then(response=>{
        console.log("stripe res",response.customer);
        
        return res.status(200).json({ status: 'Success',customerId:response.customer});
      })
      
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: 'Failed' });
  }
}
     

    
};
 
module.exports = stripePayment; 