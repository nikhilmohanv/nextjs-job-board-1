"use client";

import { useState } from "react";

export default function HomePage() {
  // const [open, setOpen]=useState(false)
  return (
    <main className="grow">
      <div className="mx-auto 2xl:max-w-7xl">
        <section>
          <div className="2xl:max-w-screen-3xl mx-auto max-w-screen-xl px-8 py-12 lg:py-32">
            <div className="space-y-24">
              
              <div className="space-y-24">
                {/* heading */}
                <div className="mx-auto max-w-3xl 2xl:max-w-6xl">
                  <h1 className="font-display text-balance text-3xl uppercase text-black dark:text-white lg:text-6xl 2xl:text-8xl">
                    Product Designer creating thoughtful, intuitive interfaces
                  </h1>
                  <section>
                    <div className="mx-auto max-w-3xl text-black dark:text-white 2xl:max-w-6xl">
                      <div className="relative mx-auto overflow-hidden overflow-x-hidden py-2">
                        <div className="grid w-full justify-between">
                          <div className="absolute inset-0 left-0 z-10 w-44 bg-gradient-to-r from-white via-transparent dark:from-black" />
                          <div className="absolute inset-0 left-0 z-10 ml-auto w-44 bg-gradient-to-l from-white via-transparent dark:from-black" />
                        </div>
                        <div className="animate-marquee font-display relative flex items-center gap-4 whitespace-nowrap font-black uppercase tracking-widest">
                          I am a marquee
                          <span className="hidden lg:inline">✽</span>I am a
                          marquee <span className="hidden lg:inline">✽</span> I
                          am a marquee
                          <span className="hidden lg:inline">✽</span> I am a
                          marquee <span className="hidden lg:inline">✽</span>I
                          am a marquee
                          <span className="hidden lg:inline">✽</span> I am a
                          marquee <span className="hidden lg:inline">✽</span> I
                          am a marquee
                          <span className="hidden lg:inline">✽</span>I am a
                          marquee <span className="hidden lg:inline">✽</span> I
                          am a marquee
                          <span className="hidden lg:inline">✽</span> I am a
                          marquee
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="mx-auto mt-6 max-w-3xl space-y-6 text-zinc-500 dark:text-zinc-400 2xl:max-w-6xl">
                  <p>
                    My name is Simplexity Theme, a front-end designer based in
                    the UK with a wealth of experience spanning over ten years.
                    My specialty is in interface design for web and mobile
                    applications, with an unwavering focus on usability and
                    simplicity.
                  </p>
                  <p>
                    Currently, I work at Unwrapped, where I use front-end tools
                    such as React and Astro to design some of the best front end
                    tools available, including Vue, Svelte, and Alpinejs.
                  </p>
                  <p>
                    Previously, I worked at Lexington Themes, where I played an
                    integral role in shaping themes and creating wallpapers that
                    helped small businesses thrive online. During my free time,
                    I enjoy building surfing on the mediterranean sea and to
                    contribute to the open source projects
                  </p>
                  <div
                    className="mt-12 inline-flex items-center gap-3"
                    role="list"
                  >
                    <a
                      href="#_"
                      title="link to your page"
                      aria-label="your label"
                      className="dark:hiver:text-white/70 flex text-sm tracking-wide text-black duration-200 hover:text-black/70 dark:text-white"
                    >
                      Twitter
                    </a>
                    <a
                      href="#_"
                      title="link to your page"
                      aria-label="your label"
                      className="dark:hiver:text-white/70 flex text-sm tracking-wide text-black duration-200 hover:text-black/70 dark:text-white"
                    >
                      Dribbble
                    </a>
                    <a
                      href="#_"
                      title="link to your page"
                      aria-label="your label"
                      className="dark:hiver:text-white/70 flex text-sm tracking-wide text-black duration-200 hover:text-black/70 dark:text-white"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="mx-auto max-w-3xl border-b pb-5 dark:border-white/10 sm:flex sm:items-center sm:justify-between 2xl:max-w-6xl">
                  <h3 className="text-base leading-6 text-black dark:text-white">
                    Latest blog posts
                  </h3>
                  <div className="mt-3 sm:ml-4 sm:mt-0">
                    <a
                      href="/blog/blog"
                      title="link to your page"
                      aria-label="your label"
                      className="dark:hiver:text-white/70/80 inline-flex items-center text-black duration-200 hover:text-black/70 dark:text-white dark:hover:text-white/80"
                    >
                      See all posts &nbsp; →
                    </a>
                  </div>
                </div>
                <div className="mx-auto max-w-3xl 2xl:max-w-6xl">
                  <div className="mt-12 grid gap-y-12">
                    <a
                      href="/posts/1"
                      title="Why Your Website Needs a Dedicated IP Address"
                    >
                      <div className="items-center sm:flex">
                        <div>
                          <h4 className="font-display text-lg uppercase text-black dark:text-white lg:text-xl">
                            Why Your Website Needs a Dedicated IP Address
                          </h4>
                          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                            Explaining the benefits of having a dedicated IP
                            address for your website, including improved
                            security and better email deliverability
                          </p>
                          <div className="inline-flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                            <span>Marco Bianchi </span>
                            <time className="ml-3" dateTime="Fri Jul 01">
                              Fri Jul 01
                            </time>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/posts/2"
                      title="The Advantages of Managed WordPress Hosting"
                    >
                      <div className="items-center sm:flex">
                        <div>
                          <h4 className="font-display text-lg uppercase text-black dark:text-white lg:text-xl">
                            The Advantages of Managed WordPress Hosting
                          </h4>
                          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                            Discussing the benefits of choosing a managed
                            WordPress hosting service, including automatic
                            updates and enhanced security features
                          </p>
                          <div className="inline-flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                            <span>Luis Garcia</span>
                            <time className="ml-3" dateTime="Mon Aug 08">
                              Mon Aug 08
                            </time>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
