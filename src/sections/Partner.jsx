import Klara from "../assets/logos/klarna.png";
import Paypal from "../assets/logos/paypal.png";
import Stripe from "../assets/logos/stripe.png"
import Logowall from "../common/Logowall";
import Mastercard from "../assets/logos/mastercard.png"
import Ikeja from "../assets/logos/ikeja.png"
import Dstv from "../assets/logos/dstv.png"
import Bedc from "../assets/logos/bedc.png"
import Airtel from "../assets/logos/airtel.png"
import Visa from "../assets/logos/visa.png"
import Payoneer from "../assets/logos/payoneer.png"
import Mtn from "../assets/logos/mtn.png"
import Mobile from "../assets/logos/mobile.png"




function Partner() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
        <article className="mb-10 w-full text-center px-8 lg:px-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Transact seamlessly with...</h2>
            <p className="">
                Connect your other accounts to Kobodrop seamlessly. Kobodrop supports 200+ <br /> integrations with other payment platforms like stripe, paypal, payoneer and others
            </p>
        </article>
        <div className="xl:flex xl:justify-center">
            <Logowall src1={Klara} src2={Paypal} src3={Stripe} alt1={"Klara logo"} alt2={"Paypal logo"} alt3={"stripe logo"}/>
            <Logowall src1={Mastercard} src2={Airtel} src3={Dstv} alt1={"Klara logo"} alt2={"Paypal logo"} alt3={"stripe logo"}/>
        </div>
        <div className="xl:flex xl:justify-center">
            <Logowall src1={Ikeja} src2={Bedc} src3={Payoneer} alt1={"Klara logo"} alt2={"Paypal logo"} alt3={"stripe logo"}/>
            <Logowall src1={Visa} src2={Mtn} src3={Mobile} alt1={"Klara logo"} alt2={"Paypal logo"} alt3={"stripe logo"}/>
        </div>
    </section>
  )
}

export default Partner