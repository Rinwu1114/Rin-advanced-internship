"use client";

import { useEffect, useState } from "react";

export default function Stats() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const heading1 = [
    "Enhance your knowledge",
    "Achieve greater success",
    "Improve your health",
    "Develop better parenting skills",
    "Increase happiness",
    "Be the best version of yourself!",
  ];

  const heading2 = [
    "Expand your learning",
    "Accomplish your goals",
    "Strengthen your vitality",
    "Become a better caregiver",
    "Improve your mood",
    "Maximize your abilities",
  ];

  return (
    <section id="stats">
      <div className="w-full mx-auto pt-0 pb-10">
        <div className="row">
          <div
            className="flex flex-col gap-8 md:gap-20 mb-8 md:mb-28 last:mb-0
          md:flex-row"
          >
            <div className="w-full flex flex-col justify-center">
              {heading1.map((heading1, index) => (
                <div
                  key={index}
                  className={` text-2xl md:text-[32px] font-medium mb-4 last:mb-0
                        ${
                          index === active
                            ? "text-[#2bda7cff]"
                            : "text-[#6b757b]"
                        }`}
                >
                  {heading1}
                </div>
              ))}
            </div>
            <div
              className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4]
            py-10 px-6"
            >
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  93%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  96%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  90%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-8 md:gap-20 mb-8 md:mb-28 last:mb-0
          md:flex-row"
          >
            <div
              className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4]
              py-10 px-6 items-end order-1
              md:order-0"
            >
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  91%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  of Summarist members <b>report feeling more productive</b>{" "}
                  after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  94%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="text-[#0365f2] text-xl font-semibold
                mt-1"
                >
                  88%
                </div>
                <div className="md:text-xl text-base font-light text-[#394547]">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center gap-8 md:gap-5 mb-28 last:mb-0
          md:flex-row"
            >
              <div
                className="w-full flex flex-col justify-center items-start md:items-end text-right
              "
              >
                {heading2.map((heading2, index) => (
                  <div
                    key={index}
                    className={`text-2xl md:text-[32px] font-medium mb-4 last:mb-0
                        ${
                          index === active
                            ? "text-[#2bda7cff]"
                            : "text-[#6b757b]"
                        }`}
                  >
                    {heading2}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
