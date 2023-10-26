import Breadcrumbs from "../../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/csapatok/" category="Csapatok" />
        <h1>Gólya csapat</h1>
        <br />
        <div class="feature" style={{marginTop: '2em'}}>
            Lorem ipsum
        </div>
    </>)
}