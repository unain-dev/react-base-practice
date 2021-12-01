import { BrowserRouter, Switch, Route } from "react-router-dom"; // react-router가 아님 주의!
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* 파라미터로 coinId라는 변수를 보낼 수 있게 됨. */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
