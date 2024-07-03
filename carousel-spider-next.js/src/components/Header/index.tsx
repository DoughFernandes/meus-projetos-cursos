import styles from "./header.module.scss";

import Image from 'next/image';

import icon from "../../../public/icons/menu.svg";
import logo from "../../../public/spider-logo.svg";
import user from "../../../public/icons/user.svg";

const Header = ()=>{
  return (
    <header className={styles.header}>
      <figure className={styles.figure}>
        <Image 
          src={icon}
          alt="Opção de menu"
          width={36}
          height={25}
        />
         <Image 
          src={logo}
          alt="Logo header Spider-Man"
          width={150}
          height={25}
        />
         <Image 
          src={user}
          alt="Login"
          width={36}
          height={25}
        />
      </figure>
    </header>
  )
};

export default Header;