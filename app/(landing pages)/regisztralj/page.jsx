import RegisterForm from "../../../components/custom/register-form";
import Breadcrumbs from "../../../components/custom/breadcrumbs";

export default function Home() {
    return (<>
      <div className="full landing-content">
        <img src="https://ahang.hu/wp-content/uploads/2023/09/slice2.jpg"></img>
        
        <div>
          <Breadcrumbs link="aktivistaknak" category="Aktivistáknak"/>
          <h1>Regisztrálj a szavazásra!</h1>
          <p>Ha nem akarsz lemaradni a népszavazással kapcsolatos információkról és hírekről, regisztrálj a szavazásra! Értesülj minél hamarabb az időpontokról, a szavazás helyszíneiről és a legfrissebb történésekről! </p>
          {/*<RegisterForm />*/}
        </div>

        <img src="https://ahang.hu/wp-content/uploads/2023/09/slice2.jpg"></img>
      </div>
      <div className="full firstRow">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>);
  }