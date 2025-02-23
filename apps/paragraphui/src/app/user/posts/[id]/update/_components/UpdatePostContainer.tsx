"use client"
import GenericPostForm from '@/app/user/create-post/_components/GenericPostForm'
import { updatePost } from '@/lib/actions/postAction'
import { PostFormState } from '@/lib/types/formState'
import { Post } from '@/lib/types/modelTypes'
import React, { useActionState } from 'react'

type Props = {
    post: Post
}
const UpdatePostContainer = ({ post }: Props) => {
    const [state, action] = useActionState(updatePost, {
        data: {
            postId: post.id,
            content: post.content,
            title: post.title,
            published: post.published ? "on" : undefined,
            tags: post.tags?.map((tag) => tag.name).join(","),
            previousThumbnailUrl: post.thumbnail ?? undefined,

        }
    })
    return (
        <div className="w-full">
            <GenericPostForm type="Update" formAction={action} state={state} />
        </div>
    )
}

export default UpdatePostContainer