import { getHirPost } from "../../../lib/api";
import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {
    const content = await getHirPost("sutitajekoztato");

    const published = new Intl.DateTimeFormat('hu-HU', { dateStyle: 'medium', timeStyle: 'short' }).format( new Date(content.modified) );
    

    //const published = new Date(content.date);

    return (<>
        <h1>{content.title}</h1>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
        <p className="updated-date">Frissítve: {published.replace(' ', '')}</p>
    </>)
}