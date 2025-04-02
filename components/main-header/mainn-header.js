import Link from "next/link";
import logo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackgroud from "./main-header-bacgroud";
import Nav_Link from "./nav-link";
export default function MainHeader(){
    return(
    <>
    <MainHeaderBackgroud/>
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
        <Image src={logo} alt="food logo" priority/>
         Food Order App
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    {/* <Link href="/meals" className={path.startsWith("/meals")? classes.active :undefined}>Browse Meals</Link> */}
                    <Nav_Link href="/meals">Browse Meals</Nav_Link>

                </li>
                <li>
                    {/* <Link href="/community" className={path.startsWith("/community")? classes.active : undefined}>foodies Community</Link> */}
                    <Nav_Link href="/community">foodies Community</Nav_Link>

                    
                </li>
            </ul>
        </nav>
    </header>
    </>)
}