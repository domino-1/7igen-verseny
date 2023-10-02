import TopBar from '../../components/custom/topbar';

export default function MainLayout({ children }) {
    return (<>
        <TopBar />
        <main className="bodyContent" style={{minHeight: 100 + 'vh'}}>{children}</main>
    </>)
}