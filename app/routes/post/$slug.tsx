import { useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { db } from "../../../prisma/db";
import {parse} from 'marked';
import { useEffect } from "react";


export const loader: LoaderFunction = async ({
  params
}) => {
  if(params.slug){
    const data = await db.post.findUnique({
      where: {
        slug: params.slug,
      },
    });

    const markdown = parse(data.content ?? '');

    return {
      ...data,
      content: markdown
    }
  }
};

export default function PostRoute() {
  const params = useParams();
  let data = useLoaderData();
  

  return (<div>
      <h1>{data.title}</h1>
      <div className="whitespace-pre" dangerouslySetInnerHTML={{__html: data.content}}/>
  </div>);
}
