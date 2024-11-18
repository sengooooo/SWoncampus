import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mypage from "./pages/Mypage";
import Chat from "./pages/Chat";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/mypage" element={<Mypage />}/>
      <Route path="/chat" element={<Chat />}/>
    </Routes>
  );
}
export default App;