import posts from '../data/posts.json'

export const getPostById = ({ id }) => {
	const post = posts.find((post) => post.id === id)
	return post
}

export const getPosts = () => {
	return posts
}
