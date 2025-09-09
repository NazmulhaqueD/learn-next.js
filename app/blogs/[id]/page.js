import React from 'react'

export default function BlogPage({ params }) {

    const { id } = params;

    return (
        <div>This is page: {id}</div>
    )
}
