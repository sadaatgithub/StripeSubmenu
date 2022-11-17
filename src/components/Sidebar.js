import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import sublinks from '../data'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div className={`${isSidebarOpen ? "visible z-[2] scale-100":"invisible scale-0"} fixed inset-0 flex items-center justify-center w-full z-[-1] transition-all duration-200 ease-linear bg-black/50`}>
        <aside className="w-[90%] h-[90vh] bg-white relative sm:px-16 py-8 rounded-sm">
            <button onClick={closeSidebar}><FaTimes className="absolute text-xl top-4 right-4 cursor-pointer"/></button>
        <div className="">
          {sublinks.map((item,index) =>{
            const {links, page} = item
            return(
                <article key={index} className="w-full px-6 flex flex-col gap-y-4">
                    <h4 className="font-semibold">{page}</h4>
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                    {links.map((link,index) =>{
                        const {url, icon, label} = link
                        return (
                            <a href={url} key={index} className="flex justify-start items-center gap-x-4 capitalize text-gray-600 [&>svg]:text-teal-400 p-1">{icon}{label}</a>
                        )
                    })}
                    </div>

                </article>
            )
          })}
        </div>
        </aside>


    </div>
  )
}

export default Sidebar