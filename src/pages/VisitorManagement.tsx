import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Clock, BarChart, Camera, Printer, Bell, CheckCircle } from 'lucide-react';

const VisitorManagement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Visitor Management System</h1>
                  <p className="text-blue-200 text-lg mt-2">Enterprise Security & Efficiency Solution</p>
                </div>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-8">
                Transform your reception area with our comprehensive digital visitor management system. 
                Streamline check-ins, enhance security, and create professional first impressions while 
                maintaining complete audit trails and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo/visitor-management"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Try Live Demo
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="bg-blue-500 bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Welcome Visitor</h3>
                  <Clock className="h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">ID Verification Complete</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Host Notification Sent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Badge Printing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Visitor Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature designed to enhance security, improve efficiency, and create 
              professional visitor experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Check-in</h3>
              <p className="text-gray-700 leading-6">
                Touchscreen kiosks allow visitors to register quickly with photo capture, 
                contact details, and purpose of visit. Pre-registration options available 
                for expected visitors.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ID Verification</h3>
              <p className="text-gray-700 leading-6">
                Automated ID card scanning and verification against watchlists. 
                OCR technology extracts visitor information automatically, 
                ensuring accuracy and security compliance.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Badge Printing</h3>
              <p className="text-gray-700 leading-6">
                Professional visitor badges with photos, names, host information, 
                and visit duration. Customizable templates to match your brand 
                and security requirements.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Host Notifications</h3>
              <p className="text-gray-700 leading-6">
                Real-time SMS, email, and app notifications to hosts when their 
                visitors arrive. Integration with communication platforms like 
                Slack and Microsoft Teams.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-700 leading-6">
                Comprehensive reporting on visitor patterns, peak times, 
                frequent visitors, and security incidents. Export capabilities 
                for compliance and analysis.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-700 leading-6">
                Built-in compliance features for healthcare (HIPAA), 
                government facilities, and corporate security standards. 
                Audit trails and data retention policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our visitor management system delivers quantifiable improvements 
                to your operations and security posture.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">70% Faster Check-ins</h3>
                    <p className="text-gray-600">
                      Reduce average visitor registration time from 10 minutes to under 3 minutes 
                      with automated processes and pre-registration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhanced Security</h3>
                    <p className="text-gray-600">
                      100% visitor accountability with photo capture, ID verification, 
                      and real-time tracking of all personnel on premises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Image</h3>
                    <p className="text-gray-600">
                      Create lasting first impressions with modern, branded check-in experience 
                      that reflects your organization's professionalism.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cost Savings</h3>
                    <p className="text-gray-600">
                      Reduce reception staff workload and eliminate paper-based processes, 
                      saving up to $15,000 annually on operational costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Reception Staff Time Saved</span>
                  <span className="font-semibold text-green-600">4 hours/day</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Paper Cost Reduction</span>
                  <span className="font-semibold text-green-600">$2,400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Security Incidents Prevented</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Compliance Audit Prep Time</span>
                  <span className="font-semibold text-green-600">-80%</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Annual Savings</span>
                    <span className="text-2xl font-bold text-blue-700">$18,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our visitor management system adapts to the unique requirements of different industries 
              and facility types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Corporate Offices</h3>
              <p className="text-gray-600 text-sm">
                Professional visitor experience with host notifications, meeting room integration, 
                and employee directory.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                HIPAA-compliant visitor tracking with patient privacy protection, 
                emergency evacuation lists, and health screening.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Student safety with parent/guardian verification, volunteer tracking, 
                and automated visitor approval workflows.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government</h3>
              <p className="text-gray-600 text-sm">
                High-security environments with background check integration, 
                clearance verification, and audit trail compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Visitor Experience Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have already upgraded their visitor management 
            with our comprehensive solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo/visitor-management"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Try Live Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorManagement;