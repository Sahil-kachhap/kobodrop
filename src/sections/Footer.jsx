import Logo from "../assets/logos/kobodrop_logo_bright.png";
import StoreLinks from "../common/StoreLinks";
import Linkedin from "../assets/logos/icons8-linkedin.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Twitter from "../assets/logos/icons8-twitterx.svg";


function Footer() {
  return (
    <section className="bg-gray-800">
        <div className="flex flex-col max-w-7xl px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
            <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
                <div>
                    <img className="w-36 mb-4" src={Logo} alt="footer"/>
                    <p>Start spending the right way</p>
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Product</p>
                        <a href="#overview">Overview</a>
                        <a href="#features">Features</a>
                        <a href="#solutions">Solutions</a>
                        <a href="#contact">Contact</a>
                        <a href="#releases">Releases</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Resources</p>
                        <a href="#blog">Blog</a>
                        <a href="#news">Newsletter</a>
                        <a href="#events">Events</a>
                        <a href="#help">Help Centre</a>
                        <a href="#support">Support</a>
                    </div>
                </div>
                <div className="w-fit">
                    <h2>Get the App</h2>
                    <StoreLinks />
                </div>
            </div>
            <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
                    <p className="w-[16ch] text-gray-400 md:w-full">&copy; 2024 Kobodrop. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src={Twitter} alt="twitter logo"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="facebook logo"/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt="Linkedin logo"/>
                        </a>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Footer