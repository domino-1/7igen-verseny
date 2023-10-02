export function generateStaticParams() {
    return [{ category: 'nepszavazasrol' }, { category: 'kampanyrol' }, { category: 'aktivistaknak' }]
}

export default function CategoryHomePage({ params }) {
    return (<>
        <h1 className="category-desc-page">{params.category}</h1>
        <p>Kategória leírás</p>
    </>)
}