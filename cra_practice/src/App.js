import Button from "./button/Button";
import styles from "./App.module.css";
import IterationTest from "./iteration/IterationTest.js";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="save" />
      <IterationTest />
    </div>
  );
}

export default App;
