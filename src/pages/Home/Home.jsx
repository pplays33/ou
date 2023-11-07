import styles from './Home.module.scss';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import SubHeader from '../../components/SubHeader/SubHeader';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

export default function Home(){
    return(
        <>
            <div className={styles.container}>
                <Header />
                <SubHeader />
                <Hero />
                <div className={styles.container_content}>
                    
                    {/* <Card />
                    <Footer /> */}
                </div>
            </div>
        </>
    );
}