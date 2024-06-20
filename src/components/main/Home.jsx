import Banner from "./home_components/Banner"
import Best_works from "./home_components/Best_works"
import Care from "./home_components/Care"
import Faq from "./home_components/Faq"
import Fast_delivery from "./home_components/Fast_delivery"
import Feedbacks from "./home_components/Feedbacks"
function Home() {
    return <>
        <Banner></Banner>
        <Fast_delivery></Fast_delivery>
        <Care></Care>
        <Feedbacks></Feedbacks>
        <Best_works></Best_works>
        <Faq></Faq>
    </>
}

export default Home