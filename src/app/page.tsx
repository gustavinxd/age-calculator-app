"use client"

import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './../components/input/Input';

const today = new Date()
const dayNow = today.getDate() 
const monthNow = today.getMonth() + 1
const yearNow = today.getFullYear()

const schema = z.object({
  day: z.number({
    errorMap: () => { 
      return {
        message: 'Must be a valid day' 
      }
    }
  }).int().positive().gte(0o0).lte(31), // DD format, min

  month: z.number({
    errorMap: () => { 
      return {
        message: 'Must be a valid month' 
      }
    }
  }).int().positive().gte(0o0).lte(12), // MM format

  year: z.number({
    errorMap: () => { 
      return {
        message: 'Must be a valid year' 
      }
    }
  }).int().positive().gte(0o0).lte(yearNow, 'Must be in the past'), // YYYY format with length of four characters

})

type FormProps = z.infer<typeof schema>

export default function Home() {

  const {register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    mode:'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)   
  })

  console.log('errors:', errors)

  const handleForm = (data: FormProps) =>{
    console.log(data)
  }
  
  return (
    <main className={`flex flex-col items-center justify-center h-screen gap-4`}>
      <div className={`flex flex-col items-center justify-between bg-white w-1/2 p-4 gap-4`}>

        

        <form onSubmit={handleSubmit(handleForm)}>

          <Input
          {...register('day', {setValueAs: (value: string) => parseInt(value, 10)})}
          type='number'
          placeholder='DD'
          label='DAY'
          helperText={errors.day?.message}
          />

          <Input
          {...register('month', {setValueAs: (value: string) => parseInt(value, 10)})}
          type='number'
          placeholder='MM'
          label='MONTH'
          helperText={errors.month?.message}
          />

          <Input
          {...register('year', {setValueAs: (value: string) => parseInt(value, 10)})}
          type='number'
          placeholder='YYYY'
          label='YEAR'
          helperText={errors.year?.message}
          />



          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  )
}
