import React, { useState } from 'react';
import { Rocket, Briefcase, Users, TrendingUp, Mail, Phone, MapPin, Upload } from 'lucide-react';
import Footer from './Footer';
import Navigation from './Navigation';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    gender: 'male',
    message: '',
    resume: null
  });

  const [activeTab, setActiveTab] = useState('apply');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      gender: 'male',
      message: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Header */}
      <Navigation />

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-6 rounded-full">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-center">Welcome</h2>
              
              <p className="text-white/90 leading-relaxed text-justify mb-8">
                Navarna Bharat is a dynamic and versatile organization committed to delivering excellence in Fast-Moving Consumer Goods (FMCG), cutting-edge Information Technology (IT) services and Staffing Solutions.
              </p>

              <button className="w-full bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg">
                Contact
              </button>
            </div>

            {/* Why Join Us */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Join Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Career Growth</h4>
                    <p className="text-sm text-gray-600">Unlimited opportunities to advance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Great Culture</h4>
                    <p className="text-sm text-gray-600">Collaborative and inclusive environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Diverse Projects</h4>
                    <p className="text-sm text-gray-600">Work across FMCG, IT & Staffing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-8">
            {activeTab === 'apply' ? (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Apply for Job</h2>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg">
                    Hirer
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <input
                    type="text"
                    name="address"
                    placeholder="Address *"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Female</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Upload Resume *</label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 file:cursor-pointer"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Navarna Bharat</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Navarna Bharat is a dynamic and versatile organization committed to delivering excellence across multiple sectors. We specialize in Fast-Moving Consumer Goods (FMCG), cutting-edge Information Technology (IT) services, and comprehensive Staffing Solutions.
                  </p>
                  <p>
                    Our mission is to drive innovation, foster growth, and create value for our clients, partners, and employees. We believe in building long-term relationships based on trust, quality, and mutual success.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-blue-600 mb-2">FMCG</h3>
                      <p className="text-sm">Quality consumer products that meet everyday needs</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-blue-600 mb-2">IT Services</h3>
                      <p className="text-sm">Cutting-edge technology solutions for modern businesses</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-blue-600 mb-2">Staffing</h3>
                      <p className="text-sm">Connecting talent with opportunity across industries</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}