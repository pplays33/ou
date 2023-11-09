import styles from './Home.module.scss';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import SubHeader from '../../components/SubHeader/SubHeader';
import PhotoAndVideo from '../../components/Card/PhotoAndVideo';
import CompilationOne from '../../components/CompilationOne/CompilationOne';
import Footer from '../../components/Footer/Footer';

export default function Home(){
    return(
        <>
            <div className={styles.container}>
                <Header />
                <SubHeader />
                <Hero />
                <PhotoAndVideo />
                <CompilationOne />
                <div className={styles.container_content}>
                    
                    
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
}