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
            Student Health and Counseling Services
          </h2>
          <p className="md:w-3/5 mx-auto text-lg text-gray-700 leading-relaxed">
            Our platform is dedicated to providing Chuka University students
            with accessible and confidential health and counseling services.
            Whether you need mental health support, academic counseling, or
            personal guidance, we are here to help you achieve well-being and
            success.
          </p>
        </div>

        {/* Service Categories */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-nowrap justify-between items-center md:gap-8 gap-4 overflow-auto whitespace-nowrap">
              <Tab>Mental Health Counseling</Tab>
              <Tab>Academic Guidance</Tab>
              <Tab>Substance Abuse Support</Tab>
              <Tab>Wellness Coaching</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Mental Health Counseling
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    University life can be stressful, and mental well-being is
                    crucial. Our professional counselors provide a safe space
                    for students to discuss anxiety, depression, stress, and
                    personal challenges. We offer guidance to help you cope and
                    thrive.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    What We Offer:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Confidential one-on-one counseling sessions</li>
                    <li>Stress and anxiety management strategies</li>
                    <li>Support for emotional well-being</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg1}
                    alt="Mental Health Counseling"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Academic Guidance
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Struggling with coursework, exams, or time management? Our
                    academic counseling services help students develop effective
                    study habits, manage workloads, and navigate academic
                    challenges to achieve success.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    How We Assist:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Personalized academic support</li>
                    <li>Time management and study techniques</li>
                    <li>Guidance on career and educational goals</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg2}
                    alt="Academic Guidance"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Substance Abuse Support
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    If you or someone you know is struggling with substance
                    abuse, our platform provides confidential support and
                    recovery resources. We help students develop strategies for
                    overcoming addiction and maintaining a healthy lifestyle.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Support Available:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>One-on-one counseling for addiction recovery</li>
                    <li>Workshops on substance abuse prevention</li>
                    <li>Peer support groups and resources</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg3}
                    alt="Substance Abuse Support"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Wellness Coaching
                  </h3>
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Achieve a balanced and healthy lifestyle with our wellness
                    coaching. We offer personalized advice on fitness,
                    nutrition, and stress management to help students maintain
                    their overall well-being.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Wellness Services:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Personalized wellness plans</li>
                    <li>Guidance on stress and self-care</li>
                    <li>Healthy lifestyle strategies for students</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={servicesImg4}
                    alt="Wellness Coaching"
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
