import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-3xl px-8 py-12 sm:px-0 2xl:max-w-6xl">
        <p className="text-zinc-500 dark:text-zinc-400">
          {" "}
          © {new Date().getFullYear()} BB Stories. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
{
  /* <footer className="border-t px-5 md:px-24">
      <div className="mx-auto  space-y-5 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">BB Stories</h3>
            <p className="text-sm text-muted-foreground">
              Sharing bad breath success stories
            </p>
          </div>
          {/* TODO: Add about us, terms of service, privacy policy pages */
}
{
  /* <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div> */
}
//     </div>
//     <div className="text-center text-sm text-muted-foreground">
//       © {new Date().getFullYear()} BB Stories. All rights reserved.
//     </div>
//   </div>
// </footer>
