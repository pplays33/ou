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
                            <h4>Политика конфиденциальности</h4>
                            <p>2020, МебельХолл. Все права защищены</p>
                        </div>
                        <div className={styles.item_colum}>
                            <a href="#"> Адреса магазинов  </a>
                            <a href="#"> Вакансии </a>
                            <a href="#"> Блог </a>
                            <a href="#"> Отзывы </a>
                        </div>
                        <div className={styles.item_columTwo}>
                            <div className={styles.context}>
                                <p> Инстаграм </p>
                                <p> Фейсбук </p>
                                <p> Вконтакте </p>
                                {/* <p href="#"> Отзывы </p> */}
                                <a href="#">+7 (347) 292-62-52</a>
                                <a href="#">info@mebelhol.ru </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}