
import { getMeal } from "@/lib/meals";
import Styles from "./page.module.css"
import Image from "next/image";
import { notFound } from "next/navigation";

const page = ({params}) =>{

    const meal = getMeal(params.id);
    if(!meal){
        notFound();
    }
    meal.instructions = meal?.instructions.replace(/\n/g,"<br/>")


    return(
        <>
       <header className={Styles.header}>
             <div className={Styles.image}>
                <Image src={meal.image} alt={meal.title}  fill/>
             </div>
             <div className={Styles.headerText}>
                <h1>{meal.title}
                    <p className={Styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>  {meal.creator} </a>
                    </p>
                    <p className={Styles.summary}>{meal.summary}</p>
                </h1>
             </div>
       </header>
       <main>
            <p className={Styles.instructions} dangerouslySetInnerHTML={{
                __html:meal.instructions,
            }}></p>
       </main>
        </>
    )

}
export default page;