import "./nav.css"
import {Link} from 'react-router-dom'
import NavList from "./NavApi"
import {useState, useEffect} from "react"
const Nav=({path})=>{
  const [toggleBtn,setToggleBtn]=useState(false)
  const [sideBar,setSideBar] = useState(false)
  const [add,Setadd]=useState(true)
  
  const btnToggle=()=>{
    clearTimeout()
    toggleBtn?setToggleBtn(false):setToggleBtn(true)
    sideBar?setSideBar(false):setSideBar(true)
  }
useEffect(()=>{
  setTimeout(()=>{
    Setadd(false)
  },2000)
},[])

  return (
      <div className="navSection">
      <div className={`Nav ${sideBar?"active":""} ${add?"show":"hide"}`}>
        <ul>
          {/*<!-- web logo anme -->*/}
          <li className="logo">
            <Link to=".." relative={path} preventScrollReset={true}>
              <div className="icon pic">
                <img src="bg.png" alt="rohit@8700"/>
              </div>
              <div className="text">
                Rohit Kumar
              </div>
            </Link>
          </li>
         <div className={`MenuList`}>
        {/*<!-- nav section -->*/}
        {NavList.map((item)=>{
          return(
         <li key={item.id} className={`list ${path === item.link?"active":""}`}style={item.style}>
            <Link to={item.link}>
              <div className="icon">
                {item.icon}
              </div>
              <div className="text">
                {item.text}
              </div>
            </Link>
          </li>
          )
        })}
        </div>
        <div className="imgs">
        <li className="logo">
            <Link to="/contact">
              <div className="icon">
              <span className="imgShadow"></span>
                <img src="bg.png" alt="imge Tag" />
              </div>
              <div className="text">
                Rohit@8700
              </div>
            </Link>
          </li>
        </div>
        </ul>
      </div>
      <div className={`humIcon ${toggleBtn?"active":""}`} onClick={btnToggle}>
        
      </div>
    </div>
    )
}
export default Nav