export const validate = (data , type) => {
    const errors = {};

    if(type === 'signup'){
        if(!data.name.trim()){
            errors.name = 'Username is required';
        }
        else{
            delete errors.name;
        }
        if(!data.confirmPassword){
            errors.confirmPassword = 'You need to confirm your password';
        }
        else if(data.confirmPassword !== data.password){
            errors.confirmPassword = 'Password is not matched';
        }
        else{
           delete errors.confirmPassword;
        }
    }
    
   
    if(!data.email){
        errors.email = 'Email place is empty';
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Your email address is not valid';
    }
    else{
        delete errors.email;
    }
    if(!data.password){
        errors.password = 'Password is required';
    }
    else if(data.password.lenght < 6){
        errors.password = 'Your password is shorter than 6 characters';
    }
    else{
        delete errors.password;
    }
    return errors;
}