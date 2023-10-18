import { getHirPost } from "../../../lib/api";
import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {
    const content = await getHirPost("nepszavazasrol");

    const published = new Date(content.date);

    return (<>
        <Breadcrumbs link="/nepszavatasrol/" category="A Népszavazásról" />
        <h1>{content.title}</h1>
        <p>{published.toDateString().slice(4)}</p>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
    </>)
}