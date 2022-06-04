const mongoose=require('mongoose');

//Schema for Simple Digital Salesroom
const salesroomSchema = mongoose.Schema({
    tenantId: { type : "String", required:true },
    //Salesroom Informations
    title: { type: "String", required: true },
    thumbnail : { type : "String", required : false },
    description : { type : "String", required :true },
    tags : { type : [String], default: [] },
    link : { type : "String", default: ''},
    contents : { type : [], required: false },
    prospects : { type : [], default : '' },
    welcome_message : { type: {}, required : false },
    cta : { type : "String", default:"" },
    // fullDate:{type:"String",required:true},
    //Salesman informations
    sales_person : { type : "String", required : true },
    type:{type:"String",required:true},
},{
    timestamps: true
})

const Resources = mongoose.model('Salesroom', salesroomSchema);
module.exports = Resources;