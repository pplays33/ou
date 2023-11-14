import styles from './CompilationOne.module.scss';
import nigth from './assets/nightstand.png';
import add from './assets/add.svg';
import { useState, useEffect } from 'react';

import Rating from './RatingCard';
import CheckBox from './CheckBox';


export const CompilationList = ({countItem}) =>{
    return(
        <>
            {
                [...Array(countItem)].map((item, index) => {
                    return (<li key={index} className={styles.item_card}>
                        <div className={styles.card}>
                            <img src={nigth} alt="img_card" />

                            <div className={styles.card_context}>
                                <Rating />
                                <p>Кровать «Триумф»</p>
                                <h3> 8000₽</h3>
                                <button type="button" className={styles.btn}>
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </li>);
                })
            }
        </>
    );
}

export const RowTable = ({count}) => {
    const [cheked, setChecked] = useState(false);
    const [chekedArr, setCheckedArr] = useState([]);
    const isChecked = {color: "#B0B0B0"};
    return(
        <>
            {
                [...arr].map((item, index) => {
                    return (
                        <div key={index} className={styles.item_RowTable} style={chekedArr[index] ? {} : isChecked }>
                            <div className={styles.colum_one} >
                                <p> {item} </p>
                            </div>
                            <div className={styles.colum_two}>
                                <p> 8 000 ₽  </p>
                            </div>
                            <div className={styles.colum_three}>
                                <CheckBox setChecked={(onCheck) => {
                                    setChecked(onCheck);
                                    const new_chekedArr = [...chekedArr];
                                    new_chekedArr[index] = onCheck;
                                    setCheckedArr(new_chekedArr);
                                    // console.log(...new_chekedArr);
                                }}/>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}




export default function CompilationOne(){
    const [count, setCount] = useState(5);

    const resizeHandler = () => {
        if (window.innerWidth <= 1300) {
            setCount(1);  
        } else{
            setCount(3);
        }
        
    };
    
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
      }, []);



    return(
        <>
            <div className={styles.CompilationOne}>
                <div className={styles.container}>
                    <div className={styles.CompilationOne_titel}>
                        <h2> Подборка один </h2>
                    </div>
                    <div className={styles.CompilationOne_row}>
                        <div className={styles.colum_one}>
                            <RowTable count={7} />
                            <div className={styles.final_price}>
                                <div className={styles.line}>

                                </div>
                                <div className={styles.item_RowTable}>
                                    <div className={styles.colum_one} >
                                        <p> Итого </p>
                                    </div>
                                    <div className={styles.colum_two}>
                                        <p> 2 000 ₽  </p>
                                    </div>
                                </div> 
                                <button className={styles.btn_add}>
                                    Добавить товары в корзину
                                </button>  
                            </div>
                        </div>
                        <div className={styles.colum_two}>
                            <div className={styles.compilationList}>
                                <ul className={styles.list}>
                                    <CompilationList countItem={count}/>
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
                </div>
            </div>
        </>
    );
}


const arr = [
    "Матрас средний",
    "Тумба прикроватная",
    "Шкаф 4-дверный",
    "Комод",
    "Зеркало",
    "Пуф",
];