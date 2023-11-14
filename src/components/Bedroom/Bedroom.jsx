import styles from './Bedroom.module.scss';
import nigth from '../CompilationOne/assets/nightstand.png';
import Rating from '../CompilationOne/RatingCard';

import { useEffect, useState } from 'react'; 


export default function Bedroom() {
    const [count, setCount] = useState(5);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const resizeHandler = () => {
        if (window.innerWidth <= 1200) {
            setCount(1);  
        } else{
            setCount(5);
        }
        setWindowWidth(window.innerWidth)
        console.log(window.innerWidth)
        
    };
    
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        // return () => {
        //   window.removeEventListener("resize", resizeHandler);
        // };
      }, []);


    return (
        <>
            <div className={styles.Bedroom}>
                <div className={styles.container}>
                    <div className={styles.compilationList}>
                        <h1 className={styles.titel}>
                            Для спальни
                        </h1>
                        <ul className={styles.list}>
                            {
                                [...Array(count)].map(()=>{
                                    return (
                                        <li className={styles.item_card}>
                                            <div className={styles.card}>
                                                <div className={styles.sales}>
                                                    <p>-10%</p>
                                                </div>
                                                <img src={nigth} alt="img_card" />

                                                <div className={styles.card_context}>
                                                    <Rating />
                                                    <p>Кровать «Триумф»</p>
                                                    <div className={styles.old_price}>
                                                        <p>18 000₽</p>
                                                        <div className={styles.line}></div>
                                                    </div>
                                                    <h3> 8000₽</h3>
                                                    <button type="button" className={styles.btn}>
                                                        В корзину
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <div className={styles.prev_btn}>
                            <p> ← </p>
                        </div>
                        <div className={styles.next_btn}>
                            <p> → </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}