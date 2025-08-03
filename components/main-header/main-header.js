

"use client"
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import styles from "./main-header.module.css"
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navlink from "./nav-link";

const MainHeader = () =>{


    return(
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
              <Image src={logoImg} priority width={100} height={100} alt="A plate of food"/>
              NextLevel Food
            </Link>


            <nav className={styles.nav}>
                <ul>
                    <li>
                     <Navlink href="/meals">Browse Meals</Navlink>
                    </li>
                     <li>
                        <Navlink href="/community">Foodies Community</Navlink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;