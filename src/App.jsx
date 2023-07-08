import Card from "./component/card/Card";
import FormContainer from "./component/form/FormContainer";

function App() {
  return (
    <div className="App container-fluid p-0">
      
      <div className="wrapper container-fluid">
        <div className="wrappee row">
          
          <Card />
          <FormContainer />

        </div>
      </div>

    </div>
  );
}

export default App;
