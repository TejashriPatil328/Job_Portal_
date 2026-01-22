// company.controller.js
import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName || companyName.trim() === "") {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    const normalizedName = companyName.trim().toLowerCase();

    const existingCompany = await Company.findOne({
      name: normalizedName,
      userId: req.id,
    });

    if (existingCompany) {
      return res.status(409).json({
        message: "Company already registered",
        success: false,
      });
    }

    const company = await Company.create({
      name: normalizedName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Register Company Error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getCompany=async(req,res)=>{
    try{
        const userId=req.id; // logged in user id 
        const companies=await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"Company Not found.",
                success:false
            })
        }

        res.status(200).json({
            message:"These are all companies",
            companies,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}
// get company by id 
export const getCompanyById=async(req,res)=>{
    try{
        const companyId=req.params.id;
        const company=await Company.findOne({ _id: companyId });
        if(!company){
            return res.status(404).json({
                message:"Company Not found.",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}


export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    let logo;

    // ✅ Only upload to Cloudinary if a new file is provided
    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      logo = cloudResponse.secure_url;
    }

    // Build update object dynamically
    const updateData = { name, description, website, location };
    if (logo) updateData.logo = logo;

    const company = await Company.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company details updated successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};