import {
  BlogCardProps,
  IFooterData,
  FAQItem,
  PricingTab,
  ServiceProps,
  BlogPostCardProps,
  WhyChooseProps,
  ContactInfoProps,
  ProgressBarProps,
  galleryProps,
  FeaturedBlogCardProps,
  Benefits,
  InsuranceService,
  Testimonial,
  Tag,
} from "@/types/index";

import Light from "../../../public/svg/light.svg";
import Brain from "../../../public/svg/brain.svg";
import Graph from "../../../public/svg/grahp.svg";
import Edit from "../../../public/svg/edit.svg";
import Desktop from "../../../public/svg/desktop.svg"; // not working
import Secure from "../../../public/svg/secure.svg";
import BulbBlink from "../../../public/svg/bulb-blink.svg";
import Chat from "../../../public/svg/chat.svg";
import CloudBulb from "../../../public/svg/cloud-bulb.svg";
import InsuranceProcess from "../../../public/svg/insurance-process.svg";
import User from "../../../public/svg/user-group.svg";
import UserChat from "../../../public/svg/user-chatting.svg";
import Presenting from "../../../public/svg/presenting.svg";

// footer data start
export const footerData: IFooterData = {
  company: {
    title: "Company",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  workingTime: {
    title: "Working Time",
    schedule: [
      { days: "Mon - Fri", hours: "9:00 AM - 5:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  contactUs: {
    title: "Contact Us",
    info: {
      email: "support@example.com",
      phone: "+258 (549) 2158 3215",
      address: "2589 Dorland Street Luke INUA Berlin, Germany",
    },
  },
};
// footer data end

// blogs data start
export const blogData: BlogCardProps[] = [
  {
    id: "the-future-of-healthcare-insurance",
    title: "The Future of Healthcare Insurance",
    description:
      "Discover how digital transformation is reshaping healthcare insurance, making policies more accessible, personalized, and efficient for everyone.",
    author: "Dr. Jane Doe",
    date: "2025-02-01",
    category: "Healthcare",
    imageUrl: "/images/gallery-img-1.webp",
  },
  {
    id: "mastering-health-insurance-plans-in-2025",
    title: "Mastering Health Insurance Plans in 2025",
    description:
      "A comprehensive guide to understanding and selecting the best health insurance plans for you and your family.",
    author: "John Smith",
    date: "2025-01-25",
    category: "Insurance",
    imageUrl: "/images/gallery-img-2.webp",
  },
  {
    id: "key-benefits-of-preventive-healthcare",
    title: "Key Benefits of Preventive Healthcare",
    description:
      "Learn how preventive healthcare can reduce costs and improve your overall well-being with early detection strategies.",
    author: "Emily Johnson",
    date: "2025-01-15",
    category: "Wellness",
    imageUrl: "/images/gallery-img-3.webp",
  },
  {
    id: "navigating-claims-a-beginner’s-guide",
    title: "Navigating Claims: A Beginner’s Guide",
    description:
      "Step-by-step guidance on how to file health insurance claims smoothly and avoid common pitfalls.",
    author: "Michael Brown",
    date: "2025-01-10",
    category: "Claims",
    imageUrl: "/images/gallery-img-4.webp",
  },
  {
    id: "boost-your-health-with-these-wellness-tips",
    title: "Boost Your Health with These Wellness Tips",
    description:
      "Discover practical wellness strategies to enhance your health and reduce the need for extensive medical care.",
    author: "Sarah Lee",
    date: "2025-01-05",
    category: "Wellness",
    imageUrl: "/images/gallery-img-5.webp",
  },
  {
    id: "the-importance-of-mental-health-coverage",
    title: "The Importance of Mental Health Coverage",
    description:
      "Understand why mental health coverage is vital in modern healthcare insurance policies and how it benefits you.",
    author: "Chris Martin",
    date: "2025-02-03",
    category: "Mental Health",
    imageUrl: "/images/mental-health.webp",
  },
  {
    id: "10-essential-health-insurance-tips",
    title: "10 Essential Health Insurance Tips",
    description:
      "Improve your insurance literacy with these essential tips for maximizing your coverage and minimizing costs.",
    author: "Olivia White",
    date: "2025-01-20",
    category: "Insurance Tips",
    imageUrl: "/images/insurance-tips.jpg",
  },
  {
    id: "why-family-health-plans-are-a-smart-choice",
    title: "Why Family Health Plans Are a Smart Choice",
    description:
      "Explore the benefits of family health insurance plans and why they’re a cost-effective option for households.",
    author: "Daniel Green",
    date: "2025-01-30",
    category: "Family Health",
    imageUrl: "/images/family-health.jpg",
  },
  {
    id: "a-guide-to-remote-healthcare-services",
    title: "A Guide to Remote Healthcare Services",
    description:
      "Learn how telemedicine is revolutionizing healthcare access, making medical consultations more convenient than ever.",
    author: "Sophia Brown",
    date: "2025-02-02",
    category: "Telemedicine",
    imageUrl: "/images/telemedicine.jpg",
  },
  {
    id: "exploring-the-role-of-ai-in-healthcare-insurance",
    title: "Exploring the Role of AI in Healthcare Insurance",
    description:
      "Discover how AI is transforming claims processing, fraud detection, and personalized healthcare plans.",
    author: "William Davis",
    date: "2025-01-28",
    category: "Healthcare Tech",
    imageUrl: "/images/ai-healthcare.jpg",
  },
];

// blogs data end

// faq data start
export const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What services do you offer?",
    answer:
      "We provide comprehensive smart home solutions including automation system installation, security integrations, and energy management optimization.",
  },
  {
    id: "item-2",
    question: "How long does installation take?",
    answer:
      "Most projects are completed within 2-5 days depending on system complexity. We provide a detailed timeline during our initial consultation.",
  },
  {
    id: "item-3",
    question: "Do you offer maintenance support?",
    answer:
      "Yes, we provide various maintenance packages with 24/7 technical support and regular system health checks to ensure optimal performance.",
  },
  {
    id: "item-4",
    question: "What is your service warranty?",
    answer:
      "All our installations come with a 2-year comprehensive warranty and optional extended coverage plans for continued peace of mind.",
  },
  {
    id: "item-5",
    question: "Can I integrate with existing systems?",
    answer:
      "Our solutions are designed to be compatible with most major home automation platforms. We'll conduct a full compatibility assessment before installation.",
  },
  {
    id: "item-6",
    question: "We're one of Glassdoor's Best Places to Work in 2023!",
    answer:
      "Celebrating our recognition as a top workplace, thanks to our outstanding team and leadership.",
  },
];
// faq data end

// pricing data start
export const pricingTabs: PricingTab[] = [
  {
    title: "Monthly",
    packages: [
      {
        title: "Basic Plan",
        price: 29,
        frequency: "/month",
        description: "Perfect for individual needs",
        img: "/images/serivice-img-1.webp",
        features: [
          "Basic feature set",
          "24/7 email support",
          "5GB storage",
          "Standard security",
        ],
      },
      {
        title: "Premium Plan",
        price: 59,
        frequency: "/month",
        description: "Ideal for growing businesses",
        img: "/images/serivice-img-2.webp",
        features: [
          "Advanced features",
          "Priority email/chat support",
          "25GB storage",
          "Enhanced security",
          "Team collaboration",
        ],
      },
      {
        title: "Enterprise Plan",
        price: 99,
        frequency: "/month",
        description: "For large organizations",
        img: "/images/serivice-img-3.webp",
        features: [
          "Full feature access",
          "24/7 phone support",
          "Unlimited storage",
          "Enterprise-grade security",
          "Dedicated account manager",
        ],
      },
    ],
  },
  {
    title: "Annual",
    packages: [
      {
        title: "Basic Plan",
        price: 260,
        frequency: "/year",
        description: "Perfect for individual needs",
        img: "/images/serivice-img-2.webp",
        features: [
          "Basic feature set",
          "24/7 email support",
          "5GB storage",
          "Standard security",
        ],
        isRecommended: false,
      },
      {
        title: "Premium Plan",
        price: 520,
        frequency: "/year",
        description: "Ideal for growing businesses",
        img: "/images/serivice-img-1.webp",
        features: [
          "Advanced features",
          "Priority email/chat support",
          "25GB storage",
          "Enhanced security",
          "Team collaboration",
        ],
        isRecommended: true,
      },
      {
        title: "Enterprise Plan",
        price: 890,
        frequency: "/year",
        description: "For large organizations",
        img: "/images/serivice-img-3.webp",
        features: [
          "Full feature access",
          "24/7 phone support",
          "Unlimited storage",
          "Enterprise-grade security",
          "Dedicated account manager",
        ],
        isRecommended: false,
      },
    ],
  },
];
// pricing data end

// pricing data start
export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Consulting Services",
    description:
      "This strategy encompasses a wide range of from online marketing and social media to website.",
    link: "/consulting-services",
    Icon: Secure,
  },
  {
    id: 2,
    title: "Digital Solution",
    description:
      "This approach allows businesses and individuals to have a website that aligns with their brand.",
    link: "/digital-solution",
    Icon: BulbBlink,
  },
  {
    id: 3,
    title: "Financial Consultancy",
    description:
      "Wireframes are basic, low-fidelity visual of website or app's layout and structure Strategy.",
    link: "/financial-consultancy",
    Icon: Chat,
  },
  {
    id: 4,
    title: "Business Strategy",
    description:
      "Content creation and integration is a pivotal aspect of web design and Solutions Agency.",
    link: "/business-strategy",
    Icon: CloudBulb,
  },
  {
    id: 5,
    title: "Investment Advisory",
    description:
      "Content creation and integration is a pivotal aspect of web design Solutions Agency.",
    link: "/investment-advisory",
    Icon: InsuranceProcess,
  },
  {
    id: 6,
    title: "Digital Planning",
    description:
      "Integration content creation and is a pivotal aspect of web development sector and part.",
    link: "/digital-planning",
    Icon: Graph,
  },
];
// pricing data end

