import { getHirPost } from "../../../lib/api";
import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {
    const content = await getHirPost("sutitajekoztato");

    const published = new Intl.DateTimeFormat('hu-HU').format( new Date(content.modified) );

    //const published = new Date(content.date);

    return (<>
        <h1>{content.title}</h1>
        <p>{published}</p>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
    </>)
}