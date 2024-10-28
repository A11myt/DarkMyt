"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full pb-2 text-center text-3xl">
      {params.slug}
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-row w-1/2 px-4 justify-evenly m-auto">
          <button
            className="rounded-sm border border-light-100 py-0.5 px-2"
            onClick={() => router.push(`/docs/${params.slug}`)}
          >
            Installation
          </button>
          <button className="rounded-sm border border-light-100 py-0.5 px-2">
            Documentation
          </button>
          <button className="rounded-sm border border-light-100 py-0.5 px-2">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
