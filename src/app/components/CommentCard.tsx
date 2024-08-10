"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import io, { Socket } from "socket.io-client";
import { IoMdSend } from "react-icons/io";

// Define types
interface Comment {
  id: number;
  text: string;
  createdAt: string;
}

const CommentCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0); // Default to first section
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io("http://localhost:3001");
    setSocket(socketIo);

    socketIo.on("connect", () => {
      console.log("Connected to server");
      socketIo.emit("subscribeComments"); // Subscribe to comments updates
    });

    socketIo.on("commentsUpdate", (data: Comment[]) => {
      console.log("Comments updated:", data); // Debug log
      setComments(data); // Update the comments list
    });

    socketIo.on("commentAdded", (newComment: Comment) => {
      console.log("New comment added:", newComment); // Debug log
      setComments((prevComments) => {
        // Prevent duplicates by checking if the comment already exists
        return prevComments.some((comment) => comment.id === newComment.id)
          ? prevComments
          : [...prevComments, newComment];
      });
    });

    socketIo.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveSection(index);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      socket?.emit("postComment", { text: newComment }); // Use 'text' field here
      setNewComment(""); // Clear input field after submitting
    }
  };

  const handleDelete = (id: number) => {
    socket?.emit("deleteComment", id);
  };

  return (
    <div className="comment-card bg-gray-900 text-white flex flex-col w-[1000px] shadow-md overflow-hidden text-xs font-sans">
      {/* Top Row of Buttons */}
      <div className="flex border-b border-gray-700">
        {["Comments", "Order History", "Trade", "Subscriptions", "Orders"].map(
          (title, index) => (
            <button
              key={index}
              className={`flex-1 py-2 text-center ${
                activeSection === index
                  ? "bg-gray-800 border-b-2 border-yellow-400"
                  : "bg-gray-900"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {title}
            </button>
          )
        )}
      </div>

      {/* Bottom Content Sections */}
      <div className="flex-1 p-4 bg-gray-800 overflow-scroll">
        {activeSection === 0 && (
          <div className="bg-gray-900 p-4 rounded-md h-full flex flex-col">
            <div className="flex-1 overflow-auto mb-4">
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              {comments.length === 0 ? (
                <p className="text-gray-400 text-center">
                  No comments available
                </p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-800 p-3 mb-2 rounded relative"
                  >
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-400"
                    >
                      &#10005;
                    </button>
                    <p className="text-sm">{comment.text}</p>
                    <p className="text-xs text-gray-500 absolute bottom-2 right-2">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
            {/* Input form for posting comments */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={newComment}
                onChange={handleChange}
                placeholder="Got any comments?"
                className="flex-1 bg-gray-700 p-2 rounded-l text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-10 h-8 bg-yellow-500 rounded-r flex items-center justify-center hover:bg-yellow-400"
              >
                <IoMdSend className="text-gray-900" />
              </button>
            </form>
          </div>
        )}
        {activeSection !== 0 && (
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">
              {" "}
              {
                [
                  "Comments",
                  "Order History",
                  "Trade",
                  "Subscriptions",
                  "Orders",
                ][activeSection]
              }
            </h3>
            <p className="text-center">
              Please
              <button className="ml-1 mr-1 font-bold text-yellow-400">
                login
              </button>
              or
              <button className="ml-1 mr-1 font-bold text-yellow-400">
                sign up
              </button>
              to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
