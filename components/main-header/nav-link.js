
"use client"

const { usePathname } = require("next/navigation")
import Link from "next/link";
import styles from "./nav-link.module.css"

const Navlink = ({children,href}) =>{
    

  const path = usePathname();
    return(
        <>
           <Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : undefined}>{children}</Link>
        </>
    )
}
export default Navlink;