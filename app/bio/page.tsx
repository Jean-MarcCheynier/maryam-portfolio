import Image from "next/image";
import type React from "react";

type BiographyProps = {
  name: string;
  photoUrl: string;
  bio: string;
  highlights: string[];
};

const Biography: React.FC<BiographyProps> = () => {
  const highlights = ["this is a highlight", "this is another highlight"];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        {/* Artist Photo */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0">
          <Image
            width={200}
            height={200}
            src="/profile-picture.png"
            alt={`maryam's portrait`}
            className="rounded-full shadow-md object-cover w-full h-full"
          />
        </div>

        {/* Artist Info */}
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Maryam
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {"this is a bio"}
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Highlights</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {highlights.map((highlight, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Biography;
