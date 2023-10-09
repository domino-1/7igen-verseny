//import * as DOMPurify from "dompurify"; do we need a sanitizer here? its only supposd to get content from WP
import parse from 'html-react-parser';

export default function ParsedHtml({ htmlString }) {
    //const cleanHtml = DOMPurify.sanitize( htmlString );
    const parsed = parse( htmlString );
    //const parsed = cleanHtml;

    return <>{parsed}</>
}