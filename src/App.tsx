// @ts-nocheck
import { Outlet } from "react-router-dom"
import Logo from './assets/logo.svg'
import Andrea from './assets/pexels-andrea-piacquadio-3978564 1.png'
import Target from './assets/Group 42911.svg'

import { ReactComponent as Coaching } from './assets/intro/coaching.svg'
import { ReactComponent as Consultation } from './assets/intro/consultation.svg'
import { ReactComponent as People } from './assets/intro/people.svg'

import Jane from './assets/intro/image 68.png'
import Catherine from './assets/intro/image 68 (1).png'
import Jane2 from './assets/intro/image 68 (2).png'
import StarsColor from './assets/intro/Stars.png'
import Stars from './assets/intro/Stars (1).png'

import Squared from './assets/Squared.png'
import Squared2 from './assets/Squared (1).png'

import Squared3 from './assets/Image.png'

function App() {

  return (
    <div className="text-main-text">
      <NavBar />
      <main>
        <Hero />
        <Introduction />
        <Reviews />
        <Blog />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

function Footer() {
  return (
    <>
      <section className="w-full px-28 py-20 flex bg-off-white justify-between">
        <div>
          <h1 className="font-extrabold text-brand-color text-3xl leading-[2.5] ">Get notified when I publish new articles</h1>
          <p className="text-xl">Stay up to date with the latest news, announcements, and articles.</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <input className="outline-none rounded-lg border border-gray-300 px-4 py-2" placeholder="Enter your email" />
          <button className="px-4 rounded-lg py-2 bg-complementary-600 text-white">Subscribe</button>
        </div>

      </section>
      <footer className="flex px-28 py-20 text-gray-400">
        <div className="flex gap-10 flex-col w-[40%] pr-20 ">
          <div>
            <img src={Logo} />
          </div>
          <p>Design amazing digital experiences that create more happy in the world.</p>

        </div>
        <div className="grow flex">
          <div className="flex flex-col gap-3 grow">
            <h3 className="font-extrabold text-brand-color">Pages</h3>
            <span>Home</span>
            <span>Services</span>
            <span>About Us</span>
            <span>Extra Sales/Landingpage</span>
            <span>Free guide</span>
          </div>

          <div className="flex flex-col gap-3 grow">
            <h3 className="font-extrabold text-brand-color">Pages</h3>
            <span>Home</span>
            <span>Services</span>
            <span>About Us</span>
            <span>Extra Sales/Landingpage</span>
            <span>Free guide</span>
          </div>

        </div>
      </footer>
    </>

  )
}

function CTA() {
  return (
    <section className="w-full p-28 flex justify-center items-center">
      <div className="w-full bg-off-white rounded-2xl flex justify-between pt-10 shadow-xl drop-shadow-2xl">
        <div className="pl-14 flex flex-col justify-center">
          <div>
            <h1 className="font-extrabold text-brand-color text-3xl ">Get 15-Minutes Complimentary</h1>
            <h1 className="font-extrabold text-brand-color text-3xl ">online session.</h1>
          </div>
          <p className="text-gray-400 text-xl my-8">Limited Period Offer. Claim now.</p>
          <button className="px-4 rounded-lg py-3 bg-complementary-600 font-extrabold text-white">Book now</button>
        </div>
        <div className="">
          <img src={Squared3} className="rounded-tl-xl rounded-br-2xl" />
        </div>

      </div>

    </section>
  )
}

function Blog() {
  return (
    <section className="py-24 px-28 flex flex-col gap-10 justify-center items-center">
      <div className="text-center">
        <h1 className="font-extrabold text-brand-color text-5xl ">Stay motivated, read the</h1>
        <h1 className="font-extrabold text-brand-color text-5xl ">weekly blog articles.</h1>
      </div>
      <div className="w-full flex justify-evenly">
        <div className="w-[30%]">
          <div>
            <img src={Squared} className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-2 justify-center p-4">
            <h3 className="font-extrabold text-brand-color text-xl ">Balancing your love and work life.</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <div>
            <img src={Squared2} className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-2 justify-center p-4">
            <h3 className="font-extrabold text-brand-color text-xl ">A short break from social media is important.</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <div>
            <img src={Squared} className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-2 justify-center p-4">
            <h3 className="font-extrabold text-brand-color text-xl ">Balancing your love and work life.</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className="px-4 rounded-lg py-3 bg-complementary-600 text-white">Read more blogs</button>
      </div>

    </section>
  )
}

function Reviews() {
  return (
    <section className="py-24 px-28 bg-off-white">
      <h1 className="font-extrabold text-brand-color text-5xl ">Hear what my</h1>
      <h1 className="font-extrabold text-brand-color text-5xl ">clients say about me.</h1>
      <div className="w-full flex gap-20 mt-10">
        <div className="w-2/3 bg-white p-10 flex flex-col gap-4">
          <p>"I gained so much <strong>confidence</strong> in my ability to connect and deepen my relationships with people."</p>
          <p className="text-brand-color font-bold">Jane</p>
          <div>
            <img src={Jane} />
          </div>
          <div>
            <img src={StarsColor} />
          </div>
        </div>
        <div className="w-2/3 bg-white p-10 flex flex-col gap-4">
          <p>"I gained so much <strong>confidence</strong> in my ability to connect and deepen my relationships with people."</p>
          <p className="text-brand-color font-bold">Catherine</p>
          <div>
            <img src={Catherine} />
          </div>
          <div>
            <img src={Stars} />
          </div>
        </div>
        <div className="w-2/3 bg-white p-10 flex flex-col gap-4">
          <p>"I gained so much <strong>confidence</strong> in my ability to connect and deepen my relationships with people."</p>
          <p className="text-brand-color font-bold">Michelle</p>
          <div>
            <img src={Jane2} />
          </div>
          <div>
            <img src={Stars} />
          </div>
        </div>
      </div>

    </section>
  )

}

function Introduction() {
  return (
    <section className="flex flex-col gap-20 w-full px-28 py-20">
      <div className="flex w-full">
        <h1 className="font-extrabold text-brand-color text-5xl ">I can help you in these particular areas.</h1>
        <div className="w-[70%]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </p>
          <br />
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
      </div>
      <div className="flex justify-center w-full px-4 gap-20">
        <div>
          <Coaching />
          <p className="font-extrabold text-xl text-brand-color my-2">1:1 Coaching</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </p>
        </div>
        <div>
          <Consultation />
          <p className="font-extrabold text-xl text-brand-color my-2">Consultation</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </p>
        </div>
        <div>
          <People />
          <p className="font-extrabold text-xl text-brand-color my-2">Group Coaching Sessions</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </p>
        </div>
      </div>

    </section>
  )
}

function Hero() {
  return (
    <section className="h-screen w-full px-20 py-20 flex justify-start bg-off-white">
      <div className="w-[50%] flex flex-col gap-4 pr-32 pt-10">
        <p>Proven strategies backed by science for success</p>
        <h1 className="text-6xl font-extrabold text-brand-color leading-[1.1]">Live life at the full potential</h1>
        <p>I help people to discover their true potential and live a fulfilling life...
          Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
        <div>
          <button className="px-4 rounded-lg py-3 bg-complementary-600 text-white">Get your free guide now</button>
        </div>
      </div>
      <div className="relative pl-20">
        <div className="flex absolute bg-white drop-shadow-2xl shadow-xl p-6 gap-3 -left-10 -top-12">
          <img src={Target} className="w-12 h-auto" />
          <div>
            <p className="text-brand-color font-extrabold text-xl">100%</p>
            <p className="text-sm">Success rate this year</p>
          </div>
        </div>
        <img src={Andrea} className="" />
      </div>
    </section>
  )
}

function NavBar() {
  return (
    <header className="w-full px-20 py-2 text-sm">
      <nav className="flex justify-between items-center">
        <div>
          <img src={Logo} />
        </div>
        <ul className="flex justify-center items-center gap-6">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Extra Sales Page</li>
          <button className="bg-complementary-600 rounded-md px-6 p-3 text-white font-bold">Get your free guide now</button>
        </ul>
      </nav>
    </header>
  )

}

export default App
