// jobResults.tsx
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import JobListItem from "./JobListItem";

interface PostResultsProps {
  page?: number;
}

export default async function PostResults({ page = 1 }: PostResultsProps) {
  const postsPerPage = 8;
  const skip = (page - 1) * postsPerPage;

  const postsPromise = prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: postsPerPage,
    skip,
    where: { approved: true },
  });

  const countPromise = prisma.post.count({});

  const [posts, totalResults] = await Promise.all([postsPromise, countPromise]);

  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.slug}`}>
          <JobListItem job={post} />
        </Link>
      ))}
      {posts.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
      )}

      {posts.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / postsPerPage)}
        />
      )}
    </>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="mb-5 mt-6 flex items-center justify-between">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft size={16} />
        Previous page
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        Next page
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
