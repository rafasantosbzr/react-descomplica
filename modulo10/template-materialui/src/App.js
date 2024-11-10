import Header from "./components/header";
import TemporaryDrawer from "./components/TemporaryDrawer";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <TemporaryDrawer />
      <ListarTarefa />
    </div>
  );
}

export default App;