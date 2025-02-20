import { PropsWithChildren } from "react"

const AuthLayout = ({children}:PropsWithChildren) => {
  return (
    <div className="mt-16 w-full min-h-screen flex justify-center items-center">{children}</div>
  )
}

export default AuthLayout