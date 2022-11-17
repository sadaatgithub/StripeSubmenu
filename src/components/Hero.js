import { useGlobalContext } from "../context";
import phoneImg from "../images/phone.svg"


const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main className="min-h-screen grid grid-cols-1 justify-items-center py-6 max-w-7xl mx-auto" onMouseOver={closeSubmenu}>
            <div className="grid items-center grid-cols-3 gap-x-12 w-full px-8 mt-10">
                <article className="col-span-3 md:col-span-2 flex flex-col text-center md:text-left">
                    <h1 className="mb-8 text-4xl md:text-[88px] font-bold text-gray-800 leading-none">
                        Payments infrastructure <br />
            for the internet</h1>
            <p className="max-w-[35em] leading-relaxed mb-5 text-gray-500 text-xl"> Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.</p>
            <button className="self-center md:self-start bg-neutral-800 py-2 px-4 text-white rounded-sm text-base md:text-xl">Start Now</button>
                </article>
                <article>
                    <img src={phoneImg} alt="" className="lg:self-end hidden md:block"/>
                </article>
            </div>
    </main>
  )
}

export default Hero