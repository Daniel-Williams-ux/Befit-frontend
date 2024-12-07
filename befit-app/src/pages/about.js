import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

// Image imports
import AboutImage from '/public/images/about-image.jpg';
import ValueImage1 from '/public/images/value1.jpg';
import ValueImage2 from '/public/images/value2.jpg';
import ValueImage3 from '/public/images/value3.jpg';
import ValueImage4 from '/public/images/value4.jpg';
import ValueImage5 from '/public/images/value5.jpg';
import ValueImage6 from '/public/images/value6.jpg';
import TeamImage1 from '/public/images/team1.jpg';
import TeamImage2 from '/public/images/team2.jpg';
import TeamImage3 from '/public/images/team3.jpg';
import TeamImage4 from '/public/images/team4.jpg';
import TeamImage5 from '/public/images/team5.jpg';
import TeamImage6 from '/public/images/team6.jpg';
import TeamImage7 from '/public/images/team7.jpg';
import TeamImage8 from '/public/images/team8.jpg';
import TeamImage9 from '/public/images/team9.jpg';
import TeamImage10 from '/public/images/team10.jpg';
import TeamImage11 from '/public/images/team11.jpg';
import TeamImage12 from '/public/images/team12.jpg';
import TeamImage13 from '/public/images/team13.jpg';
import TeamImage14 from '/public/images/team14.jpg';
import TeamImage15 from '/public/images/team15.jpg';
import TeamImage16 from '/public/images/team16.jpg';
// Add additional team images as necessary

const About = () => {

  const valuesData = [
    {
      image: ValueImage1,
      title: "Customer First",
      description: "Our values define the Cowrywise culture, who we are, and what we do every day. They are the foundation of our identity and the compass of our interaction with all stakeholders.",
    },
    {
      image: ValueImage2,
      title: "Better Together",
      description: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners.",
    },
    {
      image: ValueImage3,
      title: "Keep it real",
      description: "Do it right. Say and share the right thing. We manage tough situations with courage and candor with healthy debates and differences of opinion.",
    },
    {
      image: ValueImage4,
      title: "Keep it simple",
      description: "We create simple but powerful experiences because greatness is simple. We see with the eyes of our customers, listen with their ears and feel with their hearts.",
    },
    {
      image: ValueImage5,
      title: "Set the bar high",
      description: "We lead by doing the best work. What we do, we do very well. It is our nature to innovate and take responsibility for our actions.",
    },
    {
      image: ValueImage6,
      title: "Never stop learning",
      description: "Our growth as a company is a product of the growth of our individual team members. Grow daily. It compounds. Do your best work, daily.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 mt-20">
      
      {/* Section 1: Intro Text */}
      <section className="text-center space-y-4 sm:space-y-6 lg:mb-10 mt-10 sm:mt-20">
        <h2 className="text-xl sm:text-3xl lg:text-3xl font-medium font-dmSans leading-snug sm:leading-10 text-black">
          At BefitApp, we believe that fitness is more than just a workout—it&#39;s a lifestyle achievable for everyone, no matter where you are on your journey.
        </h2>
        <Link href="/career" className="text-sm sm:text-base text-headerColor font-dmSans hover:text-blue-800 font-medium">
          See All Open Roles
        </Link>
      </section>


      {/* Section 2: About Image */}
      <section className="flex justify-center">
        <Image src={AboutImage} alt="About Us Image" className="rounded-lg shadow-lg max-w-full" fetchPriority="high"/>
      </section>

      {/* Section 3: What Defines Us */}
      <section className="bg-secColor text-center space-y-6 sm:space-y-8 px-4 sm:px-14 py-8 sm:py-20">
        <h3 className="text-xl sm:text-2xl font-semibold font-dmSans text-gray-800">What defines us</h3>
        <p className="text-sm sm:text-base font-normal font-dmSans text-secColor2 max-w-3xl mx-auto">
          Our values define the Cowrywise culture, who we are, and what we do every day. They are the foundation of our identity and the compass of our interaction with all stakeholders: customers, regulators, investors, partners, and our communities.
        </p>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {valuesData.map((value, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-lg p-4 text-center">
              <Image src={value.image} alt={value.title} className="rounded-lg mb-2 sm:mb-4" fetchpriority="high"/>
              <h4 className="text-sm sm:text-lg font-semibold text-secColor2">{value.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Section 4: Team Section */}
      <section className="text-center space-y-6 sm:space-y-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">The right skills, the right people.</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { image: TeamImage1, name: "Oghenetega Orherhe", title: "Customer Experience" },
            { image: TeamImage2, name: "Yarmirama Ashama", title: "Product" },
            { image: TeamImage3, name: "Bukola Olore", title: "Finance" },
            { image: TeamImage4, name: "Ifedolapo Oseni", title: "Growth" },
            { image: TeamImage5, name: "Busola Jeje, CFA", title: "Portfolio Management" },
            { image: TeamImage6, name: "Obasola Akintola", title: "Growth" },
            { image: TeamImage7, name: "Precious Ineh", title: "Customer Experience" },
            { image: TeamImage8, name: "Omolade Marquis", title: "Growth" },
            { image: TeamImage9, name: "Oluwadamilare Bello", title: "Growth" },
            { image: TeamImage10, name: "Feyisayo Sonubi", title: "Design" },
            { image: TeamImage11, name: "Oluwagbemi Awosusi", title: "HNI & Corporates" },
            { image: TeamImage12, name: "Oludamola Olubajo", title: "Growth" },
            { image: TeamImage13, name: "Razaq Ahmed, CFA", title: "CEO/Co-Founder" },
            { image: TeamImage14, name: "Timothy Obeisun", title: "Engineering" },
            { image: TeamImage15, name: "Esther Sanda", title: "Legal & Compliance" },
            { image: TeamImage16, name: "Ebenezer Akintomide", title: "People" },
          ].map((teamMember, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={teamMember.image} alt={`Team member ${index + 1}`} className="rounded-lg shadow-md max-w-full" />
              <h4 className="mt-2 text-sm sm:text-base font-dmSans font-semibold text-secColor2">{teamMember.name}</h4>
              <p className="text-xs sm:text-sm text-secColor2 font-dmSans">{teamMember.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-footColor py-10 sm:py-12 text-white space-y-8 sm:space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 sm:space-y-0">
            <div>
              <h4 className="lg:text-6xl sm:text-lg font-semibold font-dmSans leading-snug">
                Enterprise <br/> usage of <br/> Nutrition API
              </h4>
            </div>
            <div className="text-left md:text-right space-y-4 sm:space-y-0">
              <p className="text-base sm:text-base pb-3">
                Leverage our database to equip your <br/> restaurant with accurate nutritional data.
              </p>
              <button className="bg-white text-headerColor text-sm px-10 py-2 rounded-lg hover:bg-headerColor hover:text-white">
                Send us a mail
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between mt-8 sm:mt-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Logo and Socials */}
            <div className="space-y-2">
              <Link href="/">
                <Image src="/images/logo.png" alt="BeFit Logo" width={100} height={40} className="h-10 w-auto" />
              </Link>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Address</h4>
              <p className="text-sm font-light font-dmSans">123 Fitness St, Healthy City, USA</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Call us</h4>
              <p className="text-sm font-light font-dmSans">+123-456-7890</p>
              <p className="text-sm font-light font-dmSans">+098-765-4321</p>
              <p className="text-sm font-light font-dmSans">Email: contact@befitapp.com</p>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Our Policies</h4>
              <ul className="space-y-1 text-sm font-light font-dmSans">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;