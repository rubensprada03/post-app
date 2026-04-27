import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePosts } from '../hooks/usePosts'
import { useLoadMore } from '../hooks/useLoadMore'
import { SearchBar } from '../components/SearchBar'
import { PostCard } from '../components/PostCard'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'

import {
  HomeSection,
  HomeContainer,
  HeroBlock,
  HeroTitle,
  HeroSubtitle,
  ResultsMeta,
  ResultsCount,
  ResultsAccent,
  ClearButton,
  PostsGrid,
  EmptyState,
  EmptyIcon,
  EmptyText,
  EmptyHint,
  LoadMoreWrapper,
  LoadMoreButton,
  LoadMoreInfo,
} from './Home.styles'

export function Home() {
  const navigate = useNavigate()
  const { posts, loading, error } = usePosts()
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  const { visibleItems, hasMore, loadMore, reset } = useLoadMore(filteredPosts)

  // Ao mudar a busca, volta pro início da paginação
  useEffect(() => {
    reset()
  }, [search])

  return (
    <HomeSection>
      <HomeContainer>
        <HeroBlock>
          <HeroTitle>
            Explore os <em>Posts</em>
          </HeroTitle>
          <HeroSubtitle>
            Navegue pela coleção de publicações e encontre o que você procura
            com facilidade.
          </HeroSubtitle>
          <SearchBar value={search} onChange={setSearch} />
        </HeroBlock>

        {loading && <Loader text="Buscando posts..." />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <>
            <ResultsMeta>
              <ResultsCount>
                Exibindo <ResultsAccent>{visibleItems.length}</ResultsAccent>{' '}
                de <ResultsAccent>{filteredPosts.length}</ResultsAccent> posts
                {search && ` para "${search}"`}
              </ResultsCount>
              {search && (
                <ClearButton onClick={() => setSearch('')}>
                  Limpar filtro
                </ClearButton>
              )}
            </ResultsMeta>

            {filteredPosts.length === 0 ? (
              <EmptyState>
                <EmptyIcon>🔍</EmptyIcon>
                <EmptyText>Nenhum post encontrado</EmptyText>
                <EmptyHint>Tente usar outras palavras-chave.</EmptyHint>
              </EmptyState>
            ) : (
              <>
                <PostsGrid>
                  {visibleItems.map((post, index) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      index={index}
                      onClick={(id) => navigate(`/post/${id}`)}
                    />
                  ))}
                </PostsGrid>

                {hasMore && (
                  <LoadMoreWrapper>
                    <LoadMoreButton onClick={loadMore}>
                      Carregar mais
                    </LoadMoreButton>
                    <LoadMoreInfo>
                      {filteredPosts.length - visibleItems.length} posts restantes
                    </LoadMoreInfo>
                  </LoadMoreWrapper>
                )}
              </>
            )}
          </>
        )}
      </HomeContainer>
    </HomeSection>
  )
}
