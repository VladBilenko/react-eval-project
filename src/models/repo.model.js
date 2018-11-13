import DateUtil from '../utils/Date-util'

export default class Repo {
  constructor (item) {
    this.id = item.id
    this.createdAt = DateUtil.transformResponseDateString(item.created_at)
    this.forks = item.forks_count
    this.url = item.git_url
    this.openIssues = item.open_issues_count
    this.watchers = item.watchers_count
  }
}
