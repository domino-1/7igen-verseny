import Breadcrumbs from "../../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/csapatok/" category="Csapatok" />
        <h1>Fecske csapat</h1>
        <br />
        <div class="feature" style={{marginTop: '2em'}}>
        <Link href="https://forms.gle/U3FZL9wtBc9oe8My8" target="_blank"><div className="challengeItem">
            <div><h2>Jelentkezz a Fecske csapatba!</h2></div>
            </div></Link>
        </div>
    </>)
}