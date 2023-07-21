"use client"

import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './../components/input/Input';
import { IconArrow } from './../components/Icon-arrow';

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
      <div className={`flex flex-col items-center justify-between
                     bg-white p-10 rounded-2xl w-1/2`}>

        <form onSubmit={handleSubmit(handleForm)} className={`flex gap-9 pb-10 border-b-2 w-full
                                                              relative`}>
  
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

              <button type="submit" className={`bg-purple rounded-full p-5
                                                absolute -right-0 -bottom-10`}> 
                <IconArrow width={46} height={44}/> 
              </button>


          </form>

          <div className={``}>
            Resultados
          </div>

      </div>
    </main>
  )
}
