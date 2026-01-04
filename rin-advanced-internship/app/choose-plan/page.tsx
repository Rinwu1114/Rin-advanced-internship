import Faq from "./components/Faq"
import Header from "./components/Header"
import Plan from "./components/Plan"
import Footer from "../components/Footer"
import Popup from '@/app/Landing/components/PopUp'

export default function choosePlan () {
    return(
<div className="plan w-full">
    <Popup />
    <Header />
    <div className="row">
        <div className="container mx-auto">
            <Plan />
            <Faq />
        </div>
    </div>
    <Footer />
</div>
    )
}