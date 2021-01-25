import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';
import Loader from "../Global/Loader";
import Alert from "../Global/Alert";

const Lister = () => {

	const [loading, setLoading] = useState(true);
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(data => {
			setLoading(false);
			setPosts(data);
		});
	}, []);

	const onDeletePost = (id) => {
		setPosts(posts => posts.filter(post => post.id !== id));
	}

	const generateRandomId = () => {
		return Math.round(Math.random()*1000000);
	}

	const onCreatePost = post => {
		const newPost = {...post, id: generateRandomId()};
		setPosts(posts => posts.concat([newPost]));
	}

	return (
		<div className="postList">
			{loading && <Loader />}
			{!loading && (
				<>
					{allPosts.length === 0 && <Alert>No posts available...</Alert>}
					{allPosts.length > 0 && allPosts.map(post =>
						<Post {...post} onDelete={() => onDeletePost(post.id)} key={post.id} />
					)}
					<CreatePost onCreate={onCreatePost} />
				</>
			)}
		</div>
	)
};

export default Lister;