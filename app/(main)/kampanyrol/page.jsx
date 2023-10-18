import { getHirPost } from "../../../lib/api";
import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    const content = await getHirPost("kampanyrol");

    const published = new Date(content.date);

    return (<>
        <Breadcrumbs link="/kampanyrol/" category="A Kampányról" />
        <h1>{content.title}</h1>
        <p>{published.toDateString().slice(4)}</p>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
    </>)
}