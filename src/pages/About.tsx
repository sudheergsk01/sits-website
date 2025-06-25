import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-700">SITS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Soham IT Solutions is a leading technology company dedicated to transforming businesses 
              through innovative digital solutions. Since our inception, we've been at the forefront 
              of creating user-centric applications that drive efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-7">
                To empower businesses with cutting-edge technology solutions that streamline operations, 
                enhance security, and improve customer experiences. We strive to make advanced digital 
                transformation accessible to organizations of all sizes, helping them stay competitive 
                in today's rapidly evolving marketplace.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-7">
                To become the most trusted technology partner for businesses across India, known for 
                delivering innovative, reliable, and scalable solutions. We envision a future where 
                every organization can leverage the power of technology to achieve their goals efficiently 
                and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Beginning (2020)</h3>
                <p className="text-gray-700 leading-7">
                  SITS was founded with a simple yet powerful vision: to bridge the gap between 
                  traditional business operations and modern digital solutions. Our founders, 
                  experienced software engineers and business strategists, recognized the need 
                  for specialized IT solutions tailored to Indian businesses.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth & Innovation (2021-2022)</h3>
                <p className="text-gray-700 leading-7">
                  As the world adapted to contactless solutions during the pandemic, we accelerated 
                  our development of visitor management and QR-based ordering systems. Our solutions 
                  helped hundreds of businesses maintain operations while ensuring safety and efficiency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expansion & Recognition (2023-2024)</h3>
                <p className="text-gray-700 leading-7">
                  Today, SITS serves diverse industries including healthcare, education, hospitality, 
                  and corporate sectors. We've been recognized for our innovative approach and 
                  commitment to customer success, establishing ourselves as a trusted technology partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every solution we deliver, ensuring the highest quality standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Our customers' success is our success. We prioritize their needs in everything we do.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously innovate to stay ahead of technology trends and deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We conduct business with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead SITS towards innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">SP</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Soham Patel</h3>
              <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with 10+ years in software development and business strategy. 
                Passionate about creating technology solutions that make a real difference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-700">AS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Anita Sharma</h3>
              <p className="text-teal-600 font-medium mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Technical expert specializing in scalable architecture and emerging technologies. 
                Leads our development team with innovation and excellence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-700">RK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Rajesh Kumar</h3>
              <p className="text-orange-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Operations specialist ensuring seamless project delivery and customer satisfaction. 
                Expert in process optimization and quality management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;