import styles from './SubHeader.module.scss';
import Cart from './assets/cart.svg';
import favorite from './assets/favorite.svg';
import location_on from './assets/location_on.svg';
import person from './assets/person.svg';
import menu from './assets/menu.svg';
import searchLine from './assets/searchLine.svg';



export default function SubHeader(){
    return(
        <>
            <div className={styles.SubHeader}>
                <div className={styles.container}>
                    <div className={styles.SubHeader__row}>
                        
                        <div className={styles.item_logo}>
                            <h4 className={styles.item_logo__titel}>
                                Test
                            </h4>
                            <p className={styles.item_logo__subTitel}>
                                Сеть мебельных магазинов
                            </p>
                        </div>

                        <div className={styles.item_search}>
                            <div className={styles.item_search__catalog}>
                                <img src={menu} alt="icon_catalog" />
                                <p className={styles.item_search__text}>Каталог</p>
                            </div>
                            <div className={styles.item_search__field}>
                                <input type="text"  className={styles.item_search__input} placeholder='Например, двухъярусная кровать'/>
                                <button type='submit' className={styles.item_search__btn}>
                                    <img src={searchLine} alt="icon_catalog" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.item_like}>
                            <img src={favorite} alt="icon_catalog" className={styles.item_like__icon} />
                        </div>

                        <div className={styles.item_addres}>
                            <p className={styles.item_addres__text}>Адрес</p>
                            <img src={location_on} alt="icon_catalog" className={styles.item_addres__icon} />
                        </div>

                        <div className={styles.item_profil}>
                            <p className={styles.item_profil__text}>профиль</p>
                            <img src={person} alt="icon_catalog" className={styles.item_profil__icon} />
                        </div>

                        <div className={styles.item_shop}>
                            <img src={Cart} alt="icon_catalog" className={styles.item_shop__icon} />
                            <div className={styles.item_shop__count}><p>1</p></div>     
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}