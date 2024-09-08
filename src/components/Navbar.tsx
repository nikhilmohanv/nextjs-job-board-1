import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  var open = false;
  return (
    <header className="mx-auto w-full justify-center bg-white dark:bg-black">
      <div
        className="mx-auto flex w-full max-w-3xl flex-col px-8 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-0 2xl:max-w-6xl"
        x-data="{ open: false }"
      >
        <div className="flex flex-row items-center justify-between text-black dark:text-white">
          <Link
            href="/"
            
            title="bad breath stories"
            aria-label="bad breath stories"
            className="font-bold  inline-flex items-center uppercase"
          >
            BB Story
          </Link>
          <Link
            className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden"
            // onClick={() => (open = !open)}
            href={""}
          >
            Add your story
          </Link>
        </div>
        <nav
          className={`flex-grow flex-col items-center text-sm ${
            open ? "flex" : "hidden"
          } gap-x-4 gap-y-4 py-1 text-zinc-500 opacity-100 dark:text-zinc-400 lg:flex lg:flex-row lg:justify-start`}
        >
          <a
            href="/system/overview"
            title="link to your page"
            aria-label="your label"
            className="px-4 text-black hover:text-zinc-500 focus:text-zinc-500 focus:shadow-none focus:outline-none lg:ml-auto"
          >
            Add your story &nbsp; →
          </a>
         
          {/* <a
            href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/efff7e1e-e8fe-4efc-afcb-c51907eae41c"
            title="link to your page"
            aria-label="your label"
            className="px-4 text-black hover:text-zinc-500 focus:text-zinc-500 focus:shadow-none focus:outline-none lg:border-l-2 lg:pl-4"
          >
            Buy Simplexity &nbsp; →
          </a> */}
        </nav>
      </div>
    </header>
  );
}

//  <header className="shadow-sm">
//       <nav className="m-auto flex items-center justify-between  py-5 px-5 md:px-24">
//         <Link href="/" className="flex items-center gap-3">
//           {/* <Image src={logo} width={40} height={40} alt="Flow Jobs logo" /> */}
//           <span className="text-xl font-bold tracking-tight">BB Stories</span>
//         </Link>
//         <Button asChild>
//           <Link href="/posts/new">Post Your Story</Link>
//         </Button>
//       </nav>
//     </header>
