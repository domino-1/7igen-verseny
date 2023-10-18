import { getHirPost, getCatSlugs } from '../../../../lib/api';
import Link from 'next/link';
import ParsedHtml from '../../../../components/custom/parsed-html';
import Breadcrumbs from '../../../../components/custom/breadcrumbs';
//import ParsedHtml from '~/components/custom/parsed-html';
//import { sanitize, isSupported } from "isomorphic-dompurify";
//import parse from 'html-react-parser';
//import PostBody from '../../../../components/post-body'

export async function generateStaticParams() {
    const hirSlugs = await getCatSlugs("kampanyrol")/*.then((res) => res.json())*/;

    return hirSlugs.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }) {
    const content = await getHirPost(params.slug);

    const published = new Date(content.date);

    return <>
        <Breadcrumbs link="/kampanyrol/" category="A Kampányról" />
        <h1>{content.title}</h1>
        <p>{published.toDateString().slice(4)}</p>
        <br />
        <ParsedHtml htmlString={content.content}></ParsedHtml>
    </>
}