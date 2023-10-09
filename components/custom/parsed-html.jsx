import DOMPurify, { sanitize, isSupported } from "dompurify";
import parse from 'html-react-parser';

export default function ParsedHtml({ htmlString }) {
    const cleanHtml = DOMPurify.sanitize( htmlString );
    const parsed = parse( cleanHtml );
    //const parsed = cleanHtml;

    return <>{parsed}</>
}