import styles from './event.module.css';
import Link from 'next/link';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
faConfig.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
                    { target.includes("https://") ? <FontAwesomeIcon className={styles.iconExternalLink} size="xs" icon={faArrowUpRightFromSquare} /> : <></>}
                </div>
            </Link>
        );
    }
}