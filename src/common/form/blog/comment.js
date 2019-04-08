export default class CommentForm {
  constructor ({id, pId, articleId, userId, nickname, email, website, content}) {
    this.id = id
    this.pId = pId
    this.articleId = articleId
    this.userId = userId
    this.nickname = nickname
    this.email = email
    this.website = website
    this.content = content
  }
}

export function createCommentEmpty () {
  return new CommentForm({
    id: -1,
    pId: 0,
    articleId: 0,
    userId: 0,
    nickname: null,
    email: null,
    website: null,
    content: null
  })
}
