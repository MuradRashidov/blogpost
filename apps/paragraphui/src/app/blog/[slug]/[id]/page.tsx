import { fetchPostById } from '@/lib/actions/postAction';
import React from 'react';
import DOMPurify from "dompurify"
import SanitizeComponent from './_components/SanitizeComponent';
import Comments from './_components/Comments';

type PageProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: PageProps) => {
  const { id } =  params;
  console.log("id", id);
  
  const { post } = await fetchPostById(+id);
  return (
    <main className="mt-24">
      <div className="container max-w-[70%] mx-auto">
        <h2 className="font-semibold text-2xl tracking-tight text-center">{post.title}</h2>
        <div className="flex flex-col md:flex-row w-full h-[70vh] mt-5">
          <div className="w-full md:w-[60%] h-full flex flex-col justify-center p-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col bg-gray-200 shadow-md rounded-md p-2">
                <p className="text-lg font-bold">Published By: </p>
                <p className="text-sm font-semibold">
                  {post.author.name}
                </p>
              </div>
              <span><img className="w-50 h-10 rounded-full" src={post.author.avatar ?? ""} alt="author" /></span>
            </div>
            <SanitizeComponent content={post.content}/>
            <span className="text-xs flex-grow items-end font-light flex w-full justify-end px-2">{new Date(post.createdAt).toLocaleString()}</span>
          </div>

          <div className="w-full h-full md:w-[40%] flex group  justify-end relative">
            <div className="items-center text-orange-700 text-3xl justify-center absolute top-0 left-0 z-50 w-full h-full hidden group-hover:flex bg-black cursor-pointer opacity-50 transition-all duration-200">
              Post Image
            </div>
            <img className="w-[100%] h-full  object-cover" src={post.thumbnail ?? ""} alt="post" />
          </div>
        </div>
      </div>
      <Comments postId={post.id}/>
    </main>
  );
};

export default page;