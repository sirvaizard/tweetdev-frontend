import React, { useState, useEffect, useCallback, useRef } from 'react'

import mergeTweets from '../../utils/mergeTweets'
import formatTweets from '../../utils/formatTweets'
import TweetList from '../TweetList'
import { Tweet } from '../../interfaces/Tweet'
import Button from '../Button'
import { Container } from './styles'

import api from '../../services/api'

export default function FeedProfile({ userId }: { userId: number }) {
  const [tweets, setTweets] = useState<Tweet[]>([] as Tweet[])
  const [haveMoreTweetsToFetch, setHaveMoreTweetsToFetch] = useState<boolean>(true)
  const currentPage = useRef(1)

  const getFormattedTweetsPage = useCallback(async () => {
    const { data: fetchedTweets } = await api.get(`/feed/${userId}?page=${currentPage.current}`)

    const formatedTweets = formatTweets(fetchedTweets)
    
    if(formatedTweets.length === 0) {
      setHaveMoreTweetsToFetch(false)
      return []      
    }
    
    currentPage.current += 1

    return formatedTweets
  }, [userId])

  const handleLoadMoreTweets = useCallback(() => {
    getFormattedTweetsPage()
      .then((formatedTweets: Tweet[]) => {
        if(haveMoreTweetsToFetch) {
          setTweets(currentTweets => mergeTweets(currentTweets, formatedTweets))
        }
      })
  }, [getFormattedTweetsPage, haveMoreTweetsToFetch])

  useEffect(() => {
    handleLoadMoreTweets()
  }, [handleLoadMoreTweets])

  return (
    <Container>
      <TweetList tweets={tweets} />

      <Button size="full" onClick={handleLoadMoreTweets} disabled={!haveMoreTweetsToFetch}>
          { haveMoreTweetsToFetch ?
            'Carregar mais tweets':
            'Que pena, não temos mais tweets para exibir :('
          }
      </Button>
    </Container>
  )
}