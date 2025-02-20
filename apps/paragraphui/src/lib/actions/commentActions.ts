import { fetchGraphql } from "../fetchGraphql";
import { print } from "graphql";
import { GET_POST_COMMENTS } from "../gqlMutations";
import { CommentEntity } from "../types/modelTypes";
export const fetchPostComments = async ({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip?: number;
  take?: number;
}) => {
  const data = await fetchGraphql(print(GET_POST_COMMENTS), {
    postId,
    skip,
    take,
  });
  return {
    comments: data.getPostComments as CommentEntity[],
    count: data.getCommentCount as number,
  };
};
