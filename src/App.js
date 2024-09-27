import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((d) => {
    return <Card key={d.id} {...d} />;
    // Alternate Way: item={d}
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="cards-list main">{cards}</main>
    </div>
  );
}

export default App;
