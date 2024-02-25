import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from 'yup';
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate();
    const initialValues={
        title:'',
        postText:'',
        username:'',
    }

const validationSchemaCreatePost=Yup.object().shape({
    title:Yup.string().required('Title is required'),
    postText:Yup.string().required("Post is required").min(5,"Your message must be at least 5 characters long"),
    username:Yup.string().min(3).max(20,'Username should be between 3 and 20 characters'),
})
    const onSubmitPost=(dataPost)=>{
        axios.post("http://localhost:3001/posts",dataPost).then((res)=>{
            if (res?.status===200) {
              navigate('/'); 
            }
          }).catch(err =>{
            console.log(err)
          })
    }
  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmitPost}  validationSchema={validationSchemaCreatePost}>
       <Form className='formContainer'>
        <label>Title</label>
        <Field id ="inputCreatePost" 
        autocomplete='off'
         name="title" type="text" placeholder="Enter Post Title"/>
         <ErrorMessage name='title' component={'span'}/>
        <label>Post</label>
        <Field id ="inputCreatePost"  name="postText" type="text" placeholder="Enter Post"/>
        <ErrorMessage name='postText' component={'span'}/>
        <label>User Name</label>
        <Field id ="inputCreatePost"  name="username" type="txt" placeholder="Enter Name "/>
        <ErrorMessage name='username' component={'span'}/>
        <button type='submit'>CreatePost</button>
       </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
