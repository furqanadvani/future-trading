import React from 'react'
import inquiry from '../Assets/inquiry.png'
import './inquiry.css'
import { Formik, useFormik } from 'formik';
import { InquirySchema } from '../Schema';

function Inquiry() {


const initialValues = {
    name : "",
    lastname : "",
    email : "",
    message : "",
    country : "",
    interest : ""
};




const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
    initialValues: initialValues,
    validationSchema: InquirySchema,
    country: '',
    onSubmit: (values , action) => {
  


      const emailBody = `
        Name: ${values.name} ${values.lastname}
        Email: ${values.email}
        Country: ${values.country}
        Interest: ${values.interest}
        Message: ${values.message}
      `;
  
      const mailtoLink = `mailto:furqanmemon200@gmail.com?subject=Inquiry&body=${encodeURIComponent(emailBody)}`;
  
      window.location.href = mailtoLink;


      action.resetForm()
    },
  });
  





  return (
    <div class="inquiry section-padding">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="inquiry-img">
                        <img src={inquiry} alt="" />
                    </div>
                </div>
                <div class="col-md-6">

            <Formik onSubmit={handleSubmit} validateOnChange={true}>

                    <div class="inquiry-content">

                        
                        <div class="inquiry-header d-flex justify-content-center ">
                            <h3 class="m-0">Want an Inquiry? </h3>
                        </div>

            

                        <div class="col-md-12">
                         <div class="row">
                                <div class="fst-lst col-md-6 col-12">
                                    <label for="exampleFormControlInput1" class="form-label">First Name*</label>
                                    <input type="name" 
                                    name='name'
                                    class="form-control" 
                                    id="John"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={()=> setFieldTouched('name', true ,true)}
                                    placeholder="John" />
                                     {errors.name && touched.name ? (
                                    <p className="p_msg">
                                        {errors.name}
                                    </p>
                                ) : null}
                                </div>
                                <div class="col-6 col-md-6 col-12 email">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name*</label>
                                    <input 
                                    type="name"
                                 
                                    name='lastname'
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={() => setFieldTouched('lastname' , true, true)}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Doe" />
                                       {errors.lastname && touched.lastname ? (
                                    <p className="p_msg">
                                        {errors.lastname}
                                    </p>
                                ) : null}
                                </div>
                            </div>
                        </div>
                        <div class="email">
                            <div class="col-12 col-md-12 col-12 col-sm-12 email">
                                <label for="exampleFormControlInput1" class="form-label">Your Email*</label>
                                <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={ () => setFieldTouched('email' , true , true)}
                                name='email'
                                 type="email"
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                    placeholder="johndoe123@gmail.com" />
                                    {errors.email && touched.email ? (
                                        <p className='p_msg'>{errors.email}</p>
                                    ) : null}
                            </div>
                        </div>


                        <div class="col-md-12">
                            <div class="row">
                                   <div class="fst-lst col-md-6 col-12">
                                       <label for="exampleFormControlInput1" class="form-label">Country*</label>
                                     
                                       <select class="form-select" 
                                       value={values.country}
                                       onChange={handleChange}
                                       onBlur={ ()=> setFieldTouched('country' , true , true)}
                                       name='country'
                                       aria-label="Default select example">
                                        <option value="" selected>Select Country</option>
                                        <option value="1 pakistan">pakistan</option>
                                        <option value="UAE">UAE</option>
                                        <option value="USA">USA</option>
                                      </select>
                                      {errors.country && touched.country ? (
                                          <p className='p_msg'>{errors.country}</p>
                                      ) : null}
                                   </div>
                                   <div class="col-6 col-md-6 col-12 email">
                                    <label for="exampleFormControlInput1" class="form-label">Interested In*</label>
                                    <select class="form-select"
                                    name='interest'
                                    value={values.interest}
                                    onChange={handleChange}
                                    onBlur={ () => setFieldTouched('interest' , true , true)}
                                     aria-label="Default select example">
                                     <option selected>Discord</option>
                                     <option value="Future-Trading">Future Trading</option>
                                     <option value="Sort-Tream2">Sort Tream</option>
                                     <option value="Long-Tream3">Long Tream</option>
                                   </select>
                                   {errors.interest && touched.interest ? (
                                    <p className='p_msg'>
                                    {errors.interest}
                                   </p>
                                   ) : null}
                                   
                                   </div>
                               </div>
                           </div>
                           
                    
                    <div class="text-section">
                        <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                        <textarea class="form-control" 
                        name='message'
                        value={values.message}
                        onChange={handleChange}
                        onBlur={ () => setFieldTouched('message' , true , true)}
                        placeholder="Write message here..."
                            id="exampleFormControlTextarea1" rows="5"></textarea>
                            {errors.message && touched.message ? (
                                <p className='p_msg msg'>
                                {errors.message}
                            </p>
                            ) : null}
                            
                    </div>
                    <div class="inquiry-btn">
                    {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                        <button type="Submit" onClick={handleSubmit}>Submit</button>
                       </div>
                    {/* </Form> */}

                    </div>
                    </Formik>
                </div>
            </div>
            </div>
        </div>

  )
}

export default Inquiry
