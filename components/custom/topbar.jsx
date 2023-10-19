import Link from 'next/link';
//import '../../app/global.css';
import styles from './topbar.module.css';
import Dropdown from './dropdown'
import { getPostListFromCategory } from '../../lib/api';
// import ParsedHtml from './parsed-html';
import Image from 'next/image';
import logoPic from '../../public/15-removebg-preview.png';
import ParsedHtml from './parsed-html';
import HamburgerMenu from './hamburger-menu.jsx';
import HamburgerItem from './hamburger-item';


// nepszavazasrol = [
//     { 
//         name: "Mi ez az egész?",
//         description: "Miért népszavazás egyáltalán"
//     },
//     { 
//         name: "A kérdések",
//         description: "Erről lehet majd szavazni"
//     },
//     { 
//         name: "Miért érdemes szavazni?",
//     },
//     { 
//         target: "timeline",
//         name: "Út a Népszavazáshoz",
//         description: "A népszavazáshoz vezető út lépései"
//     },
    
// ]

export default async function TopBar() {
    const nepszavazasrolPostList = await getPostListFromCategory("nepszavazasrol");

    let nepszavazasrol = [];

    nepszavazasrolPostList.edges.map( page => {
        page = page.node;
        let item = {
            name: page.title,
            description: page.excerpt,
            target: "/nepszavazasrol/" + page.slug,
        };
        nepszavazasrol.push(item);
    })


    const kampanyrolPostList = await getPostListFromCategory("kampanyrol");

    let kampanyrol = [];

    /* {/*<ParsedHtml htmlString={page.excerpt} />*/

    kampanyrolPostList.edges.map( page => {
        page = page.node;
        let item = {
            name: page.title,
            description: page.excerpt,
            target: "/kampanyrol/" + page.slug,
        };
        kampanyrol.push(item);
    })

    let mobileMenuItems = [];
    mobileMenuItems.push(<HamburgerItem target="/nepszavazasrol/" text="A Népszavazásról" className="topLevelItem" />);
    nepszavazasrol.map( elem => (
        mobileMenuItems.push(<HamburgerItem target={elem.target} text={elem.name} description={elem.description} className="childItem" />)
    ));
    mobileMenuItems.push(<HamburgerItem target="/kampanyrol/" text="A Kampányról" className="topLevelItem" />);
    kampanyrol.map( elem => (
        mobileMenuItems.push(<HamburgerItem target={elem.target} text={elem.name} description={elem.description} className="childItem" />)
    ));

    return (
        <div className={styles.topBar}>
            <nav className={styles.topBarStart}>
                <div className="mobile-only">
                    <HamburgerMenu children={mobileMenuItems} />
                </div>
                <Link className={styles.logo} href="/"><Image src={logoPic} width={40} height={40} /></Link>
                <Dropdown title="A népszavazásról" items={nepszavazasrol} rootTarget="/nepszavazasrol/"></Dropdown>
                <Dropdown title="A kampányról" items={kampanyrol} rootTarget="/kampanyrol/"></Dropdown>
                {/*<Link href="/hirek">Hírek</Link>*/} {/*TODO remove test when done */}
                {/*<Dropdown title="Aktivistáknak" rootTarget="/aktivistaknak/"></Dropdown>*/}
            </nav>
            <nav className={styles.topBarEnd}>
            <Link style={{color: 'var(--main-yellow)'}} href="/aktivista-jelentkezes">Jelentkezz Aktivistának!</Link>
                <Link href='https://tamogass.ahang.hu/oktatas-nepszavazas?utm_source=7igen.hu' target='_blank'><button className="hex-button" >Támogatás</button></Link>
            </nav>
        </div>    
    )
}