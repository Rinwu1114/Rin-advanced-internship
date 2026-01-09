'use client'
import { useState } from "react"
import FormError from "./FormError"
import FormSuccess from "./FormSuccess"
import { useDispatch } from "react-redux"
import { formValidation } from "@/app/hooks/FormValidation"
import { switchMode } from "@/app/redux/slices/loginSlice"
import { resetPassword } from "@/app/redux/thunks/authThunk"
import { AppDispatch } from "@/app/redux/store"



export default function ResetPassword () {
    const dispatch = useDispatch<AppDispatch>()
    const [email, setEmail] = useState("");

      const {
        formErrorCode,
        setFormErrorCode,
        formSuccessCode,
        setFormSuccessCode,
        vaildateOnlyEmail
      } = formValidation();

    const switchToLogin = () => {
        dispatch(switchMode("login"))
    }

    const handleReset = async (e: any) => {
        e.preventDefault()
        setFormErrorCode(0);
        setFormSuccessCode(0);


        const errorCode = vaildateOnlyEmail(email)
        if (errorCode > 0) {
            setFormErrorCode(errorCode)
            return
        } try {
            const result = await dispatch(resetPassword(email))
            if(resetPassword.fulfilled.match(result)){
                setFormSuccessCode(2) // email sent

                setTimeout(() => {
                    dispatch(switchMode('login'))
                }, 2000)
            }
            else if (resetPassword.rejected.match(result)){
                const error = result.error
                if (error?.message?.includes('user-not-found')){
                    setFormErrorCode(9)
                } else {
                    setFormErrorCode(10)
                }
            }
        } catch (error) {
            setFormErrorCode(10)
        }

    }

    return(
    <>
        <div className="auth__title text-center mb-6 font-bold text-xl text-[#032b41]">
                Reset your password
              </div>
              <FormError errorCode={formErrorCode} />
              <FormSuccess successCode={formSuccessCode} />
              <form className="auth__main--form flex flex-col gap-4">
                <input
                  className="auth__main--input h-10 px-3 rounded-sm border-[2px] border-[#bac8ce]
                                  text-[#394547] focus:outline-none focus:border-[#2bd97c] text-sm"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn flex justify-center" onClick={handleReset}>
                  <span>Sent reset password link</span>
                </button>
              </form>
        
              <button
                className="auth__switch--btn flex justify-center items-center text-center h-10 
                            w-full bg-none rounded-lg font-light text-[#116be9] cursor-pointer hover:bg-gray-100
                            transition-colors duration-150
                            mt-4"
                onClick={switchToLogin}
              >
                Go to login
              </button>
              <div
                className="absolute top-3 right-3 flex cursor-pointer 
                                     auth__close--btn"
              ></div>
    </>
    )
}