import { useState, useEffect } from 'react'
import { api } from '../services/api'

export function usePosts() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(null)

    api.getPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [])

  return { posts, loading, error }
}

export function usePost(id) {
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false

    setLoading(true)
    setError(null)
    setPost(null)

    api.getPost(id)
      .then((data) => {
        if (!cancelled) {
          setPost(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [id])

  return { post, loading, error }
}
