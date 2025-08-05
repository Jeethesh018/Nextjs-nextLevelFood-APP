import Link from "next/link";
import Style from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading-out";

export const metadata = {
  title: 'All Meals',
  description: 'Delicious meals, shared by a food-loving community.',
};


async function Meals(){     
 const meals = await getMeals();

 return <MealsGrid meals={meals}/>
}

const page = () =>{

   

    return(
        <>
        <header className={Style.header}>
                <h1>
                    delicious meals,Created
                    <span className={Style.highlight}>by you</span>
                </h1>
                <p>chooe your favourite and cook it yourself .It is Easy and Fun</p>
                <p className={Style.cta}>
                <Link href="/meals/share"> share your Favourite Reciepe</Link>
                </p>
        </header>
        <main className={Style.main}>
            <Suspense fallback={ <p className={Style.loading}>Fetching meals...</p> }>
              <Meals/>
            </Suspense>
          
        </main>
        </>
    )

}
export default page;