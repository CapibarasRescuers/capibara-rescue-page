import "./App.css";
import { Suspense } from "react";
import CapibaraMain from "./components/Page";

function App() {
  return (
    <Suspense fallback="Cargando...">
      <CapibaraMain />
    </Suspense>
  );
}

export default App;
