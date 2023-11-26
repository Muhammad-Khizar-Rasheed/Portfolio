
import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">About Omran</h1>
            <img className="w-[300px] profile-border" src="/assets/images/usman.jpg" alt="Profile of Omran" />
            <p className="text-justify">Hello! My name is Omran, I am a full stack web developer. My primary focus centers on constructing and enhancing websites for businesses, helping them establish a robust digital presence.</p>
            <p className="text-justify">I hold a B.S. in Computer Engineering from the National University of Computing and Emerging Sciences. In a former role, I worked as a react Developer at Eidcarosse , where I specialized in creating and customizing React and MERN based websites for clients. Additionally, I successfully managed and analysed the viewer and user data for the company as a Data Analyst. I made the transition into web development driven by my passion for designing websites and solving problems that empower businesses to thrive.</p>
            <p className="text-justify">Beyond coding and interacting with clients, I find joy in giving back to the community. Volunteering at Ideas Foundation Gives me joy and i feel good . In my spare time i goto SOS village and spend most of my time there, I am an active member of the Theatre Wallay, where I hone my public speaking skills and confidence and tend to do Theatre.</p>
            <p className="text-center">Here are a few Images:</p>
            <CubeCarousel name="desserts" carouselImages={dessertImages} />
            <p className="text-justify">My journey in web development is driven by the desire to make a meaningful impact on businesses and individuals alike. Combining my technical expertise, creativity, and dedication to continuous improvement, I strive to create compelling digital experiences that exceed expectations.</p>
        </section>
    );
}