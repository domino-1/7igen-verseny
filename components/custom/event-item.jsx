import styles from './event.module.css';
import Link from 'next/link';

export default function EventItem({target, city, date, title}) {
    
    if (target === undefined || target == "n/a") {
        return (
            <div className={styles.eventLink}>
                <div className={styles.eventItem}>
                    <div className={styles.city}>{city}</div>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        )
    }
    else {
        return(
            <Link href={target + ""} target={target.includes("facebook.com") ? "_blank" : "_self"} className={styles.eventLink}>
                <div className={styles.eventItem}>
                    <div className={styles.city}>{city}</div>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.title}>{title}</div>
                </div>
            </Link>
        );
    }
}