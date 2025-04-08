"use client";

import { useState } from "react";
import BookCard from "../components/common/BookCard/BookCard";

export default function dashboard() {
  const bookdata: any = [
    {
      id: 1,
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-the-hindu-god-lord-krishna-is-depicted-image_2682659.jpg",
      title: "Bhagavad Gita",
      author: "Vyasa",
      price: "12.99",
      description:
        "The timeless Hindu scripture on duty, devotion, and spirituality.",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "10.99",
      description:
        "A magical story about following one's dreams and self-discovery.",
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg",
      title: "Ikigai",
      author: "Héctor García, Francesc Miralles",
      price: "15.99",
      description:
        "A Japanese philosophy for finding purpose and happiness in life.",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/81FsPkaeK+L._SL1500_.jpg",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "16.99",
      description:
        "An exploration of human history from evolution to modern society.",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._SL1500_.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "9.99",
      description:
        "A financial classic about wealth building and financial education.",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/81drfTT9ZfL._SL1500_.jpg",
      title: "Atomic Habits",
      author: "James Clear",
      price: "14.99",
      description:
        "A guide on building good habits and breaking bad ones effectively.",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/81eB+7+CkUL._SL1500_.jpg",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: "13.49",
      description:
        "A spiritual book about mindfulness and living in the present moment.",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "11.99",
      description: "Understanding the way people think about money and wealth.",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "10.99",
      description:
        "A magical story about following one's dreams and self-discovery.",
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg",
      title: "Ikigai",
      author: "Héctor García, Francesc Miralles",
      price: "15.99",
      description:
        "A Japanese philosophy for finding purpose and happiness in life.",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/81FsPkaeK+L._SL1500_.jpg",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "16.99",
      description:
        "An exploration of human history from evolution to modern society.",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/81FsPkaeK+L._SL1500_.jpg",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "16.99",
      description:
        "An exploration of human history from evolution to modern society.",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._SL1500_.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "9.99",
      description:
        "A financial classic about wealth building and financial education.",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/81FsPkaeK+L._SL1500_.jpg",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "16.99",
      description:
        "An exploration of human history from evolution to modern society.",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._SL1500_.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "9.99",
      description:
        "A financial classic about wealth building and financial education.",
    },
  ];

  return (
    <div className="flex  flex-wrap gap-2 p-1">
      {bookdata.map((data: any) => {
        return (
          <BookCard
            id={data.id}
            image={data.image}
            title={data.title}
            author={data.author}
            price={data.price}
            description={data.description}
          />
        );
      })}
    </div>
  );
}
