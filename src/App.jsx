import FilterBy from "./components/FitlerBy";
import SortBy from "./components/SortBy";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FilterBy />
      <SortBy />
    </div>
  );
}

export default App;
