import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from 'yup';
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
    const initialValues={
        username:'',
        password:'',
    }

const validationSchemaCreatePost=Yup.object().shape({
    username:Yup.string().min(3).max(10,'Username should be between 3 and 10 characters').required(),
    password:Yup.string().min(3).max(10,'Username should be between 3 and 10 characters').required(),
})
    const onSubmitLogin=(dataPost)=>{
        axios.post("http://localhost:3001/auth/login",dataPost).then((res)=>{
            console.log("resss",res);
            if (res?.data?.data===200) {
              sessionStorage.setItem("accessToken",res?.data?.accessToken)
              alert('You have successfully Logged In !')
              navigate('/'); 
            }
            else{
                alert(res?.data?.error)
            }
          }).catch(err =>{
            console.log(err)
          })
    }
  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmitLogin}  validationSchema={validationSchemaCreatePost}>
       <Form className='formContainer'>
        <label>User Name</label>
        <Field id ="inputCreatePost"  name="username" type="txt" placeholder="Enter Name "/>
        <ErrorMessage name='username' component={'span'}/>
        <label>Password</label>
        <Field id ="inputCreatePost"  name="password" type="password" placeholder="Enter Password "/>
        <ErrorMessage name='password' component={'span'}/>
        <button type='submit'>Login</button>
       </Form>
      </Formik>
    </div>
  )
}

export default Login
