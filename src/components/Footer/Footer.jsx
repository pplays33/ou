import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <>
            <div className={styles.Footer}>
                <div className={styles.container}>
                    <div className={styles.Footer_row}>
                        <div className={styles.item_colum}>
                            <a href="#"> О нас </a>
                            <a href="#"> Как сделать заказ </a>
                            <a href="#"> Доставка </a>
                            <a href="#"> Гарантия </a>
                            <a href="#"> Сборка </a>
                        </div>
                        <div className={styles.item_colum}>
                            <a href="#"> Адреса магазинов  </a>
                            <a href="#"> Вакансии </a>
                            <a href="#"> Блог </a>
                            <a href="#"> Отзывы </a>
                        </div>
                        <div className={styles.item_columTwo}>
                            <div className={styles.context}>
                                <a href="#"> Инстаграм </a>
                                <a href="#"> Фейсбук </a>
                                <a href="#"> Вконтакте </a>
                                <a href="#"> Отзывы </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}