// blog data start
export const blogPosts: BlogPostCardProps[] = [
  {
    category: "Business",
    author: "GrowHub",
    date: "November 28, 2023",
    title:
      "Exploring the Full Spectrum of Digital Marketing’s Influence and Impact in the...",
    imageUrl: "/images/gallery-img-1.webp",
    slug: "exploring-digital-marketing-influence",
  },
  {
    category: "Meeting",
    author: "GrowHub",
    date: "November 28, 2023",
    title: "Delivering Memorable and Building Brand the Company Loyalty Zone",
    imageUrl: "/images/gallery-img-2.webp",
    slug: "building-brand-loyalty-zone",
  },
  {
    category: "Projects",
    author: "GrowHub",
    date: "November 28, 2023",
    title:
      "Mastery of Creative Problem Solving in Your Startup Office Business Plan",
    imageUrl: "/images/gallery-img-3.webp",
    slug: "creative-problem-solving-startup",
  },
];
// blog data end

// why choose us data start

export const whyChooseCardsData: WhyChooseProps[] = [
  {
    Icon: UserChat,
    title: "Best Business Consulting",
    description:
      "Empowering businesses with strategic insights and innovative solutions to drive growth and success. We help you make informed decisions that matter.",
  },
  {
    Icon: User,
    title: "24/7 Customer Support",
    description:
      "Always here for you—our dedicated support team ensures prompt assistance anytime, anywhere, keeping your business running smoothly.",
  },
  {
    Icon: Presenting,
    title: "Professional Team Members",
    description:
      "A team of experts committed to excellence, bringing diverse skills and experience to deliver top-notch solutions tailored to your needs.",
  },
];
// why choose us data end

