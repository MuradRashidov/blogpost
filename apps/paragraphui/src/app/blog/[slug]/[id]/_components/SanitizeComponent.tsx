"use client"
import React from 'react'
import DOMPurify from "dompurify"

const SanitizeComponent = ({content}: {content:string}) => {
    return (
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} className="text-xs font-mono p-5 bg-gray-200 shadow-md rounded-md my-6" />

    )
}

export default SanitizeComponent