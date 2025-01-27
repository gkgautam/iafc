"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaDumbbell, FaUsers, FaClock } from "react-icons/fa"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CoachesSection />
      <TestimonialsSection />
    </main>
  )
}

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
      <source
        src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
    <div className="relative z-20 text-center text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Transform Your Body, Transform Your Life
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join Iron Addicts Fitness Club and start your fitness journey today!
      </motion.p>
      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-110"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  </section>
)

const FeaturesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Why Choose IAFC?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaDumbbell className="text-5xl text-blue-600 mb-4" />}
          title="State-of-the-art Equipment"
          description="Access to the latest fitness equipment and technology."
        />
        <FeatureCard
          icon={<FaUsers className="text-5xl text-blue-600 mb-4" />}
          title="Expert Trainers"
          description="Personalized guidance from certified fitness professionals."
        />
        <FeatureCard
          icon={<FaClock className="text-5xl text-blue-600 mb-4" />}
          title="24/7 Access"
          description="Workout anytime that fits your schedule."
        />
      </div>
    </div>
  </section>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const PricingSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Basic"
          price="29"
          features={["Access to gym equipment", "Locker room access", "Free weights area"]}
        />
        <PricingCard
          title="Pro"
          price="59"
          features={["All Basic features", "Group fitness classes", "Personal training session (1/month)"]}
          highlighted
        />
        <PricingCard
          title="Elite"
          price="99"
          features={["All Pro features", "Unlimited personal training", "Nutrition consultation"]}
        />
      </div>
    </div>
  </section>
)

const PricingCard = ({
  title,
  price,
  features,
  highlighted = false,
}: { title: string; price: string; features: string[]; highlighted?: boolean }) => (
  <motion.div
    className={`bg-white p-8 rounded-lg shadow-md ${highlighted ? "border-4 border-blue-500" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">
      ${price}
      <span className="text-lg font-normal">/month</span>
    </p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-4 rounded-full font-semibold transition duration-300 ${highlighted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
    >
      Choose Plan
    </button>
  </motion.div>
)

const CoachesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Meet Our Coaches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CoachCard name="John Doe" specialty="Strength Training" image="https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0=" />
        <CoachCard name="Jane Smith" specialty="Yoga & Pilates" image="https://media.istockphoto.com/id/665064870/photo/couple-using-treadmills-together.jpg?s=612x612&w=0&k=20&c=XnQCDgGNjivnpD3gJbSzDC7CNXJo3LzYoei1RwsOwcM=" />
        <CoachCard name="Mike Johnson" specialty="Cardio & HIIT" image="https://media.istockphoto.com/id/503188721/photo/young-smiling-man-in-a-gym-holding-bottle.jpg?s=612x612&w=0&k=20&c=yVP0zGXpyG_pMADp3YpMH1H9iykXNSvB6gTOa524h9k=" />
      </div>
    </div>
  </section>
)

const CoachCard = ({ name, specialty, image }: { name: string; specialty: string; image: string }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Image
      src={image || "/placeholder.svg"}
      alt={name}
      width={300}
      height={300}
      className="rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
    <p className="text-gray-600 text-center">{specialty}</p>
  </motion.div>
)

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">What Our Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          quote="IAFC Gym has completely transformed my fitness journey. The trainers are exceptional, and the community is so supportive!"
          author="Sarah L."
          imageUrl="https://media.istockphoto.com/id/1470234996/photo/woman-sitting-in-a-fitness-studio-with-her-yoga-class.jpg?s=612x612&w=0&k=20&c=PW0frpWedwpoux9hNCuVuzYYLsRSQxo0FtLtPYOk14c="
        />
        <TestimonialCard
          quote="I've never felt stronger or more confident. The variety of classes and equipment keeps me motivated and excited to work out."
          author="Mark T."
          imageUrl="https://media.istockphoto.com/id/1040501222/photo/portrait-of-a-personal-trainer-in-the-gym.jpg?s=612x612&w=0&k=20&c=Xdmp8LM2OCBkwtbWELRkYoQlsT9OZECtq--7gE5BPLg="
        />
      </div>
    </div>
  </section>
)

const TestimonialCard = ({
  quote,
  author,
  imageUrl,
}: {
  quote: string;
  author: string;
  imageUrl: string;
}) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {/* Profile Image */}
    <div className="flex-shrink-0">
      <img
        src={imageUrl}
        alt={author}
        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
      />
    </div>

    {/* Testimonial Content */}
    <div>
      {/* Quote Icon */}
      <svg
        className="w-8 h-8 text-blue-500 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"></path>
      </svg>

      {/* Testimonial Text */}
      <p className="text-gray-600 mb-4">{quote}</p>

      {/* Author Name */}
      <p className="font-semibold">- {author}</p>
    </div>
  </motion.div>
);


