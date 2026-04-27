import { useParams, useNavigate } from 'react-router-dom'

import { usePost } from '../hooks/usePosts'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'

import {
  DetailSection,
  DetailContainer,
  Breadcrumb,
  BreadcrumbLink,
  PostCard,
  PostMeta,
  PostBadge,
  PostTitle,
  PostDivider,
  PostBody,
  PostFooter,
  AuthorInfo,
  AuthorAvatar,
  AuthorLabel,
  AuthorName,
  BackButton,
} from './PostDetail.styles'

export function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { post, loading, error } = usePost(id)

  return (
    <DetailSection>
      <DetailContainer>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/')}>← Posts</BreadcrumbLink>
          <span>/</span>
          <span>Post #{id}</span>
        </Breadcrumb>

        {loading && <Loader text="Carregando post..." />}

        {error && (
          <ErrorMessage message={error} onRetry={() => navigate('/')} />
        )}

        {!loading && !error && post && (
          <PostCard>
            <PostMeta>
              <PostBadge>Post #{String(post.id).padStart(2, '')}</PostBadge>
            </PostMeta>

            <PostTitle>{post.title}</PostTitle>
            <PostDivider />
            <PostBody>{post.body}</PostBody>

            <PostFooter>
              <AuthorInfo>
                <AuthorAvatar>U{post.userId}</AuthorAvatar>
                <div>
                  <AuthorLabel>Autor</AuthorLabel>
                  <AuthorName>Usuário #{post.userId}</AuthorName>
                </div>
              </AuthorInfo>
              <BackButton onClick={() => navigate('/')}>
                ← Voltar aos posts
              </BackButton>
            </PostFooter>
          </PostCard>
        )}
      </DetailContainer>
    </DetailSection>
  )
}
