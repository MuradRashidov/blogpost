"use client"
import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { fetchPostComments } from '@/lib/actions/commentActions'
import { DEFAULT_PAGE_SIZE } from '@/lib/constants'
import CommentCard from './CommentCard'
import CommentPagination from './CommentPagination'
import {CommentCardSkeleton} from './CommentCardSceleton'
type Props = {
    postId: number
}
const Comments = ({ postId }: Props) => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ["GET_POST_COMMENTS", postId, page],
        queryFn: async () => await fetchPostComments({
            postId,
            skip: (page - 1) * DEFAULT_PAGE_SIZE,
            take: DEFAULT_PAGE_SIZE
        })
    })
    const totalPages = Math.ceil(data?.count ?? 0) / DEFAULT_PAGE_SIZE
    return (
        <div className="rounded-md shadow-md p-2">
            <h6 className="text-lg to-slate-700">Comments</h6>
            <div className="flex flex-col gap-2">
                {isLoading
                    ? Array.from({ length: 12 }).map((_, index) => (
                        <CommentCardSkeleton key={index} />
                    ))
                    : data?.comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
            </div>
            <CommentPagination className="p-2" currentPage={page} setCurrentPage={(p) => setPage(p)} totalPages={totalPages} />
        </div>
    )
}

export default Comments