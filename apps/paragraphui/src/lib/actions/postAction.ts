import { authFetchGraphql, fetchGraphql } from "../fetchGraphql";
import { GET_POST_BY_ID, GET_POSTS, GET_USER_POSTS } from "../gqlQueries";
import { print } from "graphql";
import { Post } from "../types/modelTypes";
import { transformTakeSkip } from "../helpers";
import { PostFormState } from "../types/formState";
import { PostFormSchema } from "../zod-schemas/postFormSchema";
import { CREATE_POST_MUTATION } from "../gqlMutations";
import { uploadThumbnail } from "../upload";

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
  return { post: data.getPostById as Post };
};
export async function fetchUserPosts({
  page,
  pageSize,
}: {
  page?: number;
  pageSize: number;
}) {
  const { take, skip } = transformTakeSkip({ page, pageSize });
  const data = await authFetchGraphql(print(GET_USER_POSTS), {
    take,
    skip,
  });

  return {
    posts: data.getUserPosts as Post[],
    totalPosts: data.userPostCount as number,
  };
}

export async function saveNewPost(
  state: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  console.log("thumbnail_3");

  const validatedFields = PostFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  let thumbnailUrl = "";
  // Todo:Upload Thumbnail to supabase
  console.log("thumbnail_1");

  if (validatedFields.data.thumbnail) {
    console.log("thumbnail_2");

    thumbnailUrl = await uploadThumbnail(validatedFields.data.thumbnail);
  }
  // Todo: call garphql api

  const data = await authFetchGraphql(print(CREATE_POST_MUTATION), {
    input: {
      ...validatedFields.data,
      thumbnail: thumbnailUrl,
    },
  });

  if (data) return { message: "Success! New Post Saved", ok: true };
  return {
    message: "Oops, Something Went Wrong",
    data: Object.fromEntries(formData.entries()),
  };
}
