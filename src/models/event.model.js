import DateUtil from '../utils/Date-util'

export default class Event {
  constructor (item) {
    this.id = item.id
    this.createdAt = DateUtil.transformResponseDateString(item.created_at)
    this.repoName = item.repo.name
    this.payload = this.__getValueFromPayload(item.payload)
  }

  __getValueFromPayload (payload) {
    if (payload.comment) {
      return `Comment: ${payload.comment.body}`
    } else if (payload.issue) {
      return `Issue: ${payload.issue.body}`
    } else if (payload.ref && payload.ref_type) {
      return `Push: "${payload.ref}" into "{ref_type}"`
    } else if (payload.distinct_size && payload.commits && payload.ref) {
      return `Commits: "${payload.distinct_size}" to "${payload.ref}"`
    } else if (payload.pull_request) {
      return `Pull request: ${payload.pull_request.body}`
    } else {
      return 'Other event'
    }
  }
}
