import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();

  const container = useRef(null)

  useEffect(() =>{
    const submenu = container.current 
    const {center, bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    submenu.style.width = links.length*160 +"px"

  },[page,location,links])


  return (
    <aside ref={container} 
    
    // style={{width:links.length*160 + "px"}}
    className={`${isSubmenuOpen? "opacity-100 visible [transform:translate(-50%,0%)] ":"opacity-0 invisible hidden lg:block"} bg-white shadow-md absolute top-16 left-1/2 z-[3] p-8 
    rounded-md transition-all duration-300 ease-linear [transform:translate(-50%,5%)]  [transform-origin:50%,-50px] submenu link-btn `}
    >
    <section className="flex flex-col justify-center items-center gap-y-8">
        <h4 className="self-start font-bold">{page}</h4>
        <div className={`grid grid-flow-col w-full`}>
        {links.map((link,index) =>{
            const { url, icon ,label} = link
            return (<a key={index} href={url} className="flex gap-2 justify-center items-center [&>svg]:text-teal-400 capitalize">
                {icon}
                {label}
            </a>)
        })}
        </div>
    </section>

    </aside>
  )
};

export default Submenu;
