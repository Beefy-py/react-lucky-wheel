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
              // theme="heineken-version-one"
              maxSpins={4}
              wheel={{
                width: 400,
                height: 400,
                segments: [
                  { name: "One", image: "" }, // color: "#dd323e"
                  { name: "Two", image: "" }, // color: "#ff452e"
                  { name: "Three", image: "" }, // color: "#fe9323"
                  { name: "Four", image: "" }, // color: "#df4234"
                  { name: "Five", image: "" }, // color: "#ab6344"
                  { name: "Six", image: "" }, // color: "#ac400f"
                  { name: "Seven", image: "" }, // color: "#bb30b3"
                  { name: "Eight", image: "" }, // color: "#ac30fe"
                  { name: "Nine", image: "" }, //color: "#bc2402"
                  { name: "Ten", image: "" }, // color: "#fc3001"
                  { name: "Eleven", image: "" }, // color: "#333ffe"
                  { name: "Twelve", image: "" }, // color: "green"
                ],
                // backgroundColor: "#aba034",
                timingFunction: "ease-in-out",
                rotations: 3,
                disabled: false,
              }}
              arrowSpinnerBtn={{
                text: "spin",
                width: 60,
                height: 60,
                // backgroundColor: "#ace500",
                borderWidth: 4,
                borderColor: "rgba(0,0,0,0.75)",
                show: false,
              }}
              pin={{
                width: 20,
                height: 60,
                // backgroundColor: "black",
                borderWidth: 2,
                borderColor: "black",
                show: true,
              }}
              spinBtn={{
                text: "spin",
                alignButton: "middle",
                // backgroundColor: "#ace500",
                borderWidth: 2,
                // borderColor: "red",
                size: "lg",
                buttonTopOffset: "xs",
                rounded: "sm",
              }}
            />
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
