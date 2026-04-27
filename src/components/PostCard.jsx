import { CardWrapper, CardNumber, CardTitle, CardExcerpt, CardArrow } from './PostCard.styles'

export function PostCard({ post, index, onClick }) {
  const excerpt =
    post.body.length > 25 ? post.body.slice(0, 25) + '...' : post.body

  return (
    <CardWrapper
      $index={index}
      onClick={() => onClick(post.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(post.id)}
    >
      <CardNumber>Post #{String(post.id).padStart(2, '0')}</CardNumber>
      <CardTitle>{post.title}</CardTitle>
      <CardExcerpt>{excerpt}</CardExcerpt>
      <CardArrow>→</CardArrow>
    </CardWrapper>
  )
}
