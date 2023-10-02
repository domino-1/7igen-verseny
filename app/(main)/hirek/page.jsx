import ParsedHtml from "../../../components/custom/parsed-html";
import { getAllHirPosts } from "../../../lib/api";
import Link from 'next/link'; 

function hirWrapper(hirek) {
    hirek.map
}

function NewsPost({title, author, date, excerpt}) {
    const published = new Date(date);
    
    return (
        <div className={'newsPost'} >
            <h3>{title}</h3>
            <p>By: {author} | {published.toDateString().slice(4)} </p>
            <ParsedHtml htmlString={excerpt}></ParsedHtml>
        </div>
    )
}

export default async function Page({ params }) {
    const hirek = await getAllHirPosts();

    let hirArray = [];

    hirek.edges.map(hir => {
        hirArray.push(hir.node);
    })

    let hirObj = [];

    hirArray.map( elem => {
        //hirObj.push(NewsPost(elem.title, elem.author.node.name, "today", elem.excerpt));
        hirObj.push(<Link href={'./hirek/' + encodeURI(elem.slug)} ><NewsPost title={elem.title} author={elem.author.node.name} date={elem.date} excerpt={elem.excerpt}/></Link>)
    })


    // return hirek.edges.map(hir => {
    //     <div>{JSON.stringify(hir)}</div>
    // })
    
    return <>
        <h1>Hírek</h1>

        {/* <p>{JSON.stringify(hirek.edges[0].node)}</p> */}

        <section className="newsCards">
            { hirObj.map( elem => elem) }
        </section>
        
        </>
}