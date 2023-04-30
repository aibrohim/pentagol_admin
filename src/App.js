import { getUser } from "app/slices/user/services/user";
import { Layout } from "components";
import { useRoutesConfig } from "config/routes/useRoutesConfig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import { Spin } from "antd";
import { Login } from "modules/login";

function App() {
  const routes = useRoutesConfig();

  const { user, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
    }
  }, []);

  if (loading) return <Spin size="large" />;
  if (!user) return <Login />;

  return (
    <Layout>
      <div className="App" style={{ height: "100%" }}>
        {routes}
      </div>
    </Layout>
  );
}

export default App;
