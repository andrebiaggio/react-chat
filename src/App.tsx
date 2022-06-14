import "./App.css";
import messagesService from "./services/messages";
import authenticationService from "./services/authentication";
import Login from "./pages/Login";
import { useRoutes } from "react-router-dom";

function App() {
  const getMessages = async () => {
    const messages = await messagesService.getMessages();
    console.log(messages);
  };

  const mainRoutes = {
    path: "/",
    element: <Login />,
    // children: [
    //   {path: '*', element: <Navigate to='/404' />},
    //   {path: '/', element: <MainView />},
    //   {path: '404', element: <PageNotFoundView />},
    //   {path: 'account', element: <Navigate to='/account/list' />},
    // ],
  };

  const routing = useRoutes([mainRoutes]);

  getMessages();
  return (
    <>
      <div className="app-container">{routing}</div>
    </>
  );
}

export default App;
