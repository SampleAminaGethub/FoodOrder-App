import Link from "next/link";
import classes from "./page.module.css"
import ImageSlideshow from "@/components/images/image-slides";
export default function Home() {
  return (
  <>
  <header className={classes.header}>
<div className={classes.slideshow}>
<ImageSlideshow/>
</div>
<div>
  <div className={classes.hero}>
   <h1>NextLevel Food For next Foodies</h1>
   <p> Test & Share Food</p>
  </div>

  <div className={classes.cta}>
   <Link href="./community">Join to the community</Link>
   <Link href="./Meals"> Explore Meals</Link>
  </div>
</div>
  </header>
  <main>
  <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
  </main>
  </>
  );
}
