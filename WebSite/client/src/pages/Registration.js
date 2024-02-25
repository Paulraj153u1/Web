import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from 'yup';
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Registration() {
  const navigate = useNavigate();
    const initialValues={
        username:'',
        password:'',
    }

const validationSchemaCreatePost=Yup.object().shape({
    username:Yup.string().min(3).max(10,'Username should be between 3 and 10 characters').required(),
    password:Yup.string().min(3).max(10,'Username should be between 3 and 10 characters').required(),
})
    const onSubmitRegistration=(dataPost)=>{
        axios.post("http://localhost:3001/auth/",dataPost).then((res)=>{
            if (res?.status===200) {
            //   navigate('/'); 
              alert('You have successfully registered!')
              navigate('/login'); 
            }
          }).catch(err =>{
            console.log(err)
          })
    }
  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmitRegistration}  validationSchema={validationSchemaCreatePost}>
       <Form className='formContainer'>
        <label>User Name</label>
        <Field id ="inputCreatePost"  name="username" type="txt" placeholder="Enter Name "/>
        <ErrorMessage name='username' component={'span'}/>
        <label>Password</label>
        <Field id ="inputCreatePost"  name="password" type="password" placeholder="Enter Password "/>
        <ErrorMessage name='password' component={'span'}/>
        <button type='submit'>Register</button>
       </Form>
      </Formik>
    </div>
  )
}

export default Registration
