"use client"

interface FormSuccessProps {
    successCode: number
}

export default function FormSuccess({ successCode }: FormSuccessProps) {
    if ( successCode === 0 ) return null
    const defaultMessages = {
        1: "User registration sucess, Please log in",
        2: "Password reset email sent to provided email",
    }
    const messages = {...defaultMessages}
    return(
         <div className=".auth__error text-[#20ba68] mb-4">
        {messages[successCode as keyof typeof messages]}  
      </div> 
    )
}