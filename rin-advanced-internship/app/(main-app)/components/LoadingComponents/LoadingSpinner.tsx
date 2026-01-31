import { ImSpinner2 } from "react-icons/im";

export default function LoadingSpinner() {
    return (
        <span className="w-6 h-6 text-[#fff] animate-spin">
        <ImSpinner2 />
        </span>
    )
}