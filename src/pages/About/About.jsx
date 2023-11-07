import styles from './About.module.scss';
import { motion } from "framer-motion"



export default function About(){

    const Container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.4
            }
        }
    };
    const Item ={
        hidden: { y: -20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };



    return(
        <>
            <div className={styles.container}>
                <div className={styles.container_titel}>
                    <p>lorem</p>
                    <div className={styles.container_about}>
                        <h3>это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</h3>
                    </div>
                </div>
                <div className={styles.container_titel}>
                    <motion.ul 
                        className={styles.list_titel}
                        variants={Container}
                        initial="hidden"
                        animate="visible"
                    >
                        {[0, 1, 2, 3].map((index) => (
                            <motion.li key={index} className={styles.item}  variants={Item}
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                whileTap={{
                                    scale: 1,
                                    rotate: 0,
                                    borderRadius: "100%"
                                }}
                                
                            >
                                <p> item</p>
                            </motion.li>    
                             //variants={item}
                        ))}
                    </motion.ul>
                </div>
            </div>
        </>
    )
}