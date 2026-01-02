
import { useState } from 'react'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
    const [activeProjectType, setActiveProjectType] = useState("dev")

    const handleProjectTypeChange = (type: string) => {
        setActiveProjectType(type)
        const projectsSection = document.getElementById("projects")
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
            <div className="relative min-h-screen bg-background">
                <Hero onProjectTypeClick={handleProjectTypeChange} />
                <Education />
                <Projects activeType={activeProjectType} />
                <Contact />
            </div>
    )
}

