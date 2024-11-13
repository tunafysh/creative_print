import Logo from "@/components/logo"
import { ModeToggle } from "@/components/theme/themetoggle"

export default function Home() {
  const navbarVariants = {
    initial: {
      background: "transparent",
      shadow: "inset 0 -1px 0 0 hsl(var(--border))",
    },
    scrolled: {
      background: "hsl(var(--secondary))",
      shadow: "none",
    }
  }

  return (
    <div className="w-full h-[1000px]">
      <div id="navbar" className="w-full h-16 flex flex-row p-4 justify-between -z-10 blur-sm">
      <div className="flex flex-row items-center z-10">
      <Logo color="hsl(var(--primary))"/>
        
      <h1 className=" ml-3 text-xl font-bold z-10">Creative <br /> Print</h1>
      </div>
        <ul className="flex flex-row gap-4 items-center z-10">
          <li>Order</li>
          <hr />
        <ModeToggle/>
        </ul>
      </div>
      <div id="content"></div>
    </div>
  );
}
