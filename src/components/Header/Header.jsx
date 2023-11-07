// import { motion } from "framer-motion"
// import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import location_on from './assets/location_on.svg';

// import SubHeader from '../SubHeader/SubHeader';


export default function Header(){
    return(
        <>
            <div className={styles.Header}>
                <div className={styles.container}>
                    <nav className={styles.Header__nav}>
                        <div className={styles.item_location}>
                            <div className={styles.item_location__icon}>
                                <img src={location_on} alt="location-icon"/>
                            </div>
                            <div className={styles.item_location__text}>
                                <p>Нижний Новгород</p>
                            </div>
                        </div>
                        <div className={styles.item_menu}>
                            <ul className={styles.item_menu__list}>
                                <li><a href="#">Как заказать</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Кредит и рассрочка</a></li>
                                <li><a href="#">Сборка</a></li>
                                <li><a href="#">Частые вопросы</a></li>
                            </ul>
                        </div>
                        <div className={styles.item_contact}>
                            <a href="tel:+111">(617) 730-2385</a>
                        </div>
                    </nav>

                </div>
                    <div className={styles.Header__line}>

                    </div>
            </div>
        </>
    );
}