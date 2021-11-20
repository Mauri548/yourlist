import React from "react";
import Navbar from "../Blocks/Navbar";

const WebsiteLayout = ({children, searchItems}) => {
    return (
        <>
            <Navbar searchItems={searchItems} />
            {children}
        </>
    )
}

export default WebsiteLayout