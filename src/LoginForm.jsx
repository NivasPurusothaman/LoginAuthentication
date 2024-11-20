import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./styles/loginform.css"
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useStoreActions } from 'easy-peasy';
import { useStoreState } from 'easy-peasy';

export default function LoginForm() {

  const toast = useRef(null)

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Invalid username or password', life: 3000});
  }

  const showLoginSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'You have successfully logged on', life: 3000});
  }

  const addLogoutToastNo = useStoreActions( (actions) => actions.addLogoutToastNo )

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'You have successfully logged off', life: 3000});
    addLogoutToastNo(0)
  }

  const logoutToastNo = useStoreState((state) => state.logoutToastNo)

  const navigate = useNavigate()

  const [eyeNum, setEyeNum] = useState(true)

  const addUserDetails = useStoreActions( (actions) => actions.addUserDetails )

  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  useEffect(()=>{
    if (logoutToastNo==1){
      showSuccess()
    }
  },[])

  const handleFormSubmit = (data) => {
    showLoginSuccess()
    const user_name = data.user_name
    const password = data.password
    axios.post(`http://52.66.153.167:6001/api/signIn`, {user_name, password})
    .then((res)=>{
      addUserDetails(res.data.results)
    })
    .then(()=>navigate("/home"))
    .catch((err)=>{showError(); console.log(err)})
    reset()
  }

  return (
    <div className="container">
      <Toast ref={toast} />
      <div className="container_1">
        <div className="yellowDiv">
          <h1>LOGIN</h1>
        </div>
      </div>
      <div className="container_2">
        <div className='loginContent'>
          <div className='loginContentHeader'>
            <h2>Amphenol</h2>
            <h6>Automotive</h6>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <h2 className='formHeader'>LOGIN</h2>
            <div className='usernameDiv'>
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                {...register("user_name", { required: "Username is required" })}
              />
              {errors?.user_name && <p>{errors.user_name.message}</p>}
            </div>
            <div className='passwordDiv'>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type={eyeNum===true ? "password" : "text"}
                {...register("password", { required: "Password is required" })}
              />
              <i onClick={()=>setEyeNum(!eyeNum)} className={eyeNum===true ? "pi pi-eye-slash" : "pi pi-eye"}></i>
              {errors?.password && <p>{errors.password.message}</p>}
            </div>
            <button className='loginBtn' type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
