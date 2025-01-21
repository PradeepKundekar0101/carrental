import { useNavigate, useLocation, Outlet } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();

  const AccountTabItem = ({
    label,
    path,
    isActive,
  }: {
    label: string;
    path: string;
    isActive: boolean;
  }) => (
    <button
      onClick={() => navigate(path)}
      className={`block w-full text-left px-6 py-3 rounded-full ${
        isActive
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  const accountTabs = [
    { label: "Edit your profile", path: "/dashboard/account/edit-profile" },
    { label: "Verify your profile", path: "/dashboard/account/verify-profile" },
    { label: "Account settings", path: "/dashboard/account/settings" },
    { label: "Notifications", path: "/dashboard/account/notifications" },
    { label: "Payment methods", path: "/dashboard/account/payment-methods" },
    { label: "Get $20 credit", path: "/dashboard/account/get-credit" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 ">
      <div className="col-span-1">
        <nav className="space-y-2">
          {accountTabs.map((tab) => (
            <AccountTabItem
              key={tab.label}
              label={tab.label}
              path={tab.path}
              isActive={location.pathname === tab.path}
            />
          ))}
        </nav>
      </div>
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
