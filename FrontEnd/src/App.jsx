import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { AuthProvider } from "./contex/auth.Contex.jsx";
import Register from "./pages/Register.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";


import { TaskProvider } from "./contex/taskContex.jsx";
import Navbar from "./components/NavBar.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            
         <Navbar/>
            <Routes>
              //rutas publicas
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            
              //rutas privadas
              <Route element={<ProtectedRoutes />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/tasks/:id" element={<TaskForm />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
