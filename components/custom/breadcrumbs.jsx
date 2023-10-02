import Link from 'next/link'

export default function Breadcrumbs({ link, category }) {
    return <span className="breadcrumbs"><Link href="/">Főoldal</Link> » <Link href={'/' + link}>{category}</Link></span>;
}