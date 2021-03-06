import { User } from '../models'
import followingList from './followingList'

export default async (obj, { userId }, ctx, info) => {
  // Unfollow
  await ctx.user.removeFollowing(userId)

  return { id: userId }
}
