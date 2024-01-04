import * as Yup from "yup"

export const InquirySchema = Yup.object().shape({
    name: Yup.string().required("Please Enter Firstname !"),
    lastname: Yup.string().required("Please Enter Lastname !"),
    email: Yup.string().email().required("Please Enter Your EmailAdress !"),
    message: Yup.string().required("Please Enter Your Message !"),
    country: Yup.string().required('Country is required').oneOf([ '1 pakistan' , 'UAE' , 'USA'], 'Invalid country'),
    interest : Yup.string().required("Interested in is required !"),
});



export const subscriptionSchema = Yup.object({
    mail : Yup.string().email().required("Please Enter Your EmailAdress !")
});



