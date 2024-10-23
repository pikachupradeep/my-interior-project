"use client";
import { user02, user03, user04, user05, user06 } from "@/public/assets";


import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The design team exceeded our expectations! They transformed our living room into a modern and cozy space we absolutely love.",
    name: "Wanda Maximoff",
    title: "Marketing Manager",
    image: user02,
  },
  {
    quote:
      "Their attention to detail and creativity really stood out. Our new office space is both functional and beautiful.",
    name: "Aghata Ralf",
    title: "Business Owner",
    image: user03,
  },
  {
    quote: "The designers were professional and easy to work with. They captured exactly what we wanted for our new home.",
    name: "Edgar Allan Poe",
    title: "Software Engineer",
    image: user04,
  },
  {
    quote:
      "Highly recommend! The team made our small apartment feel so much bigger and more organized. We couldn't be happier with the results.",
    name: "Jane Austen",
    title: "Freelance Photographer",
    image: user05,
  },
  {
    quote:
      "Their expertise and eye for design made all the difference in our kitchen remodel. It feels like a completely new space!",
    name: "Herman Melville",
    title: "Architect",
    image: user06,
  },
];
