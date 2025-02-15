import { React } from 'react';
import './Form.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = () => {
 
    // yup.object().shape({
    //     first_name: yup
    //       .string()
    //       .required('Required'),
    //     last_name: yup
    //       .string()
    //       .required('Required'),
    //     address_1: yup
    //       .string()
    //       .required('Required'),
    //     address_2: yup
    //       .string(),
    //     city: yup
    //       .string()
    //       .required('Required'),
    //     state: yup
    //       .string()
    //       .required('Required'),
    //     postcode: yup
    //       .number()
    //       .typeError('Invalid Input: numbers please')
    //       .positive('Must be greater than zero')
    //       .integer()
    //       .required('Required'),
    //     country: yup
    //       .string()
    //       .required('Required'),
    //     // email: yup
    //     //   .string()
    //     //   .email()
    //     //   .required('Required'),
    //     phone: yup
    //       .number()
    //       .typeError('Invalid Input: numbers please')
    //       .positive('Must be greater than zero')
    //       .integer()
    //       .required('Required'),
    //   });

    const schema =      yup.object().shape({
        fullName:       yup.string().matches(/^[a-zA-Z ]*$/, "MUST_BE_CHARACTER"),
        email:          yup.string().email("The email is invalid").required("Your Email is required"),
        age:            yup.number().positive().integer("Do not put points, just years").min(12, "You don't pass the age criteria for our website").required("Age is required"),
        password:       yup.string().min(5, "Minimum length should be five").max(16, "You cannot exceed password more than 16 charachters").required("Password is reqired"),
        confirmPassword:yup.string().oneOf([yup.ref("password"), null], "The passwords do not match").required("Retype the password"),
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver:       yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type ="text" placeholder="Full Name"             {...register("fullName")}/>
            <span style={{color:"red"}}>{errors.fullName?.message}                      </span>
            <input type ="email" placeholder="@email.com"           {...register("email")}/>
            <span style={{color:"red"}}>{errors.email?.message}                         </span>
            <input type ="number" placeholder="years old"           {...register("age")}/>
            <span style={{color:"red"}}>{errors.age?.message}                            </span>
            <input type ="password" placeholder="Password"          {...register("password")}/>
            <span style={{color:"red"}}>{errors.password?.message}                       </span>
            <input type ="password" placeholder="Confirm Password"  {...register("confirmPassword")}/>
            <span style={{color:"red"}}>{errors.confirmPassword?.message}                </span>
            <input type ="submit"/>
        </form>
    );
}


//hook form for error handling
//yup for form validation