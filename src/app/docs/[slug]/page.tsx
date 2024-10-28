import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Doc: {params.slug}</div>;
}
