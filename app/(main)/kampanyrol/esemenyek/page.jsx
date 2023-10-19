import { getHirPost, getCatSlugs } from '../../../../lib/api';
import Link from 'next/link';
import ParsedHtml from '../../../../components/custom/parsed-html';
import Breadcrumbs from '../../../../components/custom/breadcrumbs';
//import ParsedHtml from '~/components/custom/parsed-html';
//import { sanitize, isSupported } from "isomorphic-dompurify";
//import parse from 'html-react-parser';
//import PostBody from '../../../../components/post-body'
import EventItem from '../../../../components/custom/event-item';
import { getEvents } from '../../../../lib/api';

export default async function Page({ params }) {

    const futureEvents = await getEvents(500);

    const content = await getHirPost("esemenyek");

    const published = new Intl.DateTimeFormat('hu-HU').format( new Date(content.modified) );

    return <>
        <Breadcrumbs link="/kampanyrol/" category="A Kampányról" />
        <h1>{content.title}</h1>
        <p className="updated-date">{published}</p>
        <br />
        <span>test</span>
        <ParsedHtml htmlString={content.content}></ParsedHtml>
        <br />
        <h2>Közelgő események</h2>
        <section className="events-list">
        { futureEvents.nodes.map( event => <EventItem key={event.slug}
                    target={event.eventLink} //ehelyett lehet egy helyi event implementacio is de nincs nagyon ido
                    city={event.eventPlace}
                    date={event.eventDate.substring(5).replace('-', '/')}
                    title={event.title} />) }
        </section>
    </>
}