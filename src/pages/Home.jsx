import Hero from './subcomponents/Hero'
import Timeline from './subcomponents/Timeline'
import About from './subcomponents/About'
import Skills from './subcomponents/Skills'
import Portfolio from './subcomponents/Portfolio'
import MyApps from './subcomponents/MyApps'
import Contact from './subcomponents/Contact'

const Home = () => {
  return (
    <article className='px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1100px] flex flex-col gap-14'>
      <Hero/>
      <Timeline/>
      <About/>
      <Skills/>
      <Portfolio/>
      <MyApps/>
      <Contact/>
    </article>
  )
}

export default Home