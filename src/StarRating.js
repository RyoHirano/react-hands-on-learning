import { useState } from "react";
import { Star } from "./Star";

export default function StarRating({
  totalStarts = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {[...Array(totalStarts)].map((n, i) => (
        <Star
          key={i}
          onSelect={() => onRate(i + 1)}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} stars
      </p>
    </>
  );
}
