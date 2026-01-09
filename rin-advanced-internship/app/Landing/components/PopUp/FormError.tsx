"use client"

interface FormErrorProps {
    errorCode: number
}

export default function FormError({ errorCode }: FormErrorProps) {

if ( errorCode === 0 ) return null
    const defaultMessages = {
        9: "User email not found",
        1: "Please enter a valid email",
        2: "Please enter your password",
        3: "Please enter your email and password",
        4: "Error user not found",
        5: "Auth Login error",
        6: "Password must contain 6 or more characters",
        7: "Email already registered",
        8: "Registration failed",
        10: "Auth error, email not sent"
    }
    const messages = {...defaultMessages}
    return(
         <div className=".auth__error text-[#f56c6c] mb-4">
        {messages[errorCode as keyof typeof messages] || "An error occurred"}  
      </div> 
    )
}