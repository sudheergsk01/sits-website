import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, QrCode, Clock, ArrowRight, Shield, BarChart } from 'lucide-react';

const Demo = () => {
  const { product } = useParams();
  
  const isVisitorManagement = product === 'visitor-management';
  const isQRFoodOrdering = product === 'qr-food-ordering';

  if (!isVisitorManagement && !isQRFoodOrdering) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Demo Not Found</h1>
          <p className="text-gray-600 mb-8">The requested demo is not available.</p>
          <Link
            to="/products"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-20 text-white ${
        isVisitorManagement 
          ? 'bg-gradient-to-br from-blue-600 to-blue-800' 
          : 'bg-gradient-to-br from-teal-600 to-teal-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                isVisitorManagement ? 'bg-blue-500' : 'bg-teal-500'
              }`}>
                {isVisitorManagement ? (
                  <Users className="h-8 w-8 text-white" />
                ) : (
                  <QrCode className="h-8 w-8 text-white" />
                )}
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {isVisitorManagement ? 'Visitor Management' : 'QR Food Ordering'} Demo
                </h1>
                <p className={`text-lg mt-2 ${
                  isVisitorManagement ? 'text-blue-200' : 'text-teal-200'
                }`}>
                  Schedule a personalized demonstration
                </p>
              </div>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-8">
              {isVisitorManagement 
                ? 'Schedule a personalized demo of our comprehensive visitor management system. See how digital check-ins, ID verification, badge printing, and real-time notifications can transform your reception area.'
                : 'Book a customized demonstration of our complete QR food ordering system. Experience how QR code menus, online ordering, payment processing, and kitchen management work together seamlessly.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Schedule Your Demo Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a personalized demonstration of our {isVisitorManagement ? 'visitor management' : 'QR food ordering'} system tailored to your specific needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Personalized Demo */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Personalized Demo Session</h3>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-7">
                Schedule a one-on-one demo session with our product experts. Get personalized 
                answers to your questions and see how the system can be customized for your 
                specific business needs and requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">30-minute guided walkthrough</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Q&A with product experts</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Custom use case discussion</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Pricing and implementation details</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Team demonstration available</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Schedule Demo Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our demo session covers all the features and capabilities of the full system with real-world scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isVisitorManagement ? (
              <>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visitor Check-in</h3>
                  <p className="text-gray-600">
                    See the complete visitor registration process with photo capture and information collection.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ID Verification</h3>
                  <p className="text-gray-600">
                    Experience the ID scanning and verification process with sample identification documents.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Admin Dashboard</h3>
                  <p className="text-gray-600">
                    Explore the comprehensive admin interface with real-time visitor tracking and analytics.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
                  <p className="text-gray-600">
                    See how host notifications work via email, SMS, and in-app alerts.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Badge Printing</h3>
                  <p className="text-gray-600">
                    Experience the badge design and printing process with customizable templates.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting</h3>
                  <p className="text-gray-600">
                    Generate and export various reports including visitor logs and security analytics.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <QrCode className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">QR Menu Access</h3>
                  <p className="text-gray-600">
                    See how customers scan QR codes to access digital menus with rich images and descriptions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Placement</h3>
                  <p className="text-gray-600">
                    Experience the complete ordering process including customizations and special requests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Processing</h3>
                  <p className="text-gray-600">
                    See the secure payment gateway with multiple payment options and receipt generation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Display</h3>
                  <p className="text-gray-600">
                    See how orders appear in the kitchen with preparation timers and status updates.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Tracking</h3>
                  <p className="text-gray-600">
                    Experience real-time order status updates and estimated preparation times.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">
                    Explore sales analytics, popular items, and customer behavior insights.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 text-white ${
        isVisitorManagement 
          ? 'bg-gradient-to-r from-blue-600 to-blue-800' 
          : 'bg-gradient-to-r from-teal-600 to-teal-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your personalized demo today and see how our solution 
            can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Schedule Demo Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to={isVisitorManagement ? '/visitor-management' : '/qr-food-ordering'}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;