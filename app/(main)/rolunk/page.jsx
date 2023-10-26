//import { getHirPost } from "../../../lib/api";
import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";
import Link from "next/link";

export default async function CategoryHomePage() {
    //const content = await getHirPost("rolunk");

    //const published = new Intl.DateTimeFormat('hu-HU').format( new Date(content.modified) );

    return (<>
        <h1>Rólunk</h1>
        <br />
        <section>
            <span>A versenyt az Egységes Diákfront szervezi a <Link href="https://7igen.hu">7IGEN-es alternatív népszavazás</Link> alkalmából, de bárki csatlakozhat, nem kell hozzá EDF tagnak
              lenned! A verseny végén a győztes csapat ki lesz hirdetve, de díjazni sajnos nem tudunk.</span>
        </section>
    </>)
}