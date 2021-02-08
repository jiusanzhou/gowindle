import React from "react"
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc"

export default ({
    border = true,
    icon = "https://tailwindcss.com/favicon-32x32.png",
    title = 'GoWindle',
    minimize,
    maximize,
    close,
    className = "",
    ...props
}) => {
    return <div className={`flex w-full fixed items-center ${className}`}>
            {/* icon */}
            <div className="mx-2 w-8 h-8">
                <img src={icon} />
            </div>
            {/* title */}
            <div className="text-base font-medium flex-grow">{title}</div>
            {/* extend */}
            {/* <div></div> */}
            {/* actions */}
            <div className="flex float-right" style='behavior:"window-command";'>
                <div command="window-min" className="p-2 hover:bg-gray-200"><VscChromeMinimize /></div>
                <div command="window-max" className="p-2 hover:bg-gray-200"><VscChromeMaximize /></div>
                <div command="window-close" className="p-2 hover:text-white hover:bg-red-500"><VscChromeClose /></div>
            </div>
    </div>
}