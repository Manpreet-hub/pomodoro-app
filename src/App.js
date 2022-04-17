import "./App.css";
import { Header, Footer, PomoTimer } from "./components/";
import { TaskPage } from "./pages/TaskPage/TaskPage";
import { useTheme } from "./context/";
import { Route, Routes } from "react-router-dom";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme ? "dark-mode" : "app"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<TaskPage />}></Route>
        <Route path="/timer" element={<PomoTimer />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
