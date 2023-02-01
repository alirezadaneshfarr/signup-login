import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React ,{ useState, useEffect } from 'react';
import { validate } from './validate';
import {notify} from './toast';
import {Link} from 'react-router-dom';
import '../Styles/Login.scss';


const SignUp = () => {

    const [data , setData] = useState({
        name : '', 
        email : '',
        password : '', 
        confirmPassword : '',
        isAccepted : false,
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data , 'signup'));
    } ,[data , touched]);

    const changeHandler = (event) => {
        if(event.target.name === 'isAccepted'){
            setData({ ...data, [event.target.name]: event.target.checked})
        }else{
            setData({ ...data, [event.target.name]: event.target.value})
        }
        console.log(data);
    }

    const focusHandler = (event) => {
        setTouched({ ...touched , [event.target.name] : true})
    }

    const submitHandler = (event) => {
        // event.preventDeafult();
        if(!Object.keys(errors).length){
           notify('You signed in successfully' , 'succes');
        }else{
            setTouched({
                name: true, 
                email: true,
                password: true, 
                confirmPassword: true,
                isAccepted : true,
            });
            notify('Your data is not valid !' , 'error');
        }
    }

    return (
        <>
        <div className='signupContainer'>
            <h3>Sign Up</h3>
            <form onSubmit={submitHandler}>
            <div className='name'>
                <input type='text' placeholder=' Name' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div className='email'>
                <input type='email' placeholder=' Email' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.email &&  touched.email && <span>{errors.email}</span>}
            </div>
            <div className='pass'>
                <input type='password' placeholder=' Password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.password &&  touched.password && <span>{errors.password}</span>}
            </div>
            <div className='pass2'>
                <input type='password' placeholder=' Confirm Password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                {errors.confirmPassword &&  touched.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div className='accpt'>
            <label>I Accept terms of privacy policy</label>
               <Checkbox defaultChecked name='isAccepted'  value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
               {errors.isAccepted &&  touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
            </form>
            <div className='btns'>
                <Button variant="outlined" onClick={submitHandler}>Sign up</Button>
                <p>You have already an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
        <ToastContainer />
            </>
    );
};

export default SignUp;