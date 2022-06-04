const mongoose = require('mongoose');

const emailScheduleSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    fullDate:{type:String ,required:true},
    to:{type:String ,required:true},
    from:{type:String ,required:true},
    text:{type:String ,required:false},
    
  },
  {
    timestamps: true,
  },
);

const EmailSchedules = mongoose.model('emailSchedule', emailScheduleSchema);

module.exports = EmailSchedules;
