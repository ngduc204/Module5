import Welcome from './components/Welcome';
import AddComponent from "./components/AddComponent.jsx";


function App() {
    return (
        <div className="App">
            <Welcome name="Admin" />
            <AddComponent firstNumber={1} secondNumber={2} />
        </div>

    );
}
export default App;