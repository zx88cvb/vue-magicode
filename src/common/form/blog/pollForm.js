export default class PollForm {
  constructor ({id, articleId, userId, isPositive}) {
    this.id = id
    this.articleId = articleId
    this.userId = userId
    this.isPositive = isPositive
  }
}

export function createPollEmpty () {
  return new PollForm({
    id: -1,
    isPositive: 0,
    articleId: 0,
    userId: 0
  })
}
