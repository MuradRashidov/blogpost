import Link from 'next/link'
import React from 'react'

const SignInPanel = () => {
  return (
    <>
      <Link href="/auth/sign-in">Sign In</Link>
      <Link href="/auth/sign-up">Sign Up</Link>
    </>
  )
}

export default SignInPanel