import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";
import Link from "next/link";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/challengek/" category="Challengek" />
        <h1 className="contentChallengek">Challengek</h1>
        <br />
        <section class="feature" style={{marginTop: '2em'}}>
        <h2>Szavazás</h2>
            <Link href="https://forms.gle/TvwhqueZ8XYzfJdb8" className="challengeItem">
            <div><b>Szavazz!</b> - 1p</div>
            <ul>
                <li>Élőben: Szelfi szavazás után</li>
                <li>Online: Oszd meg, hogy szavaztál! A megosztott posztról csinálj egy screenshotot és küld be, vagy küld be a poszt linkjét</li>
                <li>FONTOS: Tilos lefotózni a szavazólapot, vagy más szavazókat</li>
            </ul>
            </Link>
            <br />

            <Link href="https://forms.gle/crR4HAEU4RCVvUAU8" className="challengeItem">
            <div><b>Hozz még egy szavazót!</b> - 2p (1p neki a "Szavazz!"-ért!) - Ismételhető</div>
            <ul>
                <li>Élőben: Szelfizzetek együtt szavazás után!</li>
                <li>Online: Osszátok meg mindketten, hogy szavaztatok! A megosztott posztrokról csináljatok egy screenshotot és küld be, vagy küld be a posztok linkjét</li>
                <li>FONTOS: Tilos lefotózni a szavazólapot, vagy más szavazókat akik nem ti vagytok</li>
            </ul>
            </Link>
            <br />

            <Link href="https://forms.gle/wRHPVMmuiRc11Jkr8" className="challengeItem">
            <div><b>Első szavazó</b> - 3p</div>
            <ul>
                <li>Élőben: Fotózkodj az Első Szavazó matricáddal</li>
            </ul>
            </Link>
            <br />

            <Link href="https://forms.gle/atW752rQf7h8wMG89" className="challengeItem">
            <div><b>Sulitúra</b> - 7p</div>
            <ul>
                <li>Érjetek el minél több iskolát! A csapatodnak annyiszor 7 pont jár, ahány különböző iskolából vannak tagjai.</li>
                <li>Online és Élőben: Ugyan az a rendszer mint a "Hozz még egy szavazót!"nál</li>
            </ul>
            </Link>
            <br />
        </section>

        <section class="feature" style={{marginTop: '2em'}}>
        <h2>Toborzós</h2>
            <Link href="https://forms.gle/LmrxTpWAwAGgdXSz7" className="challengeItem">
            <div><b>Toborozz valakit a csapatodba!</b> - 1p - Ismételhető</div>
            <ul>
                <li>Győzz meg valakit, hogy lépjen be a csapatodba!</li>
            </ul>
            </Link>
            <br />
        </section>

        <section class="feature" style={{marginTop: '2em'}}>
        <h2>Szavazó állomások</h2>
            <span>Ezek a feladatok várhatóan 10.28 délután nyílnak meg</span>

            <div className="challengeItem">
            <div><b>Látogass meg 3 szavazó állomást és szelfizz ott!</b> - 5p</div>
            <ul>
                <li>FONTOS: Figyelj oda, hogy ne legyenek felismerhetőek az emberek a képen! Tilos lefotózni a szavazólapot és más szavazókat</li>
                <li>Ha megkérnek, hogy ne fotózzd le őket, akkor ne fotózzd le őket!</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>CSAPATOS: Gyűjtsetek össze egy-egy képet Budapest minden szavazó állomásáról </b> - 20p</div>
            <ul>
                <li>Dolgozzatok össze csapattársaiddal!</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>CSAPATOS: Gyűjtsetek össze egy-egy képet Pest megye minden szavazó állomásáról </b> - 20p</div>
            <ul>
                <li>Dolgozzatok össze csapattársaiddal!</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>CSAPATOS: Gyűjtsetek össze egy-egy képet legalább 3 megye szavazó állomásairól </b> - 20p - Ismételhető</div>
            <ul>
                <li>Dolgozzatok össze csapattársaiddal!</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>CSAPATOS: Gyűjtsetek össze minden megyéből egy képet egy szavzó állomásról </b> - 100p</div>
            <ul>
                <li>Dolgozzatok össze csapattársaiddal!</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>CSAPATOS: Gyűjtsetek össze egy-egy képet legalább 60 szavazó állomásról! </b> - 200p</div>
            <ul>
                <li>Dolgozzatok össze csapattársaiddal!</li>
            </ul>
            </div>
            <br />
        </section>

        <section class="feature" style={{marginTop: '2em'}}>
        <h2>Kvíz</h2>
        <div>Itt válaszolni kell a kérdésekre pontért</div>
            <Link href="https://forms.gle/XumvS8LkskskDJNP9" className="challengeItem">
            <div><b>Melyik a két legtávolabbi szavazó állomás?</b> - 2p</div>
            </Link>
            <br />

            <Link href="https://forms.gle/F5RB5zyhGdxfNj5p7" className="challengeItem">
            <div><b>Melyik a legnépszerűbb vidéki szavazó állomás?</b> - 2p</div>
            </Link>
            <br />

            <Link href="https://forms.gle/aXzt2hWq2qx1s6T18" className="challengeItem">
            <div><b>Melyik a legnépszerűbb budapesti szavazó állomás?</b> - 2p</div>
            </Link>
            <br />
        </section>

        <section class="feature" style={{marginTop: '2em'}}>
        <h2>Vicces</h2>
            <span>Ezek a feladatok várhatóan 10.28 délután nyílnak meg</span>

            <div className="challengeItem">
            <div><b>Budapest Bingó (normál)</b> - 7p - Ismételhető</div>
            <ul>
                <li>Látogassatok meg egy szavazó állomást és szelfizzetek ott!</li>
                <li>Annyiszor 5p ahány bingója lett a csapatodnak</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>Budapest Bingó (nehéz)</b> - 15p - Ismételhető</div>
            <ul>
                <li>Látogassatok meg egy szavazó állomást és szavazzon ott valaki!</li>
                <li>Annyiszor 15p ahány bingója lett a csapatodnak</li>
            </ul>
            </div>
            <br />

            <div className="challengeItem">
            <div><b>Érvelős</b></div>
            <ul>
                <li>Gyűjts érveket, hogy miért megy el valaki szavazni -1p/érv</li>
                <li>Gyűjts érveket, hogy miért NEM megy el valaki szavazni -1p/érv</li>
            </ul>
            </div>
            <br />
        </section>
    </>)
}