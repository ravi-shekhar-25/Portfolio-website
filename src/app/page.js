import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "@/app/components/SkillsSection";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="mt-10 px-6 sm:px-12 md:px-18 lg:px-32 space-y-10">
                <Navbar />
                <HeroSection />
                <AchievementsSection />
                <AboutSection />
                <SkillsSection />
                <EducationSection />
                <ProjectsSection />
                <EmailSection />
            </div>
            <Footer />
        </main>
    );
}
