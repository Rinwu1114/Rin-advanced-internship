'use client'

import { useSelector, useDispatch } from "react-redux"
import { openPopUp, closePopUp } from "@/app/redux/slices/loginSlice"
import { RootState } from "../../redux/store"
import { FaXmark } from "react-icons/fa6";

export default function Login(){

    const isOpen = useSelector((state: RootState) => state.loginPopUp.isOpen)
    const dispatch = useDispatch()

    console.log('isOpen value', isOpen)

    if (!isOpen) return null
    else return(
        <section id="login">
            <div className="fixed top-0 left-0 bg-[#3a4649] z-10 w-full h-full opacity-65">
                <div className="auth__wrapper">
                    <div className="auth">
                        <div className="auth__content">

                        </div>
                        <div className="auth__forgot--password"></div>
                        <button className="auth__switch--btn"></button>
                        <div className="auth__close--btn">
                            <FaXmark onClick={() => dispatch(closePopUp())}
                                className="cursor-pointer
                                h-12 w-12 fill-blue-500 opacity-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}