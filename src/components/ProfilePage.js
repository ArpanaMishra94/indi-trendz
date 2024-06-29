import React from 'react';
import profile from '../assets/profile.png';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl pt-8 font-bold mb-6 text-[#636f70]">User Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img 
                src={profile}
                alt="Profile" 
                className="w-32 h-32 object-cover rounded-full mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl text-[#7b8a8b] font-semibold mb-2">Arpana Mishra</h2>
              <p className="text-[#636f70] mb-4">arp.mish@example.com</p>
              <button className="bg-[#7b8a8b] hover:bg-[#b5c0c1] text-white font-bold py-2 px-4 rounded">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-[#636f70] text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#636f70] text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#636f70] leading-tight focus:outline-none focus:shadow-outline" 
                id="fullName" 
                type="text" 
                placeholder="Arpana Mishra"
                readOnly
              />
            </div>
            <div>
              <label className="block text-[#636f70] text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#636f70] leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                placeholder="arp.mish@example.com"
                readOnly
              />
            </div>
            <div>
              <label className="block text-[#636f70] text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#636f70] leading-tight focus:outline-none focus:shadow-outline" 
                id="phone" 
                type="tel" 
                placeholder="+1 (555) 123-4567"
                readOnly
              />
            </div>
            <div>
              <label className="block text-[#636f70] text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#636f70] leading-tight focus:outline-none focus:shadow-outline" 
                id="address" 
                type="text" 
                placeholder="123 Main St, City, Country"
                readOnly
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl text-[#636f70] font-semibold mb-4">Order History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-[#636f70] border-gray-200">
                    #12345
                  </td>
                  <td className="py-2 px-4 border-b text-[#636f70] border-gray-200">
                    2023-06-15
                  </td>
                  <td className="py-2 px-4 border-b text-[#636f70] border-gray-200">
                    $129.99
                  </td>
                  <td className="py-2 px-4 border-b text-[#636f70] border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </td>
                </tr>
                {/* Add more order rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;