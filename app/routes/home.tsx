import type { Route } from "./+types/home";
import { ThemeProvider } from "@rescui/ui-contexts";
import { HeaderSection } from "~/components/header-section";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section";
import { UsageSection } from "~/components/usage-section";

export const meta: Route.MetaFunction = () => [
    { title: "Kotlin Programming Language" },
    { property: "og:title", content: "Kotlin Programming Language" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://kotlinlang.org/images/open-graph/general.png"},
    { property: "og:url", content: "https://kotlinlang.org/"},
    { property: "og:description", content: "Kotlin Programming Language"},
    { property: "og:site_name", content: "Kotlin"},
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:image:src", content: "https://kotlinlang.org/images/twitter/general.png" },
];

export default function Home() {
    return(
    <div className="overview-page">
        <ThemeProvider theme='dark'>
            <HeaderSection/>
            <LatestFromKotlinSection/>
            <WhyKotlinSection/>
            <UsageSection/>
        </ThemeProvider>
    </div>
    )
}
