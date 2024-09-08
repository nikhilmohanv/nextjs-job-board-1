"use server";

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import { createJobSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import path from "path";

export async function createJobPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const {
    title,

    authorName, //TODO: change it to authorName
   
    description,
    
  } = createJobSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;


  await prisma.post.create({
    data: {
      slug,
      title: title.trim(),
      authorName: authorName?.trim(),
      description: description.trim(),
   
    },
  });

  redirect("/post-submitted");
}

