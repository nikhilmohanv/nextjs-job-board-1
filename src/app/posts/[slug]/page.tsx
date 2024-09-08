import JobPage from "@/components/JobPage";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { slug: string };
}

const getPost = cache(async (slug: string) => {
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) notFound();

  return post;
});

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return posts.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post = await getPost(slug);

  return {
    title: post.title,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const post = await getPost(slug);

  // const { applicationEmail, applicationUrl } = job;

  // const applicationLink = applicationEmail
  //   ? `mailto:${applicationEmail}`
  //   : applicationUrl;

  // if (!applicationLink) {
  //   console.error("Job has no application link or email");
  //   notFound();
  // }

  return (
    <>
      <main className="grow">
        <div className="mx-auto 2xl:max-w-7xl">
          <div className="2xl:max-w-screen-3xl mx-auto max-w-screen-xl px-8 py-12 lg:py-32">
            <JobPage post={post} />
            {/* <aside> */}
            {/* <Button asChild> */}
            {/* <a href={applicationLink} className="w-40 md:w-fit">
            Apply now
          </a> */}
            {/* </Button> */}
            {/* </aside> */}

            {/* email subscribe button */}

            <div className="mx-auto max-w-3xl py-12 2xl:max-w-6xl">
              <section>
                <div className="lg:px- mx-auto max-w-7xl border-y py-12 dark:border-white/20 sm:px-6">
                  <div className="relative isolate">
                    <h2 className="font-display mx-auto text-balance text-center text-3xl font-light text-black dark:text-white lg:text-7xl">
                      Join us to get our news in your inbox.
                    </h2>{" "}
                    <form action="" className="mt-12">
                      <div className="mx-auto flex w-full max-w-md flex-col gap-1 sm:flex-row">
                        <input
                          name="email"
                          type="email"
                          className="font-spline block w-full rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600/50 disabled:opacity-50 lg:px-6"
                          placeholder="Enter your email..."
                          required
                        />
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-4 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:border-black hover:bg-black/10 hover:text-black focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-white/10"
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
                          </svg>{" "}
                        </button>{" "}
                      </div>{" "}
                    </form>{" "}
                  </div>{" "}
                </div>{" "}
              </section>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
