import Banner from "./home_components/Banner"
import Best_works from "./home_components/Best_works"
import Care from "./home_components/Care"
import Faq from "./home_components/Faq"
import Fast_delivery from "./home_components/Fast_delivery"
import Nation_wide from "./home_components/Nation_wide"

function Home() {
    return <>
        <Banner></Banner>
        <Fast_delivery></Fast_delivery>
        <Care></Care>
        <Nation_wide></Nation_wide>
        <Best_works></Best_works>
        <Faq></Faq>
    </>
}

export default Home