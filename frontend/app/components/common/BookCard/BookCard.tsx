"use client";

import { useState } from "react";

interface BookProps {
  image: string;
  title: string;
  author: string;
  price: string;
  description: string;
}

export default function BookCard({
  image,
  title,
  author,
  price,
  description,
}: BookProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-40 h-60 perspective-1000 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Cover */}
      <div className="relative w-full h-full bg-cyan-950 rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-cyan-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        {/* Book Spine */}
        <div className="absolute  top-0 w-2 h-full bg-blend-lighten shadow-lg shadow-text-amber-50"></div>
      </div>

      {/* Hover Effect - Book Details */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full bg-gray-950 p-2 text-center rounded-lg shadow-lg">
          <h3 className="text-sm font-bold  text-amber-50 ">{title}</h3>
          <p className="text-xs text-amber-50">by {author}</p>
          <p className="text-xs text-amber-50 mt-1">{description}</p>
          <p className="text-sm font-semibold text-green-600 mt-2">${price}</p>
        </div>
      )}
    </div>
  );
}
