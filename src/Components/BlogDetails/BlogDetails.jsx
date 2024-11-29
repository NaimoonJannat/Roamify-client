import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const id = useParams();
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [expandedComments, setExpandedComments] = useState({}); // Track expanded state for comments
    const [collapsedReplies, setCollapsedReplies] = useState({}); // Track collapsed state for replies

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/blog.json");
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };
        fetchData();
    }, []);

    const singleblog = blogs.find((blog) => blog.id === parseInt(id.id));

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const comment = event.target.comment.value;

        const newComment = {
            id: Date.now(),
            name,
            email,
            comment,
            replies: [],
        };

        setComments([...comments, newComment]);
        event.target.reset();
    };

    const handleReplySubmit = (commentId, replyText) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? { ...comment, replies: [...comment.replies, replyText] }
                    : comment
            )
        );
    };

    const handleCommentToggle = (commentId) => {
        setExpandedComments((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    const handleReplyToggle = (commentId) => {
        setCollapsedReplies((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    // Function to limit the comment text to the first 15 words
    const getTruncatedText = (text) => {
        const words = text.split(" ");
        return words.length > 15 ? words.slice(0, 15).join(" ") + "..." : text;
    };

    // Function to check if we should show "See more..." based on reply count
    const shouldShowReplyToggle = (replies) => replies.length > 2;

    return (
        <div className="max-w-4xl mx-auto overflow-hidden bg-white pt-[200px]">
            {/* Blog Details Section */}
            <img
                className="object-cover w-full md:h-[450px]"
                src={singleblog?.image}
                alt="blog-image"
            />
            <div className="p-6">
                <h1 className="text-2xl font-bold">{singleblog?.title}</h1>
                <p className="mt-4 text-gray-700">{singleblog?.description}</p>
            </div>

            {/* Comments Section */}
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6">Comments</h2>

                <div id="comments-container" className="space-y-6">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="p-4 border rounded-lg shadow-sm space-y-2"
                        >
                            <div className="flex justify-between items-center">
                               <div className="flex items-center space-x-4">
                               <img
                                    src="https://i.ibb.co.com/Sw0D45n/md-junayed-hossain-qyo-XIEq-Cy-FA-unsplash.jpg"
                                    alt="loggin user image"
                                    className="w-10 h-10 object-contain object-center ring-2 ring-primary rounded-full mr-3"
                                />
                                <div>
                                <h4 className="text-lg font-bold">{comment.name}</h4>
                                <p>Date / time</p>
                                </div>
                               </div>

                                <div>
                                <button
                                className="hover:text-primary"
                                onClick={() => {
                                    const replyText = prompt("Write your reply:");
                                    if (replyText) handleReplySubmit(comment.id, replyText);
                                }}
                            >
                                Reply
                            </button>
                                </div>
                            </div>

                            {/* Truncated Comment Text */}
                            <p className="text-gray-700">
                                {expandedComments[comment.id]
                                    ? comment.comment
                                    : getTruncatedText(comment.comment)}
                            </p>

                            {/* Toggle Button for 'See more...' for comment */}
                            {comment.comment.split(" ").length > 15 && (
                                <button
                                    className="text-sm text-primary mt-2"
                                    onClick={() => handleCommentToggle(comment.id)}
                                >
                                    {expandedComments[comment.id] ? "Show Less" : "See more..."}
                                </button>
                            )}

                            {/* Replies */}
                            <div className="w-full mt-8">
                                {comment.replies.length > 0 && (
                                    <>
                                        {/* Show replies: either the first 2, or all based on the toggle */}
                                        <div className="ml-6 mt-2 space-y-2">
                                            {(collapsedReplies[comment.id]
                                                ? comment.replies
                                                : comment.replies.slice(0, 2)
                                            ).map((reply, index) => (
                                                <div
                                                    key={index}
                                                    className="flex p-3 border rounded-lg bg-red-200"
                                                >
                                                    <img
                                                        src="https://i.ibb.co.com/Sw0D45n/md-junayed-hossain-qyo-XIEq-Cy-FA-unsplash.jpg"
                                                        alt="loggin user image"
                                                        className="w-10 h-10 object-contain object-center ring-2 ring-primary rounded-full mr-3"
                                                    />
                                                    <div>
                                                    <h2>Replay_Man_Name</h2>
                                                    <p>Date / time</p>
                                                    <p className="text-gray-600 pt-4">{reply}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Show 'See more...' for replies if there are more than 2 replies */}
                                        {shouldShowReplyToggle(comment.replies) && (
                                            <button
                                                className="text-sm text-primary mt-2"
                                                onClick={() => handleReplyToggle(comment.id)}
                                            >
                                                {collapsedReplies[comment.id] ? "Show Less" : "See more..."}
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Form */}
                <form
                    className="mt-8 p-6 border rounded-lg shadow-sm space-y-4"
                    onSubmit={handleCommentSubmit}
                >
                    <h3 className="text-xl font-bold">Write Your Comment</h3>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name *"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="comment"
                            placeholder="Comment *"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-primary/80 text-white px-4 py-2 rounded-md hover:bg-primary"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;
