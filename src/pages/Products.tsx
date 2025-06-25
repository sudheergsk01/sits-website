import React from 'react';
import { Link } from 'react-router-dom';
import { Users, QrCode, ArrowRight, Check, Star } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Discover our flagship solutions designed to revolutionize how businesses manage 
              visitors and serve customers. Each product is built with cutting-edge technology 
              and user-centric design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Visitor Management System */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Visitor Management System</h2>
                  <p className="text-blue-700 font-semibold">Enterprise Solution</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-7">
                Transform your reception area with a comprehensive digital solution that handles 
                visitor registration, ID verification, badge printing, and real-time notifications. 
                Perfect for corporate offices, hospitals, schools, and government facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Digital Check-in Process</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">ID Card Verification</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Badge Printing</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Host Notifications</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Security Integration</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced security and compliance</li>
                  <li>• Reduced reception workload by 70%</li>
                  <li>• Professional visitor experience</li>
                  <li>• Complete audit trail and reporting</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/visitor-management"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo/visitor-management"
                  className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Try Demo
                </Link>
              </div>
            </div>

            {/* QR Food Ordering System */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-700 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">QR Food Ordering System</h2>
                  <p className="text-teal-700 font-semibold">Restaurant Solution</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-7">
                Revolutionize your restaurant operations with contactless ordering through QR codes. 
                Customers scan, order, and pay directly from their phones while you manage everything 
                through our comprehensive dashboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">QR Code Menus</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Online Ordering</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Payment Integration</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Kitchen Display</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Order Management</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Sales Analytics</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 60% faster order processing</li>
                  <li>• Contactless dining experience</li>
                  <li>• Reduced staff workload</li>
                  <li>• Increased order accuracy</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/qr-food-ordering"
                  className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo/qr-food-ordering"
                  className="border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Both products offer enterprise-grade features with flexible pricing and comprehensive support.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-700">Visitor Management</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-teal-700">QR Food Ordering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Industry Focus</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">Corporate, Healthcare, Education</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">Restaurants, Cafes, Food Courts</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Primary Users</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">Receptionists, Security, Visitors</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">Customers, Staff, Kitchen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Setup Time</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">2-3 days</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">1-2 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Mobile App</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Analytics Dashboard</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about their experience with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "The visitor management system has transformed our reception process. 
                What used to take 10 minutes now takes 2 minutes, and our security has improved significantly."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Dr. Rajesh Mehta</div>
                <div className="text-blue-600">Administrator, City Hospital</div>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "Our customers love the QR ordering system. Orders are more accurate, 
                service is faster, and we've reduced our staffing needs while improving customer satisfaction."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                <div className="text-teal-600">Owner, Spice Garden Bistro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the solution that fits your business needs and start transforming 
            your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo/visitor-management"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;