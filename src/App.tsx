import Wheel from "./components/Wheel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Run the following command to install the package.
          <pre>npm install react-lucky-wheel</pre>
          <main className="flex">
            <Wheel
              wheel={{
                width: 400,
                height: 400,
                segments: [
                  { name: "One", image: "", hexColor: "#dd323e" },
                  { name: "Two", image: "", hexColor: "#ff452e" },
                  { name: "Three", image: "", hexColor: "#fe9323" },
                  { name: "Four", image: "", hexColor: "#df4234" },
                  { name: "Five", image: "", hexColor: "#ab6344" },
                  { name: "Six", image: "", hexColor: "#ac400f" },
                  { name: "Seven", image: "", hexColor: "#bb30b3" },
                  { name: "Eight", image: "", hexColor: "#ac30fe" },
                  { name: "Nine", image: "", hexColor: "#bc2402" },
                  { name: "Ten", image: "", hexColor: "#fc3001" },
                  // { name: "Eleven", image: "", hexColor: "#333ffe" },
                  // { name: "Twelve", image: "", hexColor: "green" },
                  // { name: "13", image: "", hexColor: "red" },
                  // { name: "14", image: "", hexColor: "pink" },
                  // { name: "15", image: "", hexColor: "blue" },
                  // { name: "16", image: "", hexColor: "brown" },
                  // { name: "17", image: "", hexColor: "black" },
                  // { name: "18", image: "", hexColor: "gray" },
                  // { name: "19", image: "", hexColor: "beige" },
                  // { name: "20", image: "", hexColor: "purple" },
                ],
                backgroundColor: "#aba034",
                timingFunction: "ease-in-out",
              }}
              spinBtn={{
                text: "spin",
                width: 60,
                height: 60,
                backgroundColor: "#ace500",
                borderWidth: 4,
                borderColor: "rgba(0,0,0,0.75)",
              }}
            />
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
