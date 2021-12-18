import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Card } from "~/components/card/Card";
import { db } from "../../prisma/db";

type PostData = {
  title: string,
  description: string,
  slug: string,
  imageUrl: string,
};

export let loader: LoaderFunction = () => {
  return db.post.findMany({
    where: {
      published: {
        equals: true
      }
    },
  });
};

export let meta: MetaFunction = () => {
  return {
    title: "Remix Blog Starter",
    description: "Welcome to remix !"
  };
};

export default function Index() {
  let data = useLoaderData<PostData[]>();

  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap mx-auto justify-center">
      {data.map(post=><Card title={post.title} description={post.description} url={`/post/${post.slug}`} key={post.slug} imgUrl={post.imageUrl}/>)}
    </div>
  );
}
