'use client'
import ParsedHtml from './parsed-html'; 

export default function RegisterForm() {
    /*async function create(formData) {
        'use server'

    }*/
    
    // return (
    //     <ParsedHtml htmlString={`<form method="POST" target="https://ahang.hu/modbot/widget">
    //         <label>
    //             <strong>Vezetéknév: (kötelező)</strong>
    //             <input type="text" name="last_name" required="required" />
    //         </label> 
    //         <br />
    //         <label>
    //             <strong>Utónév:(kötelező)</strong>
    //             <input type="text" name="first_name" required="required" />
    //         </label> 
    //         <br />
    //         <label>
    //             <strong>E-mail: (kötelező)</strong>
    //             <input type="email" name="fields.email" required="required" />
    //         </label> 
    //         <br />
    //         <label>
    //             <strong>Irányítószám: (kötelező)</strong>
    //             <input type="number" name="fields.postcode" min="1000" max="9999" required="required" />
    //         </label> 

    //         <p /*style="margin-bottom: 0px; margin-top: 20px; font-weight: 700;"*/>Szeretnék értesítést kapni erről a kampányról és az aHang egyéb ügyeiről!</p> 
    //         <label /*style="font-size: 16px; line-height: 1.2; margin-bottom: 30px; color: rgb(153, 153, 153);"*/>
    //             <input type="checkbox" name="subscribe" /*style="width: unset; display: inline; margin-right: 5px;" *//>
    //             Igen, szeretnék tájékoztatást kapni (csak így tudunk elérni az üggyel kapcsolatban)!
    //         </label> 
    //         <br />
    //         <input type="submit" name="submit" value="Előregisztrálok!" /> 
    //         <p class="form-nyil">Személyes adataidat biztonságosan kezeljük és nem adjuk át harmadik félnek. A gomb megnyomásával felhatalmazod az aHangot, hogy az általad megadott személyes adatokat kezelje. További információ: <a href="https://ahang.hu/adatvedelem" target="_blank" /*style="color: rgb(255, 36, 0);"*/>Adatvédelmi Nyilatkozat</a>.</p>
    //     </form>`} />
    // )
    return (
        <iframe style={{width: 100 + "%", height: 601 + "px", overflow: "hidden"}} id="iFrame1" src="https://ahang.hu/modbot/widget/7igen-nepszavazas?utm_medium=iframe" frameborder="0" scrolling="no"></iframe>
        // <form method="POST" target="https://ahang.hu/modbot/widget">
        //     <input type="hidden" name="campaign" value="7igen-nepszavazas-erdeklodo"></input>
        //     <label>
        //         <strong>Vezetéknév: (kötelező)</strong><br />
        //         <input type="text" name="last_name" required="required" />
        //     </label> 
        //     <br />
        //     <label>
        //         <strong>Utónév:(kötelező)</strong><br />
        //         <input type="text" name="first_name" required="required" />
        //     </label> 
        //     <br />
        //     <label>
        //         <strong>E-mail: (kötelező)</strong><br />
        //         <input type="email" name="fields.email" required="required" />
        //     </label> 
        //     <br />
        //     <label>
        //         <strong>Irányítószám: (kötelező)</strong><br />
        //         <input type="number" name="fields.postcode" min="1000" max="9999" required="required" />
        //     </label> 

        //     <p /*style="margin-bottom: 0px; margin-top: 20px; font-weight: 700;"*/>Szeretnék értesítést kapni erről a kampányról és az aHang egyéb ügyeiről!</p> 
        //     <label /*style="font-size: 16px; line-height: 1.2; margin-bottom: 30px; color: rgb(153, 153, 153);"*/>
        //         <input type="checkbox" name="subscribe" /*style="width: unset; display: inline; margin-right: 5px;" *//>
        //         Igen, szeretnék tájékoztatást kapni (csak így tudunk elérni az üggyel kapcsolatban)!
        //     </label> 
        //     <br />
        //     <input type="submit" name="submit" value="Előregisztrálok!" /> 
        //     <p className="form-nyil">Személyes adataidat biztonságosan kezeljük és nem adjuk át harmadik félnek. A gomb megnyomásával felhatalmazod az aHangot, hogy az általad megadott személyes adatokat kezelje. További információ: <a href="https://ahang.hu/adatvedelem" target="_blank" /*style="color: rgb(255, 36, 0);"*/>Adatvédelmi Nyilatkozat</a>.</p>
        // </form>
    )
}