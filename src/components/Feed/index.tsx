import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import SocketContext from '../../contexts/socket'
import AuthContext from '../../contexts/auth'
import formatTweets from '../../utils/formatTweets'
import mergeTweets from '../../utils/mergeTweets'
import api from '../../services/api'
import { Container, TweetNotification } from './styles';
import TweetList from '../TweetList'
import Button from '../Button'

import { Tweet } from '../../interfaces/Tweet'

export default function Feed() {
  const [tweets, setTweets] = useState<Tweet[]>([] as Tweet[])
  const [tweetsReceivedBySocket, setTweetsReceivedBySocket] = useState<Tweet[]>([])
  const [haveMoreTweetsToFetch, setHaveMoreTweetsToFetch] = useState<boolean>(true)
  const currentPage = useRef(1)
  const {socket, connectSocket } = useContext(SocketContext)
  const { user } = useContext(AuthContext)

  const mergeTweetsFetchedBySocket = useCallback(() => {
    setTweets(currentTweets => [...formatTweets(tweetsReceivedBySocket), ...currentTweets])
    setTweetsReceivedBySocket([])
  }, [tweetsReceivedBySocket])

  const getFormattedTweetsPage = useCallback(async () => {
    const { data: fetchedTweets } = await api.get(`/feed?page=${currentPage.current}`)

    const formatedTweets = formatTweets(fetchedTweets)
    
    if(formatedTweets.length === 0) {
      setHaveMoreTweetsToFetch(false)
      return []      
    }
    
    currentPage.current += 1

    return formatedTweets
  }, [])

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

  useEffect(() => {
    const { id } = user

    if(!socket.on) {
      connectSocket(id)
    } else {
      socket.on('get tweet', (tweet: Tweet) => {
        setTweetsReceivedBySocket(state => [tweet, ...state])
      })
    }
  }, [connectSocket, socket, user])

  return (
    <Container>
      { !!tweetsReceivedBySocket.length && 
        (<TweetNotification onClick={mergeTweetsFetchedBySocket}>
          { tweetsReceivedBySocket.length }
          { tweetsReceivedBySocket.length > 1 ? ' novos tweets' : ' novo tweet'}
        </TweetNotification>)
      }

      <TweetList tweets={tweets}/>

      <Button size="full" onClick={handleLoadMoreTweets} disabled={!haveMoreTweetsToFetch}>
        { haveMoreTweetsToFetch ?
          'Carregar mais tweets':
          'Que pena, não temos mais tweets para exibir :('
        }
      </Button>
    </Container>
  );
}
