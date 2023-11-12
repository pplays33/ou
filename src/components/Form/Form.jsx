
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function Form(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("form")
    }

    return(
        <>
            <div className={styles.Form}>
                <div className={styles.container}>
                    <h2 className={styles.Form_titel}>
                        Сайт рыбатекст поможет дизайнеру, верстальщику
                    </h2>
                    <p className={styles.Form_subtitel}>
                        Сайт рыбатекст поможет дизайнеру, верстальщику
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles['login']}>
                        <input {...register('Name', { required: true })} placeholder='Ваше имя' className={styles['Name']} />
                        {errors.password && <p>Last name is required.</p>}
                    
                        <input {...register('phone', { pattern: /\d+/ })} type='password' placeholder='Ваш телефон' className={styles['phone']} />
                        {errors.password && <p>Last name is required.</p>}
                        <input {...register('email', { required: true })} type='email' placeholder='Ваш email' className={styles['email']} />
                        {errors.password && <p>Last name is required.</p>}
                        <input type="submit" className={styles['btn']} />
                    </form> 
                </div>
            </div>
        </>
    );
}