"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BookProps {
  id: number;
  image: string;
  title: string;
  author: string;
  price: string;
  description: string;
}

export default function BookCard({
  id,
  image,
  title,
  author,
  price,
  description,
}: BookProps) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleBuy = () => {
    router.push(`/checkout/${id}`);
  };

  const handleViewDetails = () => {
    router.push(`/books/${id}`);
  };

  return (
    <div
      className="relative w-64 h-96 m-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      {/* Book Cover */}
      <div
        className={`relative w-full h-full rounded-xl overflow-hidden shadow-lg transform transition duration-500 ${
          isHovered ? "scale-105 shadow-cyan-500" : ""
        }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Book Spine */}
        {!isHovered && (
          <div className="absolute left-0 top-0 w-2 h-full bg-black opacity-20"></div>
        )}
      </div>

      {/* Book Title (shown when not hovered) */}
      {!isHovered && (
        <h3 className="absolute bottom-2 left-2 text-white text-base font-semibold bg-black px-2 py-1 rounded">
          {title}
        </h3>
      )}

      {/* Hovered Details */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 text-white rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm mb-1 italic">by {author}</p>
            <p className="text-sm text-amber-100 mb-3 line-clamp-4">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-green-400">${price}</p>
            <div className="space-x-2">
              <button
                className="redBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuy();
                }}
              >
                Buy
              </button>
              <button className="yelloBtn">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
