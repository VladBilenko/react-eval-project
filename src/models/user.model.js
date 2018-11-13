export default class User {
  constructor (user) {
    this.head = {
      avatar: user.avatar_url,
      name: user.name,
      bio: user.bio
    }
    this.main = {
      blog: user.blog,
      createdAt: user.created_at,
      followers: user.followers,
      following: user.following,
      gists: user.public_gists,
      repos: user.public_repos,
      updatedAt: user.updated_at
    }
  }
}
