import SignUpForm from "../_components/SignUpForm"

const SignUpPage = () => {
  return (
    <div className="container w-[30%]">
      <h2>SignUp Page</h2>
      <div>
      <SignUpForm/>
       <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm text-slate-500 font-normal">Have you an account</p>
        <a className="font-semibold text-xs underline text-blue-500" href="/auth/sign-in">Sign In</a>
       </div>
      </div>
    </div>
  )
}

export default SignUpPage