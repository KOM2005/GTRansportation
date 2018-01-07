import React, { Component } from 'react';
import style from './../styles/postStyle.css';

// Example as a stateful component (though we don't use state here)
// class Post extends Component {
// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-12">
// 						<h1>{this.props.postData.title} ({this.props.postData._id})</h1>
// 						<p className="author-text">{this.props.postData.author}</p>
// 						<p className="body-text">{this.props.postData.body}</p>
// 						<pre style={ { 'background-color': '#33FFFF'} }>{JSON.stringify(this.props.postData,null,2)}</pre>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }


// Example of a simple arrow function returning some JSX
let Post = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1>{props.postData.title} ({props.postData._id})</h1>
					<p className="author-text">{props.postData.author}</p>
					<p className="body-text">{props.postData.body}</p>
					<pre style={ { 'background-color': '#33FFFF'} }>{JSON.stringify(props.postData,null,2)}</pre>
				</div>
			</div>
		</div>
	);
};

export default Post;
