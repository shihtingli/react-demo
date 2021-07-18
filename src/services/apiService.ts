import PostListData from '../datas/postList.json'

export type PostList = { id: number; date: String; title: String }[]

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const getPostList = async () => {
  await delay(3000)
  const postData = PostListData
  return postData
}

export { getPostList }
