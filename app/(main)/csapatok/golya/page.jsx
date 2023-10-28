import Breadcrumbs from "../../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/csapatok/" category="Csapatok" />
        <h1>Gólya csapat</h1>
        <br />
        <div class="feature" style={{marginTop: '2em'}}>
            <Link href="https://forms.gle/EcMJa9pGb5TVQkjs8" target="_blank"><div className="challengeItem">
            <div><h2>Jelentkezz a Gólya csapatba!</h2></div>
            </div></Link>
        </div>
    </>)
}