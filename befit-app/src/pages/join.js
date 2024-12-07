import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

// Import images
// import TrustedImage1 from '/public/images/trusted-image1.jpg';
// import TrustedImage2 from '/public/images/trusted-image2.jpg';
// import TrustedImage3 from '/public/images/trusted-image3.jpg';
import TrustedImage from '/public/images/trusted-image.jpg';
import AppImage from '/public/images/app-image.jpg';
import FeatureImage from '/public/images/feature-image.jpg';
import DownloadImage from '/public/images/download-image.jpg';
import Feature from '/public/images/feature.jpg';

const JoinCommunity = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 mt-20">
      
      {/* Section 1: Intro Text and Download Button */}
      <section className="text-center space-y-4 sm:space-y-6 mt-10">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium font-dmSans leading-snug sm:leading-10 text-black">
          Fitness instructions &amp; 
          <span className="text-headerColor"> Artificial </span> 
          <br /> 
          <span className="text-headerColor"> Intelligence </span> 
 trained for only you.
        </h2>
        <div className="space-y-2">
          <button className="bg-headerColor text-white px-10 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Download BeFit App
          </button>
          <p className="text-sm sm:text-base text-subtext font-normal">
          Available on Appstore and Playstore
          </p>
        </div>
      </section>

      {/* Section 2: Image */}
      <section className="flex justify-center">
        <Image src={AppImage} alt="BeFit App Preview" className="rounded-lg shadow-lg max-w-full" fetchPriority="high"/>
      </section>

      {/* Section 3: Trusted by the Best */}
      <section className="text-center space-y-6">
        <h3 className="text-lg sm:text-xl font-medium font-dmSans text-subtext">
          Trusted by the best
        </h3>
        <div className="flex justify-center space-x-4">
          {/* <Image src={TrustedImage1} alt="Trusted Company 1" className="rounded-lg shadow-lg w-1/4" />
          <Image src={TrustedImage2} alt="Trusted Company 2" className="rounded-lg shadow-lg w-1/4" />
          <Image src={TrustedImage3} alt="Trusted Company 3" className="rounded-lg shadow-lg w-1/4" /> */}
          <Image src={TrustedImage} alt="Trusted by Companies" className="rounded-lg max-w-full mx-auto" />
        </div>
      </section>

      {/* Section 4: BeFit Special Features */}
      <section className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="flex-1">
          <Image src={FeatureImage} alt="BeFit Special Features" className="rounded-lg shadow-lg max-w-full" />
        </div>
        <div className="flex-1 text-center sm:text-left space-y-4">
          <button className="bg-black text-base font-dmSans text-white px-6 py-3 rounded-lg hover:bg-headerColor hover:text-white transition-colors font-medium">
            BeFit Special Features
          </button>
          <p className="text-base sm:text-4xl font-semibold text-downloadColor">
            Check &amp; log meal calories <br /> of your favourite meals 🏋🏽
          </p>
          <p className="font-dmSans text-sm sm:text-lg text-downloadColor">
            Sort out the most important and urgent tasks &amp; <br />
            concentrate on them first based on your priorities.
          </p>
          <p className="font-dmSans text-sm sm:text-lg text-downloadColor">
            Multi-voting helps a committee or group narrow down a large number of items into just a<br />
            few items on which to focus, &amp; similar to multi-voting, this approach.
          </p>
          <button className="bg-white text-headerColor text-base px-4 py-2 border border-headerColor rounded-lg hover:bg-headerColor hover:text-white transition-colors font-dmSans font-medium">
            Download BeFit
          </button>
        </div>
      </section>

      {/* Section 5 Part 1: Image Only */}
      <section className="flex justify-center mb-6">
        <div className="flex-1">
          <Image src={DownloadImage} alt="Download BeFit" className="rounded-lg shadow-lg max-w-full" />
        </div>
      </section>

      {/* Section 5 Part 2: Features List and Description */}
      <section className="flex flex-col-reverse sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="flex-1 text-center sm:text-left space-y-4">
          <button className="bg-black text-white text-sm px-6 py-3 mt-5 rounded-lg hover:bg-blue-700 font-bold font-dmSans">
            Download BeFit
          </button>
          <p className="text-5xl font-normal font-dmSans text-gray-800">What you get with 
          <span className="text-befitRed text-5xl"> befit </span>
            </p>
          <p className="text-xl font-light font-dmSans text-gray-600">
            Team members have the flexibility to choose the cover or savings amount that&#39;s suited to their budget and needs.
          </p>
          <ul className="text-xl font-dmSans text-gray-600 space-y-2">
            <li>🏋🏽 Enable members to personalize their selection</li>
            <li>🏋🏽 Flexibility to control their benefits in a tap</li>
            <li>🏋🏽 Remove hours of benefit queries every month</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image src={Feature} alt="Download BeFit" className="rounded-lg shadow-lg max-w-full" />
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

export default JoinCommunity;