import Link from "next/link"
import classes from "./page.module.css"
import MealsGride from "@/components/meals/meals-gride"
import getMeals from "@/lib/meals"
import { Suspense } from "react";
async function  Meals(){
    const meals=await getMeals();
return  <MealsGride Meals ={meals}/>

}
    

export default  function MealsPage()
{
    return(
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals ,created {" "}
                <span className={classes.highlight}>by you</span>

            </h1>
            <p>
                choose you favorite recipe and cook it yourSeilf ,it is easy and fun

            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                share your favorite
                </Link>
            </p>
            
        </header>
        <main className={classes.main}>
            <Suspense fallback={ <p className={classes.loading}>Fetching Meals...........</p>
}>
            <Meals/>
            </Suspense>
        </main>
        </>
    )
}