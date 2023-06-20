import "./App.css";
import FirstLoginForm from "./Pages/FirstLoginForm";
import SecondLoginForm from "./Pages/SecondLoginForm";
import ThirdLoginForm from "./Pages/ThirdLoginForm";

function App() {
  return (
    <div className="login-form-position">
      <FirstLoginForm />
      <SecondLoginForm />
      <ThirdLoginForm />
    </div>
  );
}

export default App;
