import logoImg from "../../assets/logo.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="Logo da aplicação" />
    </header>
  );
};
