import "./App.css";
import { Route, Routes } from "react-router-dom";
import Logo from "./assets/Logo";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
