import React from "react";
import { Layout } from "./components";
import { useRoutesConfig } from "./config/routes/useRoutesConfig";
import "./app.css";

function App() {
  const routes = useRoutesConfig();
  return (
    <Layout>
      <div className="App" style={{ height: "100%" }}>
        {routes}
      </div>
    </Layout>
  );
}

export default App;
