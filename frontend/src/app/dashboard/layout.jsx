import { Navbar, Sidebar } from "./components";
export default function Layout({ children }) {
  return (
    <div className="flex relative">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}
