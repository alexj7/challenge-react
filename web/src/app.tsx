import { Navbar } from "./componets/navBar";
import { AppRouter } from "./router";
import "./styles.css";

export function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <AppRouter />
    </div>
  );
}
