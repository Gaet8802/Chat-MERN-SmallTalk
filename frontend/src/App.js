import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { ChatContext } from "./Context/ChatProvider";

function App() {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"));

      setUser(userInfo);

      if (!userInfo) {
        history.push("/");
      }
    };

    fetchUserData();
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
