import React, { useEffect, useRef } from 'react';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate, } from 'react-router-dom';


import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handlesubmit = async (event) => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
    }
    const location = useLocation()   
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'
   
//  we use useEffect to solve a warning  Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`). To locate the bad setState() call inside `Login`, follow the stack trace as described 

     useEffect(() =>{
         if (user || gUser) {
             navigate(from, { replace: true })
         }
     },[user, gUser, from, navigate])

    let msg;

    if (error) {
        msg = error.message.slice(22, error.message.length - 2)
    }

    if (gError) {
        msg = gError?.message.slice(22, gError.message.length - 2)
    }


return (
    <div>
        <div className="card w-[80%] lg:w-1/2 mx-auto mt-20 shadow-xl">
            <div className="card-body">
                <h2 className=" mx-auto text-3xl font-bold">Login</h2>
                <form className="" onSubmit={handlesubmit} >
                    <label className="label  ">
                        <span className="label-text">Email</span>
                    </label>
                    <input ref={emailRef} name='email' type="email" className="mx-auto input input-bordered input-primary w-full " />

                    <label className="label  ">
                        <span className="label-text">Password</span>
                    </label>
                    <input ref={passwordRef} name='password' type="password" className=" mx-auto input input-bordered input-primary w-full " />
                    <span className="label-text-alt text-lg text-red-700"><p>{msg}</p></span>

                    <div className="card-actions flex-col  justify-center">
                        {loading ? <button className="btn btn-accent mx-auto mt-3 text-white w-full loading">loading</button> : <button className="btn btn-accent mx-auto mt-3 text-white w-full">Login</button>}
                        <label className="label  mx-auto">
                            <span className="label-text text-xl">New in Doctors portal? <Link to='/signup' className='text-secondary'>create new account</Link></span>
                        </label>

                        <div className="divider">OR</div>
                    </div>
                </form>
                <button onClick={() => signInWithGoogle()} className="btn mx-auto btn-accent text-white w-full"><h2 className="text-lg">Continue  with goolge</h2></button>
            </div>
        </div>
    </div >
);
};

export default Login;