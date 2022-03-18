import joi from "joi";

const registerSchema=joi.object({
        full_name:joi.string().required("Full name is required"),
 email: joi.string().required("Email is required"),
        country_code:joi.string().required("Country Code is required"),
 phone_no: joi.string().required("Phone number is required"),
profile_img:joi.string().allow(null),
        job_type:joi.string().required("Job Type is required"),
        dob: joi.string().required("DOB is required"),
        locations: joi.array().required("Locations are required")
})

export {registerSchema}