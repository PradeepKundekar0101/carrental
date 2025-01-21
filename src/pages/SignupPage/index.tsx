import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    message: "",
    userType: "individual",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="relative w-full md:w-1/2 bg-gray-900">
        <img
          src="/images/signup.avif"
          alt="Car fleet"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 text-white bg-gradient-to-t from-black/50 to-transparent">
          <h2 className="text-5xl font-bold mb-4">
            Manage your car fleet
            <br />
            through our platform
          </h2>
          <p className="text-xl">Next-generation car rental</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            I want to list my car on our platform
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-gray-700"
              >
                Type of user
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
                required
              >
                <option value="individual">Individual Use</option>
                <option value="agency">Agency</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="JeanDupont"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex:jean@dupont.fr"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="ex:0123456789"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="75001"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primaryDark"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Learn more
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-primary hover:text-primaryDark text-sm">
              I already have a company, I sign it up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
