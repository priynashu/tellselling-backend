const mongoose=require('mongoose');

//Schema for Simple Digital Salesroom
const salesroomSchema = mongoose.Schema({
    tenantId: { type : "String", required:true },
    //Salesroom Informations
    title: { type: "String", required: true },
    platform: {type:"String", required:false},
    stream_id: {type:"String", required:false},
    events: {type: [], required:false},
    thumbnail : { type : "String", required : false },
    description : { type : "String", required :false },
    tags : { type : [String], default: [] },
    link : { type : "String", default: ''},
    contents : { type : [], required: false },
    leads : { type:[], required:false},
    form:{ type:[], required:false},
    prospects : { type : [], default : '' },
    welcome_message : { type: {}, required : false },
    cta : { type : "String", default:"" },
    fullDate:{type:"String",required:false},
    question:{type:[Object],required:false},
    guests:{type:[Object],requrired:false},
    //Salesman informations
    sales_person : { type : "String", required : true },
    type:{type:"String",required:true},
}, {
    timestamps: true
})

const Resources = mongoose.model('SalesroomLiveStream', salesroomSchema);
module.exports = Resources;