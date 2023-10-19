import styles from './event.module.css';
import EventItem from './event-item';
import { getEvents } from '../../lib/api';
import Link from 'next/link';

export default async function MainPageEvents() {
    const events = await getEvents(5);

    return (
        <div className={styles.eventContainer}>
            <div>
                <h2 className={styles.header}>Közelgő kampány események</h2>
                <Link href="/kampanyrol/esemenyek"><button className={`${styles.hexButton} hex-button`} >További események</button></Link>
            </div>
            <div className={styles.eventsRow}>
                {events.nodes.map( event => <EventItem 
                    target={event.eventLink} //ehelyett lehet egy helyi event implementacio is de nincs nagyon ido
                    city={event.eventPlace}
                    date={event.eventDate.substring(5).replace('-', '/')}
                    title={event.title} />)}
            </div>
            <Link className={styles.bottomHex} href="/kampanyrol/esemenyek"><button className={`${styles.hexButton} hex-button`} >További események</button></Link>
        </div>
    );
}