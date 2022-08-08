import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from "./styles/App.module.scss";

const App = () => {
  return (
    <div>
      <Header />

      <section className={styles.container}>
        <Tasks />
      </section>
    </div>
  );
};

export default App;
