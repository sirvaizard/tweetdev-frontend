import { Tweet } from '../interfaces/Tweet'

import formatDate from './formatDate'

export default function formatTweets(tweets: Tweet[]): Tweet[] {
  return tweets.map((tweet: Tweet) => {
    return ({
      ...tweet,
      time: formatDate(new Date(tweet.createdAt))
    })
  })
}