// import { useState } from "react"
// const Navbar=()=>{
// const [active,setActive]=useState("home")

//     return(
//         <div className="navbar">
//             <a className={active==="home"?"nav-item active":"nav-item"} onClick={()=>setActive("home")} href="home">Home </a>
//             <a className={active==="tasks"?"nav-item active":"nav-item"} onClick={()=>setActive("tasks")} href="tasks">Tasks </a>
//             <a className={active==="login"?"nav-item active":"nav-item"} onClick={()=>setActive("login")} href="login">Login </a>
//         </div>
//     )
// }
// export default Navbar
const Navbar=()=>{

    return(
        <div className="navbar">
            <a className="nav-item"  href="home">Home </a>
            <a className="nav-item"  href="tasks">Tasks </a>
            <a className="nav-item"  href="login">Login </a>
        </div>
    )
}
export default Navbar