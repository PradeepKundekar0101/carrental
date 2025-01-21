import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple, FaEnvelope } from "react-icons/fa";
import image from "../../assets/images/Login.jpg";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-center text-primary">
          On the road!
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Sign up or log in to use Getaround
        </p>

        <div className="space-y-4 w-full max-w-xs">
          <button
            onClick={() => console.log("Google login clicked")}
            className="w-full py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Continue with Google
          </button>

          <button
            onClick={() => console.log("Facebook login clicked")}
            className="w-full py-2 px-4 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FaFacebookF className="h-5 w-5 mr-2" />
            Continue with Facebook
          </button>

          <button
            onClick={() => console.log("Apple login clicked")}
            className="w-full py-2 px-4 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-900"
          >
            <FaApple className="h-5 w-5 mr-2" />
            Continue with Apple
          </button>

          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>or</span>
          </div>

          <button
            onClick={() => console.log("Email login clicked")}
            className="w-full py-2 px-4 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            <FaEnvelope className="h-5 w-5 mr-2" />
            Continue with an email
          </button>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
        <img
          src={image}
          alt="Smiling woman in car"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
