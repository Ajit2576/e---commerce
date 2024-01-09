function FormValidation(formData) {

    let errors = {}

   const nLanMin = 3
   const nLanMax = 18
    
    // For Name
    if(!formData.name){
        errors.name = "*Please enter your name"
    }
    else{
        if(formData.name.length < nLanMin){

            errors.name = `*Name Must be more then ${nLanMin} Character`
        }
        else if(formData.name.length > nLanMax){
            errors.name = `*Name Must be less than ${nLanMax} Character`
        }
    }

    // For Email
    if(!formData.email){
        errors.email = "*Please enter your email"
    }
    

    // For Password and Conform Password
    if(!formData.password){
        errors.password = "*Please enter password"
    }
    else if(formData.password.length < 8){
        errors.password = "*Please enter at list 8 character password"
    }
    else if(!formData.conformPassword){
        errors.conformPassword = "*Please conform your password"
    }
    else if(formData.password !== formData.conformPassword){
        errors.conformPassword = "*Password are not match"
    }


    return errors
}

export default FormValidation
