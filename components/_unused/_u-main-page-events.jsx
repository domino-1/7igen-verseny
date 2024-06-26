import styles from './event.module.css';
import EventItem from './event-item';
//import { getEvents } from '../../lib/_u-api';
import Link from 'next/link';

export default async function MainPageEvents() {
    //const events = await getEvents(15);
    let eventCounter = 5;

    return (
        <div className={styles.eventContainer}>
            <div>
                <h2 className={styles.header}>Közelgő kampány események</h2>
                <Link href="/kampanyrol/esemenyek"><button className={`${styles.hexButton} hex-button`} >További események</button></Link>
            </div>
            <div className={styles.eventsRow}>
                {events.nodes
                    .filter( event => Date.parse(event.eventDate) > Date.now() - 86400000)
                    .sort( (a, b) => Date.parse(a.eventDate) - Date.parse(b.eventDate) )
                    .map( (event, index) => {
                        while (index < 5) {
                            return <EventItem key={'event-' + event.title}
                                target={event.eventLink} //ehelyett lehet egy helyi event implementacio is de nincs nagyon ido
                                city={event.eventPlace}
                                date={event.eventDate.substring(5).replace('-', '/')}
                                title={event.title} />
                        }
                    })}
            </div>
            <Link className={styles.bottomHex} href="/kampanyrol/esemenyek"><button className={`${styles.hexButton} hex-button`} >További események</button></Link>
        </div>
    );
}