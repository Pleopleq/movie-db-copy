import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import routes from "./config/routes";

const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className='main-container'>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
