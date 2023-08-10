import { AppRouter } from "./router";
import "./styles.css";

export function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <AppRouter />
    </div>
  );
}
