import { Select, SelectItem } from "@nextui-org/react";

export default function PricingRange({}) {
  // const handleRatingChange = (value) => setSelectedRating(value);

  // Define rating options
  const ratings = ["1", "2", "3", "4", "5"];

  return (
    <Select label="Rating" variant="faded" className="w-1/4" client:load>
      {ratings.map((rating) => (
        <SelectItem key={rating} value={rating}>
          {rating}
        </SelectItem>
      ))}
    </Select>
  );
}
