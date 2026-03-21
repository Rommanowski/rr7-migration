import GlobalFooter from '@jetbrains/kotlin-web-site-ui/out/components/footer/footer.js';
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
import { ThemeProvider } from '@rescui/ui-contexts';

export function Footer() {
    return (
        <ThemeProvider theme="dark">
            <GlobalFooter />
        </ThemeProvider>
    );
}