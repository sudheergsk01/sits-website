import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Smartphone, CreditCard, ChefHat, BarChart, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const QRFoodOrdering = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">QR Food Ordering System</h1>
                  <p className="text-teal-200 text-lg mt-2">Contactless Restaurant Solution</p>
                </div>
              </div>
              <p className="text-xl text-teal-100 mb-8 leading-8">
                Revolutionize your restaurant operations with our comprehensive QR-based ordering system. 
                Enable contactless dining, reduce wait times, increase order accuracy, and boost customer 
                satisfaction while streamlining kitchen operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo/qr-food-ordering"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Try Live Demo
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="bg-teal-500 bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Table 12 - Order #1234</h3>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    In Progress
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Margherita Pizza</span>
                    <span className="text-gray-900 font-medium">₹299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Caesar Salad</span>
                    <span className="text-gray-900 font-medium">₹199</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹498</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Fast, Contactless
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our QR ordering system transforms the dining experience in just four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="h-10 w-10 text-teal-700" />
              </div>
              <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scan QR Code</h3>
              <p className="text-gray-600">
                Customers scan the unique QR code placed on their table to access the digital menu instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-10 w-10 text-teal-700" />
              </div>
              <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse & Order</h3>
              <p className="text-gray-600">
                Customers browse the interactive menu, customize items, and place orders directly from their phones.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-10 w-10 text-teal-700" />
              </div>
              <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pay Online</h3>
              <p className="text-gray-600">
                Secure payment processing with multiple options including cards, UPI, and digital wallets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="h-10 w-10 text-teal-700" />
              </div>
              <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Prepares</h3>
              <p className="text-gray-600">
                Orders appear instantly on kitchen displays with preparation timers and customer preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Restaurant Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a modern, efficient restaurant operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Menu</h3>
              <p className="text-gray-700 leading-6">
                Interactive menus with high-quality images, detailed descriptions, nutritional information, 
                and real-time availability updates. Multi-language support available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Ordering</h3>
              <p className="text-gray-700 leading-6">
                Customers order directly from their smartphones without downloading apps. 
                Customization options, special requests, and dietary preferences supported.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Gateway</h3>
              <p className="text-gray-700 leading-6">
                Secure payment processing with support for credit cards, debit cards, UPI, 
                digital wallets, and cash payments with automatic receipt generation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitchen Display</h3>
              <p className="text-gray-700 leading-6">
                Real-time order management with preparation timers, priority queuing, 
                and order modification capabilities. Integration with existing kitchen equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-700 leading-6">
                Comprehensive reporting on sales, popular items, peak hours, customer preferences, 
                and revenue trends. Export capabilities for accounting integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Tracking</h3>
              <p className="text-gray-700 leading-6">
                Real-time order status updates for customers with estimated preparation times. 
                SMS and push notifications for order ready alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proven Business Results
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Restaurants using our QR ordering system see immediate improvements 
                in efficiency, customer satisfaction, and revenue.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">60% Faster Service</h3>
                    <p className="text-gray-600">
                      Eliminate wait times for taking orders and reduce table turnover time, 
                      allowing you to serve more customers during peak hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">95% Order Accuracy</h3>
                    <p className="text-gray-600">
                      Digital ordering eliminates miscommunication and human error, 
                      ensuring customers get exactly what they ordered every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">25% Revenue Increase</h3>
                    <p className="text-gray-600">
                      Higher table turnover, reduced staff costs, and increased upselling 
                      opportunities lead to significant revenue growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contactless Safety</h3>
                    <p className="text-gray-600">
                      Provide a safe dining experience with minimal physical contact, 
                      meeting health guidelines and customer expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-700 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Faster Service</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-700 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Order Accuracy</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-700 mb-2">25%</div>
                  <div className="text-sm text-gray-600">Revenue Boost</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-700 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="ml-3 text-lg font-bold text-teal-700">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Food Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our QR ordering system adapts to different restaurant types and dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fine Dining</h3>
              <p className="text-gray-600 text-sm">
                Elegant digital menus with wine pairings, chef recommendations, 
                and seamless integration with your premium service.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600 text-sm">
                Fast-casual restaurants benefit from rapid ordering, payment processing, 
                and order-ahead capabilities for pickup.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Courts</h3>
              <p className="text-gray-600 text-sm">
                Multi-vendor support with centralized payment processing 
                and unified customer experience across all stalls.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cafes & Bars</h3>
              <p className="text-gray-600 text-sm">
                Perfect for casual dining with happy hour specials, 
                loyalty programs, and social media integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Restaurant?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants that have already transformed their operations 
            with our QR ordering system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo/qr-food-ordering"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Try Live Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRFoodOrdering;