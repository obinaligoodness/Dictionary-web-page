import { ThemeProvider } from "@/ThemeProvider";
import { FontProvider } from "@/FontProvider";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <FontProvider>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
