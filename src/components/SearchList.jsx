import React from 'react'
import Card from './Card'

const SearchList = ({ filteredPost }) => {
  const filtered = filteredPost.map(post => <Card id={post.id} post={post} />)
  return (
    <div className="container py-10 space-y-6 lg:space-y-12">{filtered}</div>
  )
}

export default SearchList
