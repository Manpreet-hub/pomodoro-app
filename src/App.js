import "./App.css";
import { Header, Footer } from "./components/";
import { TaskPage } from "./pages/TaskPage/TaskPage";
import { useTheme } from "./context/";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme ? "dark-mode" : "app"}`}>
      <Header />
      <TaskPage />
      <Footer />
    </div>
  );
}

export default App;
