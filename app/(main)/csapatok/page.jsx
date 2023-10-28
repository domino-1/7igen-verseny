import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";
import Link from "next/link";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/csapatok/" category="Csapatok" />
        <h1>Csapatok</h1>
        <br />
        <div class="feature" style={{marginTop: '2em'}}>
        <Link href="https://forms.gle/EcMJa9pGb5TVQkjs8" target="_blank"><div className="challengeItem">
            <div><h2>Jelentkezz a Gólya csapatba!</h2></div>
            </div></Link>
            <br /><br />
            <Link href="https://forms.gle/U3FZL9wtBc9oe8My8" target="_blank"><div className="challengeItem">
            <div><h2>Jelentkezz a Fecske csapatba!</h2></div>
            </div></Link>
        </div>
    </>)
}