import styles from './Hero.module.scss';


import { motion } from "framer-motion"

export default function Hero(){
    const h1Variant = {
        hidden: {y: -1000, opacity: 0,},
        visible: {y: 0, opacity: 1,}
    };



    return(
        <>
            <div className={styles.Hero}>
                <div className={styles.container}>
                    <div className={styles.Hero_titels}>
                        <div className={styles.item_Breadcrumbs}>
                            <p> Главная / Все коллекции / Альба / Спальня </p>
                        </div>
                        <div className={styles.item_titel}>
                            <h2>Спальня</h2>
                        </div>
                        <div className={styles.item_subTitel}>
                            <p> Спальня коллекции Альба </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}