import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Bharat Jatav — Frontend Developer",
  description:
    "Portfolio of Bharat Jatav, a frontend developer focused on React.js, Next.js, TypeScript, Tailwind CSS, production CRM, HRMS, EdTech and e-commerce products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body suppressHydrationWarning>
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}