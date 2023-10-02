import { getHirPost } from '../../../../lib/api';
import Link from 'next/link';
import ParsedHtml from '../../../../components/custom/parsed-html';
import Breadcrumbs from '../../../../components/custom/breadcrumbs';
//import ParsedHtml from '~/components/custom/parsed-html';
//import { sanitize, isSupported } from "isomorphic-dompurify";
//import parse from 'html-react-parser';
//import PostBody from '../../../../components/post-body'

export async function generateStaticParams() {
    let final = [];
    const nepszavazasSlugs = await getCatSlugs("nepszavazasrol");
    const kampanySlugs = await getCatSlugs("kampanyrol");

    nepszavazasSlugs.map((elem) => {
        final.push(elem);
    });
    kampanySlugs.map((elem) => {
        final.push(elem);
    });

    return final.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }) {
    const content = await getHirPost(params.slug);

    const published = new Date(content.date);

    return <>
        <Breadcrumbs link={params.category} category={params.category} />
        <h1>{content.title}</h1>
        <p>By: {content.author.node.name} | {published.toDateString().slice(4)}</p>
        <br />
        {/*<PostBody content={DOMPurify.sanitize(content.content)}></PostBody>*/}
        <div><ParsedHtml htmlString={content.content} ></ParsedHtml></div>
    </>
}