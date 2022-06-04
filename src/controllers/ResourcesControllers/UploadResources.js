const fs = require('fs');
const { promisify } = require('util');
const Resources = require('../../models/Resources');
const Forms =  require("../../models/Forms")
const uploadResources = async (req, res) => {

  const requests = req.body;
  console.log("requests",requests);  
  let form ={}
  let formData={}
  // if(requests.form !="Not Gated Content")
  // {
  //   const allForms = await Forms.findOne({tenantId:requests.tenantId})  
  
  // if(allForms?.length>1){
  //   form = allForms?.find((item)=>{return(item.formTitle===requests.form)})
  // }
  // else{
  //    form = allForms?allForms:{formTitle:"no form"}
  // }  
  // // console.log("form is",form);
  // formData={formTitle:form.formTitle,content:form.content}
  // }
  // else{
  //   formData = {formTitle:"no form"}
  // }
  formData={formTitle:requests.form}
  // console.log("form data",requests.form);
  try {
    const newResource = await Resources.create({
      tenantId: requests.tenantId,
      resourceTitle: requests.title,
      fileType: 'image',
      fileCdnLink: requests.file,
      thumbnail: requests.thumb,
      resourceCategory: '',
      description:requests.description,
      tags: requests.tags,
      form:formData,
      categories: requests.categories,
      content_areas: requests.content_areas,
      external_internal: requests.internal_ext,
      private_public:requests.public_pvt,
      internal_use: requests.internal_uses,
      createdBy: requests.creator,
      sharedBy: [],
      viewedBy: [],
    });
    // console.log(newResource);
    return res.status(200).json(newResource);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = uploadResources;