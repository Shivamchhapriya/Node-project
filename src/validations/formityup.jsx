import React from "react";
import { useFormik,RadioButtonGroup,Field,RadioButton} from 'formik'

import { signupschemas } from "../schemas/indexs";


const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    number: '',
    termsAndConditions: '',
    birthday: '',
    gender:''

}






const Formiks = () => {
    const { values, handleBlur, touched, handleSubmit, handleChange, errors, } = useFormik
        ({
            initialValues: initialValues,
            validationSchema: signupschemas,
            onSubmit: (value) => {debugger
                console.log(value)
               
            }
        })

    console.log(values)
    console.log(errors)

  
   


    return (
        <>

            <form action="" onSubmit={handleSubmit} style={{ marginLeft: '20rem' }} >

                <div className="input-block ">
                    <label htmlFor="name" className="input-label floatingInput"> name</label><br />
                    <input type=""
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs floatingInput'
                        name="name" id="" placeholder="name" />
                    {errors.name && touched.name ? (<p style={{ color: 'red' }} className="text-red">{errors.name}</p>) : null}
                </div>
                <div className="input-block">
                    <label htmlFor="email" className="input-label p-2"> Email</label><br />
                    <input type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs'
                        name="email" id="email" placeholder="email" />
                    {errors.email && touched.email ? (<p style={{ color: 'red' }}>{errors.email}</p>) : null}
                </div>
                <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">  password</label><br />
                    <input type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs'
                        name="password" placeholder=" password" id="password" />
                    {errors.password && touched.password ? (<p style={{ color: 'red' }}>{errors.password}</p>) : null}
                </div>
                <div className="input-block form-check">
                    <label htmlFor="confirm_password" className="input-label"> confirm password</label><br />
                    <input type="password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs'
                        name="confirm_password" placeholder="confirm password" id="confirm_password" />
                    {errors.confirm_password && touched.confirm_password ? (<p style={{ color: 'red' }}>{errors.confirm_password}</p>) : null}
                </div>

                <div className="input-block ">
                    <label htmlFor="confirm_password" className="input-label"> number</label><br />
                    <input type="password"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs '
                        name="number" placeholder="number" id="number" />
                    {errors.number && touched.number ? (<p style={{ color: 'red' }}>{errors.number}</p>) : null}
                </div>
                <div>
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday"
                        value={values.birthday}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="inputboxs"
                        name="birthday" />
                    {errors.birthday && touched.birthday ? (<p style={{ color: 'red' }}>{errors.birthday}</p>) : null}

                </div>
                <div >
                    <label>
                        Terms and conditions  </label>
                    <input type="checkbox" name="termsAndConditions"
                        value={values.termsAndConditions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='inputboxs form-check-input'
                        id="termsAndConditions"
                    />
                    {errors.termsAndConditions && touched.termsAndConditions ? (<p style={{ color: 'red' }}>{errors.termsAndConditions}</p>) : null}
                </div>
<div>
               <div><input  value={values.gender} onChange={handleChange}   onBlur={handleBlur} type="checkbox" name="gender" 
               
               className='inputboxs form-check-input'
               id="male" />male </div>
               {/* <div><input  value={values.gender} onChange={handleChange} type="radio" name="gender" id="female" />female </div> */}
               {errors.gender && touched.gender ? (<p style={{ color: 'red' }}>{errors.gender}</p>) : null}
 
 </div>



                <button className="btn btn-outline-primary mt-3" type="submit">Submit</button>

            </form>

        </>
    );
}

// ==
export default Formiks;