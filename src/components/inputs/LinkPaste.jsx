import React from "react";
import { IconLink } from "@tabler/icons-react";
const LinkPaste = ({handleLinkPaste}) => {
    <label htmlFor="link-input" className="cursor-pointer">
        <IconLink size={22} />
        <input
            type="text"
            id="link-input"
            placeholder="Paste a link here"
            className="border-none outline-none w-full py-1 px-2 text-sm text-gray-500 dark:text-neutral-400"
            onPaste={handleLinkPaste}
        />
    </label>
}
export default LinkPaste