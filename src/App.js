import "./App.css";
import { Header, Footer } from "./components/";
import { TaskPage } from "./pages/TaskPage/TaskPage";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskPage />
      <Footer />
    </div>
  );
}

export default App;
