import Faq from "./components/Faq"
import Header from "./components/Header"
import Plan from "./components/Plan"
import Footer from "../(main-app)/components/Footer"
import Popup from '@/app/Landing/components/PopUp/PopUp'

export default async function choosePlan () {
    await new Promise((resolve) => setTimeout(resolve , 100))
    
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