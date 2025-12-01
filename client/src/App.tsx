import { Route, Routes } from "react-router-dom";
import UserCreateAccountPage from "./pages/UserPages/Auth/UserCreateAcccountPage";
import UserLoginPage from "./pages/UserPages/Auth/UserLoginPage";
import AgentCreateAccountPage from "./pages/AgentsPages/Auth/AgentCreateAccountPage";
import AgentLoginPage from "./pages/AgentsPages/Auth/AgentLoginPage";
import AdminCreateAccountPage from "./pages/AdminPages/Auth/AdminCreateAccountPage";
import AdminLoginPage from "./pages/AdminPages/Auth/AdminLoginPage";
import { userLinks, agentsLinks, adminLinks } from "./constants/data";
import DashboardLayout from "./layouts/DashboardLayout";
import UserHomePage from "./pages/UserPages/UserHomePage";
import UserStorePage from "./pages/UserPages/UserStorePage";
import UserOrdersPage from "./pages/UserPages/UserOrdersPage";
import UserProfilePage from "./pages/UserPages/UserProfilePage";
import AgentHomePage from "./pages/AgentsPages/AgentHomePage";
import CreateMenuPage from "./pages/AgentsPages/CreateMenuPage";
import AgentProfilePage from "./pages/AgentsPages/AgentProfilePage";
import AgentOrdersPage from "./pages/AgentsPages/AgentOrdersPage";
import AgentMenusPage from "./pages/AgentsPages/AgentMenusPage";
function App() {
  return (
    <div className="font-cairo">
      <Routes>
        {/* Auth Pages */}
        <Route path='/auth/user/create-account' element={<UserCreateAccountPage />} />
        <Route path='/auth/user/login' element={<UserLoginPage />} />
        <Route path='/auth/agent/create-account' element={<AgentCreateAccountPage />} />
        <Route path='/auth/agent/login' element={<AgentLoginPage />} />
        <Route path='/auth/admin/create-account' element={<AdminCreateAccountPage />} />
        <Route path='/auth/admin/login' element={<AdminLoginPage />} />
        {/* USER LAYOUT */}
        <Route path='/dashboard/user' element={<DashboardLayout links={userLinks} />}>
          <Route index element={<UserHomePage />} />
          <Route path='store' element={<UserStorePage />} />
          <Route path='orders' element={<UserOrdersPage />} />
          <Route path='profile' element={<UserProfilePage />} />
        </Route>
        {/* AGENT LAYOUT */}
        <Route path='/dashboard/agent' element={<DashboardLayout links={agentsLinks} />}>
          <Route index element={<AgentHomePage />} />
          <Route path='create-menu' element={<CreateMenuPage />} />
          <Route path='menus' element={<AgentMenusPage />} />
          <Route path="orders" element={<AgentOrdersPage />} />
          <Route path='profile' element={<AgentProfilePage />} />
        </Route>
        {/* ADMIN LAYOUT */}
        <Route path='/dashboard/admin' element={<DashboardLayout links={adminLinks} />}>
          <Route index element={<h1>لوحة تحكم المدير</h1>} />
          <Route path='menu' element={<h1>القائمة</h1>} />
          <Route path='orders' element={<h1>الطلبات</h1>} />
          <Route path='agents' element={<h1>الوكلاء</h1>} />
          <Route path='users' element={<h1>المستخدمين</h1>} />
          <Route path='profile' element={<h1>الملف الشخصي للمدير</h1>} />
        </Route>
        <Route path='*' element={<h1>حدث خطا ٤٠٤</h1>} />
      </Routes>
    </div>
  );
}
export default App;