import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Rentals from "./pages/Dashboard/Rentals";
import Payments from "./pages/Dashboard/Payments";
import Account from "./pages/Dashboard/Account";
import Login from "./pages/LoginPage";
import EditProfile from "./pages/Dashboard/Account/EditProfile";
import VerifyProfile from "./pages/Dashboard/Account/VerifyProfile";
import AccountSettings from "./pages/Dashboard/Account/AccountSettings";
import Notifications from "./pages/Dashboard/Account/Notifications";
import PaymentMethods from "./pages/Dashboard/Account/PaymentMethods";
import GetCredit from "./pages/Dashboard/Account/GetCredit";
import Calendar from "./pages/Dashboard/Calendar";
import HeroPage from "./pages/HeroPage";
import SearchCarPage from "./pages/SearchCarPage/SearchCar";
import SignupForm from "./pages/SignupPage";

const LayoutWithNavbar: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App: React.FC = () => {
  return (
    <div className="font-custom">
      <Router>
        <Routes>
          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<HeroPage />} />
            <Route path="/searchCar" element={<SearchCarPage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="calendar" replace />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="rentals" element={<Rentals />} />
              <Route path="payments" element={<Payments />} />
              <Route path="account" element={<Account />}>
                <Route index element={<Navigate to="edit-profile" replace />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="verify-profile" element={<VerifyProfile />} />
                <Route path="settings" element={<AccountSettings />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="payment-methods" element={<PaymentMethods />} />
                <Route path="get-credit" element={<GetCredit />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
