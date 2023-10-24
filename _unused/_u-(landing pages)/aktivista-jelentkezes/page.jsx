import ActivistForm from "../../../components/custom/activist-form";
import Breadcrumbs from "../../../components/custom/breadcrumbs";

export default function Home() {
    return (<>
      <div className="full-bg"><img src="https://ahang.hu/wp-content/uploads/2023/09/slice2.jpg"></img></div>
      <div className="feature aktivista"> 
        
        <div>
          <Breadcrumbs link="aktivistaknak" category="Aktivistáknak"/>
          <h1>Jelentkezz aktvistának!</h1>
          <p>Megszervezzük Magyarország első alternatív népszavazását! Ehhez 1500 embert keresünk az ország minden pontjáról, akikkel közösen sikerre tudjuk vinni a 7IGEN-es országos oktatási népszavazást! Jelentkezz aktivistának, és tegyünk együtt a jövőnkért! </p>
          <ActivistForm />
        </div>

      </div>
      {/*<div className="full firstRow">
        <div></div>
        <div></div>
        <div></div>
      </div>*/}
    </>);
  }