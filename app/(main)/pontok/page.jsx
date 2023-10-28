import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/pontok/" category="Pontok" />
        <h1>Pontok</h1>
        <br />
        <div class="feature" style={{margin: '2em 0'}}>
            <table id="ponttabla">
                <thead>
                    <tr>
                        <th colspan="3">Pontozó tábla</th>
                    </tr>
                    <tr>
                        <th>Challengek</th>
                        <th>Gólya csapat</th>
                        <th>Fecske csapat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="3">Szavazás</th>
                    </tr>
                    <tr>
                        <th>Szavazz!</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Hozz még egy szavazót!
                        </th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Sulitúra
                        </th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Első szavazó</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="3">Toborzós</th>
                    </tr>
                    <tr>
                        <td>Toborozz valakit a csapatodba!</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Passzív challengek (összesítés)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="3">Szavazó állomások</th>
                    </tr>
                    <tr>
                        <th>Látogass meg 3 szavazó állomást és szelfizz ott!</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>CSAPATOS: Gyűjtsetek össze egy-egy képet Budapest minden szavazó állomásáról</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>CSAPATOS: Gyűjtsetek össze egy-egy képet Pest megye minden szavazó állomásáról</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>CSAPATOS: Gyűjtsetek össze egy-egy legaláb 3 különböző megye szavazó állomásáról</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>CSAPATOS: Gyűjtsetek össze minden megyéből egy képet egy szavzóállomásról</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>CSAPATOS: Gyűjtsetek össze egy-egy képet legalább 60 szavazó állomásról!</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="3">Vicces</th>
                    </tr>
                    <tr>
                        <td>Budapest Bingó (normál)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Budapest Bingó (nehéz)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Érvelős</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="3">Kvíz</th>
                    </tr>
                    <tr>
                        <td>Kvízkérdések</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colspan="3">Összesítés</th>
                    </tr>
                    <tr>
                        <td>Összes</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}