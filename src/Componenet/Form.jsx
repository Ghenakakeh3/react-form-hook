import React from 'react'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';


const Form = () => {
    const schema=yup.object().shape({
        fullName :yup.string().required('full name is required '),
        age: yup.number().required('age is required').min('min age is 18!'),
        password:yup.string().required('password is requierd'),
        confirmPassword:yup.string().required('confirmPassword is requierd').oneOf([yup.ref('password'),null])


    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm(
        {
            resolver: yupResolver(schema)
        }
      )


      const onSubmit = (data) => console.log(data)
  return (

  
  <div >
    <form onSubmit={handleSubmit(onSubmit)} className='flex  flex-col w-1/2 mx-auto -my-1/2 translate-y-1/2'>
<label htmlFor="fullname"> your full name</label>
  <input  {...register("fullName")}  className='border-2 rounded-md shadow-md border-black mt-2 '/>
  {errors.fullName?.message}
<label htmlFor="fullname"> your age</label>

  <input   {...register("age")}  className='border-2 rounded-md shadow-md border-black '/>
  {errors.age?.message}
<label htmlFor="fullname">enter password</label>

  <input  {...register("password")}  className='border-2 rounded-md shadow-md border-black ' />
  {errors.password?.message}
<label htmlFor="fullname"> confirm Password</label>

  <input  {...register("confirmPassword")} className='border-2 rounded-md shadow-md border-black ' />
  {errors.confirmPassword?.message}

 
  
  

  <input type="submit" className='bg-green-700 mt-6 py-1 text-white cursor-pointer rounded-md shadow-md' />
</form>
  </div>
  )
}

export default Form
