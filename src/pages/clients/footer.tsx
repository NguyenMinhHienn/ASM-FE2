import { Link } from "react-router-dom"

function FooterClient() {
    return (
        <>
            <footer className="bg-white py-12 px-24">
                <div className="container mx-auto grid grid-cols-4 gap-8 text-gray-600">
                    <div>
                        <h3 className="font-bold text-black text-lg mb-8">Funiro.</h3>
                        <p className="text-sm">
                            HIENTHODIEN
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-6 font-bold">
                            <li><Link to={'/'} className="hover:text-black">Home</Link></li>
                            <li><Link to={'#'} className="hover:text-black">Shop</Link></li>
                            <li><Link to={'#'} className="hover:text-black">About</Link></li>
                            <li><Link to={'#'} className="hover:text-black">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Help</h4>
                        <ul className="space-y-6 font-bold">
                            <li><a href="#" className="hover:text-black">Payment Options</a></li>
                            <li><a href="#" className="hover:text-black">Returns</a></li>
                            <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Newsletter</h4>
                        <form className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="text-sm w-full placeholder-gray-500 border-b border-black" />
                            <button type="submit" className="text-black font-bold border-b border-black mb-1 ml-4">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

                <div>
                    <footer className="bg-[#262626] text-white pt-16">
                        <div className="container max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16">
                            <div>
                                <img
                                    className="mb-4"
                                    src="./assets/images/LOGO-FOOTER.png"
                                    alt=""
                                />
                                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl mb-4">Sitemap</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="">Shop</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl mb-4">Help</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="">Payment Options</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="">Returns</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policies</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl mb-4">Location</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="">support@euphoria.in</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="">Ahmedabad Main Road</a>
                                    </li>
                                    <li>
                                        <a href="">Udaipur, India- 313002</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="container max-w-screen-xl m-auto" />
                        <p className="text-center py-8">
                            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                        </p>
                    </footer>
                </div>

                <div className="container text-center mx-auto mt-8 border-t border-gray-300 pt-8 ">
                    <p>Hiennmph50241</p>
                </div>
            </footer>
        </>
    )
}

export default FooterClient
