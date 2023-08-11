import { AppRouter } from "./router";
import { DataProvider } from "./context/dataContext";
import "./styles.css";

export function App() {
  return (
    <DataProvider>
      <div className="h-screen w-screen flex flex-col">
        <AppRouter />
      </div>
    </DataProvider>
  );
}
