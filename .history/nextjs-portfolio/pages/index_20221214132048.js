import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xassha David | Front-End Developer</title>
        <meta name="description" content="I'm a front-end web developer that focuses on building responsive projects that adhere to UX/UI principles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  )
}
