import PostResults from "@/components/PostResults";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export function generateMetadata(): Metadata {
  return {
    title: "BB Stories | Bad breath success stories",
  };
}

export default async function Home({ searchParams: { page } }: PageProps) {
  return (
    <main className="grow">
      <div className="2xl:max-w-screen-3xl mx-auto max-w-screen-xl space-y-24 px-8 py-12 lg:py-32">
        <div className="mx-auto max-w-3xl 2xl:max-w-6xl">
          <h1 className="font-display text-3xl font-light text-black dark:text-white lg:text-7xl">
            Join for Fresh Breath Success Stories!
          </h1>
          <div className="mt-6 flex max-w-sm flex-col">
            <form action="">
              <div className="flex w-full flex-col gap-1 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  className="font-spline block w-full rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600/50 disabled:opacity-50 lg:px-6"
                  placeholder="Enter your email..."
                  aria-placeholder="Enter your email..."
                  required
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-4 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-black/10 hover:text-black hover:border-black focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-white/10"
                >
                  Subscribe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-2 h-auto w-4 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-12 gap-y-24 md:grid-cols-2 2xl:max-w-6xl">
          <PostResults page={page ? parseInt(page) : undefined} />
        </div>
        <div className="mx-auto max-w-3xl 2xl:max-w-6xl">
          <section>
            <div className="lg:px- mx-auto max-w-7xl border-t pb-1 dark:border-white/20 sm:px-6">
              {/* <div className="relative isolate">
                <h2 className="font-display mx-auto text-balance text-center text-3xl font-light text-black dark:text-white lg:text-7xl">
                  Try our all-new system with a newsletter-first approach
                </h2>
                <div className="mt-12 grid grid-cols-1 justify-between gap-4 sm:gap-8 lg:grid-cols-4">
                  <p className="text-zinc-500 dark:text-zinc-400 lg:col-span-3">
                    A utility-first approach to newsletter creation with a
                    series of simple, lightweight, and easy-to-use components.
                    Create a personal or business newsletter that matches your
                    brand.
                  </p>
                  <a
                    href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/efff7e1e-e8fe-4efc-afcb-c51907eae41c"
                    className="inline-flex justify-center rounded-full border border-transparent border-zinc-900 bg-black/10 px-6 py-2 text-sm text-black duration-200 hover:bg-black hover:text-white focus:shadow-none focus:outline-none focus:ring-2 focus:ring-white dark:text-white"
                  >
                    Buy Now →
                  </a>
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
