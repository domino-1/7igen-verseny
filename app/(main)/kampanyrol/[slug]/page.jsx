import { getHirPost, getCatSlugs } from '../../../../lib/api';
import Link from 'next/link';
import ParsedHtml from '../../../../components/custom/parsed-html';
import Breadcrumbs from '../../../../components/custom/breadcrumbs';
//import ParsedHtml from '~/components/custom/parsed-html';
//import { sanitize, isSupported } from "isomorphic-dompurify";
//import parse from 'html-react-parser';
//import PostBody from '../../../../components/post-body'

export async function generateStaticParams() {
    const hirSlugs = await getCatSlugs("kampanyrol").then(res.filter(
        (post) => post.slug !== "esemenyek"
    ));

    return hirSlugs.map((post) => ({
        slug:  post.slug,
    }));
}

export default async function Page({ params }) {
    const content = await getHirPost(params.slug);

    if (content === null) throw notFound();

    const published = new Intl.DateTimeFormat('hu-HU').format( new Date(content.modified) );

    return <>
        <Breadcrumbs link="/kampanyrol/" category="A Kampányról" />
        <h1>{content.title}</h1>
        <p className="updated-date">{published}</p>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
    </>
}