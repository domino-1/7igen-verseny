//import * as DOMPurify from "dompurify";
import parse from 'html-react-parser';

export default function ParsedHtml({ htmlString }) {
    //const cleanHtml = DOMPurify.sanitize( htmlString );
    const parsed = parse( htmlString );
    //const parsed = cleanHtml;

    return <>{parsed}</>
}