import React, { PropsWithChildren } from 'react'
import SignInForm from '../_components/SignInForm'
import Link from 'next/link'
import { API_URL } from '@/lib/constants'

const SignInPage = () => {
  return (
    <div className="container w-[30%]">
      <h2 className="text-sm">Sign In Page</h2>
      <div>
        <SignInForm />
        <Link href={"/auth/forgot"}>Forgot Your Password?</Link>
        <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm text-slate-500 font-normal">Don&apos;t have an account</p>
          <a className="font-semibold text-xs underline text-blue-500" href="/auth/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default SignInPage