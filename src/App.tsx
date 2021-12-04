import React from 'react';
import "./App.css";
import Routes from "./Routes/Routes";
import { ContactContextProvider } from "./Context/ContactContext";
import { AuthContextProvider } from "./Context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <ContactContextProvider>
        <Routes />
      </ContactContextProvider>
    </AuthContextProvider>
  );
};

export default App;
