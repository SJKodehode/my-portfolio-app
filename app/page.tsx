import Hero from "@/components/hero"
import AboutMe from "@/components/aboutMe"
import { Statistics } from "@/components/statistics"
import CardGit from "@/components/gitCardComponent"
import ProjectCardWithTabs from "@/components/gitCardComponent"
import Projects from "@/components/projects"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <AboutMe />
        <Statistics />
        <Projects />
        <Contact />
      </div>
    </>
  )
  }
