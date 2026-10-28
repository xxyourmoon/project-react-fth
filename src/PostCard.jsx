import React from "react";

function PostCard(props) {
  const { title, body } = props;

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-snug">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default PostCard;
