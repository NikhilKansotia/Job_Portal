import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Mumbai", "Pune", "Hyderbad"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Bancend Developer",
      "FullStack Developer",
      "Data Scientists",
      "Graphic Designer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40K", "40K-1Lakh", "1Lakh-5Lakh", "5Lakh and above"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-[white] p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              return (
                <div className="flex items-center space-x-2 my-2" key={idx}>
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
