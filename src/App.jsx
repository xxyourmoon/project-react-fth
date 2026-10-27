import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-primary">
          Teks dengan warna primary
        </h1>
        <p className="text-secondary">Teks dengan warna secondary</p>
        <p className="text-defaultBlack">Teks dengan warna defaultBlack</p>
        <button className="bg-primary text-white px-4 py-2 rounded">
          Primary Button
        </button>
        <button className="bg-secondary text-white px-4 py-2 rounded">
          Secondary Button
        </button>
        <div className="border border-primary p-4">
          Border dengan warna primary
        </div>
      </div>
    </>
  );
}

export default App;
