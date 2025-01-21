import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const TabItem = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-4 text-lg font-medium relative ${
      isActive ? "text-primary" : "text-gray-600"
    }`}
  >
    {label}
    {isActive && (
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
    )}
  </button>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabs] = useState([
    { label: "Calendar", path: "/dashboard/calendar" },
    { label: "Rentals", path: "/dashboard/rentals" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Account", path: "/dashboard/account" },
  ]);

  const currentPath = location.pathname;

  return (
    <div className="w-full pt-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-200">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <TabItem
                key={tab.label}
                label={tab.label}
                isActive={currentPath.startsWith(tab.path)}
                onClick={() => navigate(tab.path)}
              />
            ))}
          </div>
        </div>

        <div className="py-6 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
