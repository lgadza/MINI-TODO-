import Navbar from "./components/navbar"

const Layout=({children})=>{
    return(
        <div className="layout">
            <Navbar/>
            {children}
        </div>
    )
}
export default Layout