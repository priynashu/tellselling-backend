const Billings = require('../../models/Billing');

const upgradePlan = async (req, res) => {
    console.log("inside upgrade plan",req.body);
    const date = new Date();
    const dateParts = date.toDateString().split(" ");
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[3];
    const beginDate = month + " " + day + ", " + year;
    const tenantId= req.body.tenantId
    const recentPlan = await Billings.findOne({ tenantId: tenantId });
    console.log("recent Plan is",recentPlan);
        
    if(recentPlan){
        try {            
            const Plan={
                tenantId: req.body.tenantId, //String
                planType: req.body.planType , //String
                features: req.body.features, //Array of String
                cost: req.body.cost, //String 
                beginDate:beginDate , //String
                link: req.body.link, //String
                expiryDate: req.body.expiryDate, //String
                validity: req.body.validity, //String            
                customerId:req.body.customerId
            }
            const updatedPlan= await Billings.findOneAndReplace({tenantId: tenantId },Plan,{ "returnNewDocument": false });  
            
            console.log('plan updated') ; 
            return res.status(200).json(updatedPlan);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
    else
        try {
            const timestamp = new Date;  
            const newPlan = await Billings.create({
                tenantId: req.body.tenantId, //String
                planType: req.body.planType , //String
                features: req.body.features, //Array of String
                cost: req.body.cost, //String 
                beginDate:beginDate , //String
                link: req.body.link, //String
                expiryDate: req.body.expiryDate, //String
                validity: req.body.validity, //String  ,
                customerId:req.body.customerId,          
                last_modified: timestamp.toString() , //date stored in string type
                created: timestamp.toString() // in string
            }
        )  
            
            console.log('new plan added') ; 
            return res.status(200).json(newPlan);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
    

module.exports = upgradePlan ;  