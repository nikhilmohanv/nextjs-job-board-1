import { relativeDate } from "@/lib/utils";
import { Post } from "@prisma/client";
import Markdown from "./Markdown";
import { Creepster } from "next/font/google";
interface JobListItemProps {
  job: Post;
}

export default function JobListItem({
  job: { title, authorName, createdAt, description },
}: JobListItemProps) {
  return (
    // <Link href={`posts/${slug}`}>
    <div className="sm:flex items-center">
        <div>
          <div className="inline-flex items-center text-xs text-zinc-500 dark:text-zinc-400">
            <span>{authorName}</span>
            <time className="ml-3" dateTime={relativeDate(createdAt)}>
              {relativeDate(createdAt)}
            </time>
          </div>
          <h4 className="text-lg mt-2 lg:text-xl text-black dark:text-white  font-display">
            {title}
          </h4>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    // </Link>
  );
}
