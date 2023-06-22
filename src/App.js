import "./App.css";
import FirstLoginForm from "./Pages/FirstLoginForm";
import SecondLoginForm from "./Pages/SecondLoginForm";
import ThirdLoginForm from "./Pages/ThirdLoginForm";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="login-form-position">
      {/* <FirstLoginForm />
      <SecondLoginForm />
      <ThirdLoginForm /> */}
      <BrowserRouter>
        <nav>
          <Link to="/">FirstPAGE</Link>
          <Link to="/secondPage">SecondPAGE</Link>
          <Link to="/lastPage">ThirdPAGE</Link>
        </nav>
        <Routes>
          <Route>
            <Route exact path="/" element={<FirstLoginForm />} />
            <Route path="/secondPage" element={<SecondLoginForm />} />
            <Route path="/lastPage" element={<ThirdLoginForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
