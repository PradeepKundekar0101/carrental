import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, User2, Gift, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const loginStatus = localStorage.getItem('isLogin') === 'true';
    const loginStatus = true;
    setIsLoggedIn(loginStatus);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.paddingRight = '0px';
    }
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    setIsLoggedIn(false);
    navigate('/login');
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity pointer-events-auto"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="w-full h-16 fixed top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="text-primary text-2xl font-bold">
            CarBooking
          </Link>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="relative bg-white hover:bg-gray-50 border border-gray-200 rounded-full pl-3 pr-4 py-5 flex items-center space-x-2 z-50"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User2 className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-primary font-medium">Collaborators</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-primary transition-transform duration-200" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={10}
                  className="w-[320px] mt-2 p-0 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 flex items-center space-x-3 border-b border-gray-100">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User2 className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1f0a37]">Collaborators Lab</span>
                      <button
                        onClick={() => handleNavigation('/dashboard/account/edit-profile')}
                        className="text-sm text-primary hover:underline text-left"
                      >
                        Edit your account
                      </button>
                    </div>
                  </div>

                  <div className="py-2">
                    <MenuItem
                      label="Verify Your Profile"
                      onClick={() => handleNavigation('/dashboard/account/verify-profile')}
                      className='border-b-2 border-gray-200'
                    />
                    <MenuItem
                      label="Rentals"
                      onClick={() => handleNavigation('/dashboard/rentals')}
                      className='border-b-2 border-gray-200'
                    />
                    <MenuItem
                      label="Payments"
                      onClick={() => handleNavigation('/dashboard/payments')}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-xl m-4 mt-0">
                    <MenuItem
                      label="Get $20 credit"
                      icon={<Gift className="w-5 h-5" />}
                      onClick={() => handleNavigation('/dashboard/account/get-credit')}
                      className="hover:bg-gray-100 border-b-2 border-gray-200"
                    />
                    <MenuItem
                      label="Log out"
                      icon={<LogOut className="w-5 h-5" />}
                      onClick={handleLogout}
                      className="hover:bg-gray-100"
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/enterprise" className="text-gray-600 hover:text-gray-900">Enterprise</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </>
            )}

            <Button variant="ghost" className="text-gray-600">
              Questions?
            </Button>
            <Button
              onClick={() => handleNavigation('/searchCar')}
              className="bg-white/20 text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-full px-6"
            >
              Rent out your car
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, className, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center justify-between px-4 py-3
      hover:bg-gray-50 cursor-pointer 
      ${className || ''}
    `}
  >
    <span className="text-[#1f0a37]">{label}</span>
    {icon}
  </div>
);

export default Navbar;