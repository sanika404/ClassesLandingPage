import { BookOpenCheck, Glasses, Library, Presentation, School, User2Icon } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "About us", href: "#aboutUs" },
  { label: "Blog", href: "#" },
  { label: "Our Courses", href: "#course" },
  { label: "Testimonials", href: "#review" },
];

export const testimonials = [
  {
    user: "Mukesh Gopinath",
    company: "JEE Rank 15",
    image: user1,
    text: "Thanks to My Coaching Classes, I secured a top rank in JEE. The personalized attention and comprehensive study material were instrumental in my success. The regular mock tests and detailed feedback helped me identify and improve on my weaknesses. ",
  },
  {
    user: "Priya Devi",
    company: "NEET Score 680",
    image: user2,
    text: "Joining My Coaching Classes has been the turning point of my NEET journey. Today, as I proudly announce my score of 680, I am filled with immense gratitude for the guidance and support I received from my mentors at My Coaching Classes",
  },
  {
    user: "Srikhant Dube",
    company: "International Mathematics Olympiad Gold Medalist",
    image: user3,
    text: "The supportive environment and excellent resources provided by My Coaching Classes made all the difference in my preparation for the Olympiads.",
  },
  
  
];

export const features = [
  {
    icon: <Presentation />,
    text: " Experienced and Qualified Faculty",
    description:
      "Our team comprises highly qualified and experienced educators dedicated to your success. They bring extensive knowledge and expertise, ensuring that you receive the best guidance and support.",
  },
  {
    icon: <School />,
    text: "State-of-the-Art Infrastructure",
    description:
      "Our coaching centers are equipped with modern facilities, including well-stocked libraries, comfortable classrooms, and advanced teaching aids. This environment fosters effective learning and keeps students motivated.",
  },
  {
    icon: <Library/>,
    text: "Comprehensive Study Material",
    description:
      " We provide meticulously crafted study materials that cover every aspect of the syllabus. Our resources are regularly updated to reflect the latest exam patterns and trends, helping you stay ahead of the curve.",
  },
  {
    icon: <User2Icon />,
    text: "Personalized Attention",
    description:
      "We believe in personalized learning. Our small batch sizes ensure that each student gets the individual attention they need. Our teachers are always available to clear doubts and provide one-on-one mentoring.",
  },
  {
    icon: <BookOpenCheck />,
    text: "Proven Track Record",
    description:
      "Our students consistently achieve top ranks in various competitive exams. With thousands of successful alumni, our proven track record speaks volumes about the quality of education we provide.",
  },
  {
    icon: <Glasses />,
    text: "Regular Assessments and Feedback",
    description:
      "Our online learning platform offers a plethora of resources, including live classes, recorded lectures, and digital study materials. This flexibility ensures you can learn at your own pace, anytime, anywhere.",
  },
];



export const CourseOptions = [
  {
    title: "JEE",
    
    features: [
      "In-depth Syllabus Coverage",
      "Expert Faculty",
      "Regular Mock Tests",
      "Personalized Feedback",
    ],
  },
  {
    title: "NEET",
   
    features: [
      "Comprehensive Training",
      "Experienced Medical Entrance Faculty",
      "Extensive Practice Sessions",
      "Doubt Clearing Sessions",
    ],
  },
  {
    title: "Class 6-10 ",
    
    features: [
      "Strong Conceptual Base",
      "Interactive Learning",
      "Regular Assessments",
      "Preparation for Future Competitive Exams:",
    ],
  },
];

export const ContactLinks = [
  { href: "#", text: "Mail : mycoachingclasses@gmail.com" },
  { href: "#", text: "phone: 9192*****" },
 
];

export const CentersLinks = [
  { href: "#", text: "Amravati" },
  { href: "#", text: "Nashik" },
  { href: "#", text: "Mumbai" },
  
];

export const coursesLinks = [
  { href: "#", text: "Distance Learning" },
  { href: "#", text: "Online Test Series" },
  { href: "#", text: "Classroom program" },
  
];
