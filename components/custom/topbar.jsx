import Link from 'next/link';
//import '../../app/global.css';
import styles from './topbar.module.css';
import Dropdown from './dropdown'
//import { getPostListFromCategory } from '../../lib/api';
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
    // const nepszavazasrolPostList = await getPostListFromCategory("nepszavazasrol");

    let nepszavazasrol = [];

    // nepszavazasrolPostList.edges.map( page => {
    //     page = page.node;
    //     let item = {
    //         name: page.title,
    //         description: page.excerpt,
    //         target: "/nepszavazasrol/" + page.slug,
    //     };
    //     nepszavazasrol.push(item);
    // })


    // const kampanyrolPostList = await getPostListFromCategory("kampanyrol");

    let kampanyrol = [];

    let csapatok = [];

    csapatok.push( {
        name: "Fecske csapat",
        description: "A csapat mottója",
        target: "/csapatok/fecske"
    },
    {
        name: "Gólya csapat",
        description: "A csapat mottója",
        target: "/csapatok/golya"
    } )

    // /* {/*<ParsedHtml htmlString={page.excerpt} />*/

    // kampanyrolPostList.edges.map( page => {
    //     page = page.node;
    //     let item = {
    //         name: page.title,
    //         description: page.excerpt,
    //         target: "/kampanyrol/" + page.slug,
    //     };
    //     kampanyrol.push(item);
    // })

    let mobileMenuItems = [];
    mobileMenuItems.push(<HamburgerItem target="/challengek/" text="Challengek" className="topLevelItem" />);
    nepszavazasrol.map( elem => (
        mobileMenuItems.push(<HamburgerItem target={elem.target} text={elem.name} description={elem.description} className="childItem" />)
    ));
    mobileMenuItems.push(<HamburgerItem target="/pontok/" text="Pontok" className="topLevelItem" />);
    kampanyrol.map( elem => (
        mobileMenuItems.push(<HamburgerItem target={elem.target} text={elem.name} description={elem.description} className="childItem" />)
    ));
    mobileMenuItems.push(<HamburgerItem target="/csapatok/" text="Csapatok" className="topLevelItem" />);
    csapatok.map( elem => (
        mobileMenuItems.push(<HamburgerItem target={elem.target} text={elem.name} description={elem.description} className="childItem" />)
    ));

    return (
        <div className={styles.topBar}>
            <nav className={styles.topBarStart}>
                <div className="mobile-only">
                    <HamburgerMenu children={mobileMenuItems} />
                </div>
                {/*<Link className={styles.logo} href="/"><Image src={logoPic} width={40} height={40} /></Link>*/}
                <Dropdown title="Challengek" items={nepszavazasrol} rootTarget="/challengek/"></Dropdown>
                <Dropdown title="Pontok" items={kampanyrol} rootTarget="/pontok/"></Dropdown>
                <Dropdown title="Csapatok" items={csapatok} rootTarget="/csapatok/"></Dropdown>
                {/*<Link href="/hirek">Hírek</Link>*/} {/*TODO remove test when done */}
                {/*<Dropdown title="Aktivistáknak" rootTarget="/aktivistaknak/"></Dropdown>*/}
            </nav>
            <nav className={styles.topBarEnd}>
                {/*<Link style={{color: 'var(--main-yellow)'}} href="/aktivista-jelentkezes">Jelentkezz Aktivistának!</Link>*/}
                <Link href='/csapatok/' target='_blank'><button className="hex-button" >Csatlakozz!</button></Link>
            </nav>
        </div>    
    )
}