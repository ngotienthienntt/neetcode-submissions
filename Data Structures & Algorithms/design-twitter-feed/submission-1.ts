class Twitter {
    users: Array<number>
    tweets: Array<number>
    userTweets: Array<any>
    follows: Array<any>

    constructor() {
        this.users = []
        this.tweets = []
        this.userTweets = []
        this.follows = []
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        this.userTweets.push({userId, tweetId})
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        let top10 = []
        let followees = [userId]

        for(let i = 0; i < this.follows.length; i++){
            if(this.follows[i].followerId == userId){
                followees.push(this.follows[i].followeeId)
            }
        }

        for(let i = this.userTweets.length - 1; i >= 0; i--){
            if(top10.length >= 10) break;
            if(followees.includes(this.userTweets[i].userId)){
                top10.push(this.userTweets[i].tweetId)
            }
        }

        return top10
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        let indexOf = -1
        for(let i = 0; i < this.follows.length; i++){
            if(this.follows[i]?.followerId == followerId 
            && this.follows[i]?.followeeId == followeeId){
                indexOf = i
                break;
            }
        }
        if(indexOf == -1){
            this.follows.push({followerId, followeeId})
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        let indexOf = -1
        for(let i = 0; i < this.follows.length; i++){
            if(this.follows[i]?.followerId == followerId 
            && this.follows[i]?.followeeId == followeeId){
                indexOf = i
                break;
            }
        }

        if(indexOf != -1){
            this.follows.splice(indexOf, 1)
        }
    }
}