// contact us data start
export const contactDetails: ContactInfoProps[] = [
  {
    method: "+1 (555) 123-4567",
    message: "Call us directly",
  },
  {
    method: "support@horizoncare.com",
    message: "Send us an email",
  },
  {
    method: "Mon - Fri, 9am - 6pm EST",
    message: "Working hours",
  },
];
// contact us data start

// progress data start
export const progressData: ProgressBarProps[] = [
  {
    label: "RELIABLECOVER INSURANCE",
    percentage: 80,
  },
  {
    label: "HUMAN RESOURCES",
    percentage: 65,
  },
  {
    label: "LIFESECURE INSURANCE",
    percentage: 75,
  },
];

// progress data start

// gallery img data start
export const galleryData: galleryProps[] = [
  {
    img: "/images/gallery-img-1.webp",
  },
  {
    img: "/images/gallery-img-2.webp",
  },
  {
    img: "/images/gallery-img-3.webp",
  },
  {
    img: "/images/gallery-img-4.webp",
  },
  {
    img: "/images/gallery-img-5.webp",
  },
  {
    img: "/images/gallery-img-6.webp",
  },
];
// gallery img data start

// featured blogs data start
export const featuredBlogCards: FeaturedBlogCardProps[] = [
  {
    title: "Exploring the Full Spectrum of Digital Marketing’s Influence",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-1.webp",
  },
  {
    title: "Delivering Memorable and Building Brand the Company",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-2.webp",
  },
  {
    title: "Mastery of Creative Problem Solving in Your Startup",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-3.webp",
  },
];

