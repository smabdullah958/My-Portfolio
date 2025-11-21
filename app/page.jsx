import AboutPage from "@/components/aboutpage"
import ContactUs from "@/components/ContactUs";
import HomePage from "@/components/home"
import Project from "@/components/Project";
import Skills from "@/components/Skills";
export default async function mainpage() {
    await new Promise(resolve => setTimeout(resolve, 200)); 
  return (
    <div>
    {/* this isa  home page bro  bro  */}
    <HomePage/>
    <AboutPage/>
    <Skills/>
    <Project/>
    <ContactUs/>
    </div>
  );
}
