import Button from "./1_propTypes_CSSModule/button/Button";
import styles from "./App.module.css";
import IterationTest from "./iteration/IterationTest.js";
import Counter from "./2_effect/counter/Counter.js";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      {/* <Button text="save" />
      <IterationTest /> */}
      <Counter/>
    </div>
  );
}

export default App;
