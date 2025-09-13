import { NavBar } from "./Navbar"

export const Page = ( { children } ) => {
    return (
        <>
            <NavBar />
            <main>
                { children }
            </main>
            <footer>
                08sept
            </footer>
        </>
    )
}