import Counter from "./hooks/Counter";

function App() {
  const { counterVal, increment } = Counter();
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={increment}>Increment</button>
      {counterVal}
    </div>
  );
}

export default App;
