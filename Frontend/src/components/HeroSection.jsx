import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-[#FFF1DB] text-[#EF5A6F] font-medium">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get your{" "}
          <span className="text-[#EF5A6F]">Dream Job</span>
        </h1>
        <p>
          Enim consequat id laboris ea culpa. Aliquip nulla exercitation fugiat
          labore sit non quis irure qui.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#EF5A6F]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
