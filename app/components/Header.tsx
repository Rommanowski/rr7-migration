import React from "react";
import GlobalHeader from '@jetbrains/kotlin-web-site-ui/out/components/header/header.js';
import '@jetbrains/kotlin-web-site-ui/dist/header.css';

function Header(props: { productWebUrl: string; hasSearch: boolean }) {
    return <GlobalHeader {...props} />;
}


export default Header;
