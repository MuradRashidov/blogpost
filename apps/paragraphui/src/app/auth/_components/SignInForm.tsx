"use client"
import SubmitButton from '@/components/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignIn } from '@/lib/actions/auth'
import React, { useActionState } from 'react'
import { useFormState } from 'react-dom'

const SignInForm = () => {
const [state,action] = useActionState(SignIn,{})
  return (
    <form action={action} className="flex flex-col gap-2">
        {!!state?.message && <p className="text-sm text-red-500 font-semibold">{state.message}</p>}
        <div>
            <Label htmlFor="email">Email</Label>
            <Input defaultValue={state?.data?.email} id="email" name="email" placeholder="mrdrshdv@gmail.com"/>
            {!!state?.errors?.email && <p className="text-sm text-red-500 font-semibold">{state.errors.email}</p> }

        </div>
        <div>
            <Label htmlFor="password">Password</Label>
            <Input defaultValue={state?.data?.password} id="password" name="password" placeholder="Murad"/>
            {state?.errors?.password?.map(err => <p key={err} className="text-sm text-red-500 font-semibold">{err}</p>) }
    
        </div>
        <SubmitButton>Sign In</SubmitButton>
    </form>
  )
}

export default SignInForm