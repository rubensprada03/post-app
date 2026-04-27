import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePosts } from '../hooks/usePosts'
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
} from './Home.styles'

export function Home() {
  const navigate = useNavigate()
  const { posts, loading, error } = usePosts()
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

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
                Exibindo <ResultsAccent>{filteredPosts.length}</ResultsAccent>{' '}
                de {posts.length} posts
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
              <PostsGrid>
                {filteredPosts.map((post, index) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    index={index}
                    onClick={(id) => navigate(`/post/${id}`)}
                  />
                ))}
              </PostsGrid>
            )}
          </>
        )}
      </HomeContainer>
    </HomeSection>
  )
}
