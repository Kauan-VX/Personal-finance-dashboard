import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import Navbar from "../components/navbar/navbar";
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="">
        <Navbar />
        <Dashboard />
      </main>
    </ThemeProvider>
  );
}