// featured blogs data end

// benefits data end
export const benefitsData: Benefits[] = [
  {
    benefit: "Affordable Premium Plans",
  },
  {
    benefit: "Hassle-Free Claim Process",
  },
  {
    benefit: "24/7 Customer Support",
  },
  {
    benefit: "Flexible Coverage Options",
  },
];
// benefits data end

export const insuranceServices: InsuranceService[] = [
  {
    Icon: Light,
    title: "SafeGuard Assurance",
    description:
      "Protect your assets with our risk management solutions, ensuring safety in every aspect of life.",
  },
  {
    Icon: Brain,
    title: "EliteCover Insurance",
    description:
      "Exclusive insurance plans for high-net-worth individuals, offering premium protection and benefits.",
  },
  {
    Icon: Graph,
    title: "ShieldPlus Insurance",
    description:
      "Advanced coverage designed to shield you from life’s uncertainties with flexible options.",
  },
  {
    Icon: Edit,
    title: "SecureLife Insurance",
    description:
      "Reliable life insurance plans to secure your family’s future, no matter what life brings.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Diamond Miller",
    designation: "CEO Director",
    quote:
      "We are helping companies untangle very large complex issues that always emerge during their digital evolution journey.",
    imageUrl: "/path/to/diamond-miller-image.jpg", // Replace with the actual image path
  },
  {
    name: "Sophia Green",
    designation: "Marketing Head",
    quote:
      "Their innovative solutions helped us scale faster while maintaining top-notch quality across all platforms.",
    imageUrl: "/path/to/sophia-green-image.jpg", // Replace with the actual image path
  },
  {
    name: "Ethan Brown",
    designation: "CTO",
    quote:
      "The technical expertise and dedication shown by their team were instrumental in our project success.",
    imageUrl: "/path/to/ethan-brown-image.jpg", // Replace with the actual image path
  },
];

export const tags: Tag[] = [
  { id: 1, name: "Adapting" },
  { id: 2, name: "Change" },
  { id: 3, name: "Guide" },
  { id: 4, name: "Health" },
  { id: 5, name: "Project" },
  { id: 6, name: "Raising" },
  { id: 7, name: "Service" },
  { id: 8, name: "Shaping" },
  { id: 9, name: "Startup" },
  { id: 10, name: "Strategies" },
  { id: 11, name: "Video" },
  { id: 12, name: "World" },
  { id: 13, name: "Wellness" },
  { id: 14, name: "Coverage" },
  { id: 15, name: "Insurance" },
  { id: 16, name: "Benefits" },
];
