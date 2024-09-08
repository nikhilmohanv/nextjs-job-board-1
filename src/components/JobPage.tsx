import { formatMoney } from "@/lib/utils";
import { Post } from "@prisma/client";
import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "./Markdown";

interface JobPageProps {
  post: Post;
}

export default function JobPage({
  post: { title, description },
}: JobPageProps) {
  return (
    <section className="space-y-24">
      {/* <div className="space-y-24"> */}
      <div className="mx-auto max-w-3xl 2xl:max-w-6xl">
        <h1 className="font-display text-balance text-3xl uppercase text-black dark:text-white lg:text-3xl 2xl:text-6xl">
          {title}
        </h1>
        <section>
          <div className="mx-auto max-w-3xl text-black dark:text-white 2xl:max-w-6xl">
            <div className="relative mx-auto overflow-hidden overflow-x-hidden py-2">
              <div className="grid w-full justify-between">
                <div className="absolute inset-0 left-0 z-10 w-44 bg-gradient-to-r from-white via-transparent dark:from-black" />
                <div className="absolute inset-0 left-0 z-10 ml-auto w-44 bg-gradient-to-l from-white via-transparent dark:from-black" />
              </div>
              {/* <div className="animate-marquee font-display relative flex items-center gap-4 whitespace-nowrap font-black uppercase tracking-widest">
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
                        </div> */}
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-6 text-zinc-500 dark:text-zinc-400 2xl:max-w-6xl">
            <Markdown>{description}</Markdown>

            <div className="mt-12 inline-flex items-center gap-3" role="list">
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
        </section>
      </div>
      {/* <div>{description}</div> */}
    </section>
  );
}
