import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import servicesImg1 from "../assets/service1.webp";
import servicesImg2 from "../assets/service2.webp";
import servicesImg3 from "../assets/service3.webp";
import servicesImg4 from "../assets/service4.webp";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold font-secondary text-heroBg">
            Transform Your Well-being with Us
          </h2>
          <p className="md:w-3/5 mx-auto text-lg text-gray-700 leading-relaxed">
            Our platform is dedicated to providing a safe and supportive space
            for students to access expert counseling and wellness resources.
            Whether you're seeking guidance, emotional support, or
            self-improvement, we are here to help you navigate challenges and
            thrive. Take the first step toward a healthier, more fulfilling life
            today.
          </p>
        </div>

        {/* Service Categories */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Couples Therapy</Tab>
              <Tab>Parenting Guidance</Tab>
              <Tab>Breaking Free</Tab>
              <Tab>Confidence Boost</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couples Therapy
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Every relationship experiences ups and downs. Our couples
                    therapy sessions provide a safe space to reconnect, rebuild
                    trust, and enhance communication. Whether you're facing
                    conflicts or simply want to strengthen your bond, our expert
                    guidance will help you nurture a healthier, happier
                    relationship.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    What You'll Gain:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>
                      Effective communication techniques for lasting harmony
                    </li>
                    <li>
                      Conflict resolution strategies to strengthen your bond
                    </li>
                    <li>
                      Deeper emotional connection and mutual understanding
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg1}
                    alt="Couples Therapy"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Guidance
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Parenting is both rewarding and challenging. Our sessions
                    equip you with powerful strategies to nurture your child’s
                    growth, set healthy boundaries, and build a strong, positive
                    parent-child relationship. Learn how to handle behavioral
                    challenges with confidence and create a supportive home
                    environment.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    What You'll Learn:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Positive discipline techniques for a happier home</li>
                    <li>
                      How to foster trust and open communication with your child
                    </li>
                    <li>
                      Effective parenting strategies for every stage of
                      development
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg2}
                    alt="Parenting Guidance"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Breaking Free
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Feeling stuck can be frustrating and overwhelming, but you
                    don’t have to navigate it alone. Our counselors help you
                    uncover what’s holding you back, break free from limiting
                    beliefs, and take meaningful steps toward your personal and
                    academic goals.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    How We Help:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>
                      Identify obstacles and create a personalized action plan
                    </li>
                    <li>Develop a growth mindset and overcome self-doubt</li>
                    <li>Build resilience and regain motivation</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg3}
                    alt="Breaking Free"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Confidence Boost
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Self-confidence is the key to success in every aspect of
                    life. Our sessions empower you to silence self-doubt,
                    embrace your strengths, and step into every situation with
                    confidence. Develop the mindset and skills needed to thrive
                    personally, socially, and academically.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    What You'll Achieve:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Overcome fear of failure and develop self-assurance</li>
                    <li>Master public speaking and social interactions</li>
                    <li>Build a strong, positive self-image</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg4}
                    alt="Confidence Boost"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
