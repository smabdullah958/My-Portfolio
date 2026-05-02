import AboutPage from "@/components/aboutpage";
import ContactUs from "@/components/ContactUs";
import HomePage from "@/components/home";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import WhyChooseMe from "@/components/WhyChooseMe";
export default function mainpage() {
  return (
    <div>
      {/* this isa  home page bro  bro  */}
      <HomePage />
      <AboutPage />
      <Skills />
      <WhyChooseMe />
      <Project />
      <ContactUs />
    </div>
  );
}
