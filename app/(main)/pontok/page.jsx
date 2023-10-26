import Breadcrumbs from "../../../components/custom/breadcrumbs";
import ParsedHtml from "../../../components/custom/parsed-html";

export default async function CategoryHomePage() {

    return (<>
        <Breadcrumbs link="/pontok/" category="Pontok" />
        <h1>Pontok</h1>
        <br />
        <div class="feature" style={{marginTop: '2em'}}>
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
                            <br /><span>2p (+1p neki a Szavazz-ér) - Ismételhető</span>
                        </th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Sulitúra
                            <br /><span>5p</span>
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
                        <th colspan="3">Szavazó állomások</th>
                    </tr>
                    <tr>
                        <th>Látogass meg (X) szavazó állomást és szelfizz ott!</th>
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
                        <th colspan="3">Goofy</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}