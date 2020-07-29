import { Tweet } from '../interfaces/Tweet' 

export default function mergeTweets(begin: Tweet[], end: Tweet[]) {
  const mergedTweets = [...begin]
  
  end.forEach(tweet => {
    if(!mergedTweets.find(t => t.id === tweet.id))
      mergedTweets.push(tweet)
  })

  return mergedTweets
}