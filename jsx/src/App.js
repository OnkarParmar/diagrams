function App() {
    const list = [1,2,3,4];
    const message = "Enter a number";
    const type = "number"
    const style = {color : 'red'}
    return (
        <div>
        <h3>Enter a number:</h3>
        <input 
            type = {type}
            list = {list}
            style = {style}
            alt = {message}
        />
      </div>
    );
  }

  export default App;