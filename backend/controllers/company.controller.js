// company.controller.js
import { Company } from "../models/company.model.js";

// ======================
// Register a new company
// ======================
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
        const company=await Company.findOne({companyId});
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


export const updateCompany=async (req,res)=>{
    try{
        const {name,description,website,location}=req.body;
        const file=req.file;
        // cloudinary 

        const updateData={name,description,website,location};

        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});

        if(!company){
            return res.status(404).json({
                message:"company not found.",
                success:false
            })
        }

        return res.status(200).json({
            message:"Company details  updated successfully",
            company,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}