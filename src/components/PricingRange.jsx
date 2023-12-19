import { Select, SelectItem } from "@nextui-org/react";

export default function PricingRange({}) {
  // const handlePriceChange = (value) => setSelectedPriceRange(value);
  const priceRanges = ["$0-$100", "$100-$500", "$500-$1000", "$1000-$5000"];
  return (
    <Select
      variant="faded"
      label="Price Range"
      className="w-1/4 mr-2"
      client:load
    >
      {priceRanges.map((range) => (
        <SelectItem key={range} value={range}>
          {range}
        </SelectItem>
      ))}
    </Select>
  );
}
