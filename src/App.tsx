import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./screens/Welcome";
import Layout from "./components/ui/Layout";
import Dashboard from "./screens/Dashboard";
import CustomHook from "./screens/CustomHook";
import Debouncing from "./screens/Debouncing";
import Optimizations from "./screens/Optimizations";
import ReactWindow from "./screens/ReactWindow";
import ProtectedRoute from "./components/logic/ProtectedRoute";
import HiddenRoute from "./components/logic/HiddenRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <HiddenRoute>
              <Welcome />
            </HiddenRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customHook" element={<CustomHook />} />
          <Route path="debouncing" element={<Debouncing />} />
          <Route path="optimizations" element={<Optimizations />} />
          <Route path="reactwindow" element={<ReactWindow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
