import DOMPurify, { sanitize, isSupported } from "isomorphic-dompurify";
import parse from 'html-react-parser';

export default function ParsedHtml({ htmlString }) {
    const cleanHtml = DOMPurify.sanitize( htmlString );
    const parsed = parse(cleanHtml);

    return <>{parsed}</>
}