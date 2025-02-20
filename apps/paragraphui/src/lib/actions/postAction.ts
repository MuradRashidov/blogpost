import { fetchGraphql } from "../fetchGraphql";
import { GET_POST_BY_ID, GET_POSTS } from "../gqlQueries";
import { print } from "graphql";
import { Post } from "../types/modelTypes";
import { transformTakeSkip } from "../helpers";

export const fetchPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { take, skip } = transformTakeSkip({ page, pageSize });
  console.log(take, skip);

  const data = await fetchGraphql(print(GET_POSTS), { skip, take });
  //console.log(data);
  return { posts: data.posts as Post[], totalPosts: data.postCount };
};

export const fetchPostById = async (id: number) => {
  const data = await fetchGraphql(print(GET_POST_BY_ID), { id });
  //console.log("sds",data.getPostById);
  return {post:data.getPostById as Post};
};
