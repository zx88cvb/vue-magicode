// AD 常量
export const AD = {
  TYPE_KEY: {
    PC_INDEX: () => 'pc_index',
    PC_LINK: () => 'pc_link'
  },
  AD_KEY: {
    PC_INDEX_LOOP: () => 'pc_index_loop',
    PC_INDEX_TOP_MENU: () => 'pc_index_top_menu',
    PC_INDEX_LIST_CATEGORY: () => 'pc_index_list_category',
    PC_LINK_LIST: () => 'pc_link_list'
  }
}

// 文章喜欢常量
export const BLOG = {
  LIKE: {
    ARTICLE_LIKE: (articleId) => 'article_like_' + articleId
  }
}
