import styles from './CompilationOne.module.scss';

export default function CompilationOne(){
    return(
        <>
            <div className={styles.CompilationOne}>
                <div className={styles.container}>
                    <div className={styles.CompilationOne_titel}>
                        <h2> Подборка один </h2>
                    </div>
                    <div className={styles.CompilationOne_row}>
                        <div className={styles.colum_one}>
                            <div className={styles.item_RowTable}>
                                <div className={styles.colum_one}>
                                    <p> Кровать «Триумф» 160 </p>
                                </div>
                                <div className={styles.colum_two}>
                                    <p> 8 000 ₽  </p>
                                </div>
                                <div className={styles.colum_three}>
                                    <p> check </p>
                                </div>
                            </div>
                            <div className={styles.item_RowTable}>
                                <div className={styles.colum_one}>
                                    <p> Кровать «Триумф» 160 </p>
                                </div>
                                <div className={styles.colum_two}>
                                    <p> 8 000 ₽  </p>
                                </div>
                                <div className={styles.colum_three}>
                                    <p> check </p>
                                </div>
                            </div>
                            <div className={styles.item_RowTable}>
                                <div className={styles.colum_one}>
                                    <p> Кровать «Триумф» 160 </p>
                                </div>
                                <div className={styles.colum_two}>
                                    <p> 8 000 ₽  </p>
                                </div>
                                <div className={styles.colum_three}>
                                    <p> check </p>
                                </div>
                            </div>
                            <div className={styles.item_RowTable}>
                                <div className={styles.colum_one}>
                                    <p> Кровать «Триумф» 160 </p>
                                </div>
                                <div className={styles.colum_two}>
                                    <p> 8 000 ₽  </p>
                                </div>
                                <div className={styles.colum_three}>
                                    <p> check </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.colum_two}>
                            <h2> Подборка один </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}