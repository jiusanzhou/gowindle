import React from "react"
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc"

import Dragable from "../components/Dragable"

import aardio from "aardio"

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

    return <div className={`flex w-full fixed items-center ${className}`} {...props}>
            {/* icon */}
            <div className="mx-2 w-8 h-8">
                <img src={icon} />
            </div>
            {/* title */}
            {/* only dragable here ? */}
            <Dragable>  
                <div className="text-base font-medium flex-grow">{title}</div>
            </Dragable>
            {/* extend */}
            {/* <div></div> */}
            {/* actions */}
            {/* use electron can't auto bind the command with IE Form */}
            <div className="flex float-right z-50" style='behavior:"window-command";'>
                <div onClick={() => aardio.hitMin()} command="window-min" className="p-2 hover:bg-gray-200"><VscChromeMinimize /></div>
                <div onClick={() => aardio.hitMax()} command="window-max" className="p-2 hover:bg-gray-200"><VscChromeMaximize /></div>
                {/* reques the server and handle with the result */}
                <div onClick={() => aardio.hitClose()} command="window-close" className="p-2 hover:text-white hover:bg-red-500"><VscChromeClose /></div>
            </div>
    </div>
}