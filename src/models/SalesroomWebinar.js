const mongoose=require('mongoose');

//Schema for Simple Digital Salesroom
const salesroomSchema = mongoose.Schema({
    tenantId: { type : "String", required:true },
    //Salesroom Informations
    title: { type: "String", required: true },
    eventPlace: {type:"String", required:false},
    meetingValues: {type:Object, required:true},    
    thumbnail : { type : "String", required : false },
    eventType : { type : "String", required :true },
    dateTime:{type:"String",required:true},
    access:{type:Object,required:true},
    tags : { type : [String], default: [] },
    link : { type : "String", default: ''},
    contents : { type : [], required: false },
    leads : { type:[], required:false},
    form:{ type:[], required:false},
    prospects : { type : [], default : '' },
    welcome_message : { type: {}, required : false },
    cta : { type : "String", default:"" },
    fullDate:{type:"String",required:true},
    type:{type:"String",required:true},
    question:{type:[Object],required:false},
    guests:{type:[Object],requrired:false},
    endTime:{type:String,required:true},
    //Salesman informations
    sales_person : { type : "String", required : true },
}, {
    timestamps: true
})

const Resources = mongoose.model('SalesroomWebinar', salesroomSchema);
module.exports = Resources;