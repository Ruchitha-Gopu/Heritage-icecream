"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { videos } from "@/data/videos";

export default function Videos() {
  return (
    <section
      id="videos"
      className="w-full bg-blush/30 py-16 md:py-24"
    >
      {/* Full Screen Width */}
      <div className="w-full">
        <SectionHeading
          title="🎥 Shop Opening & Moments"
          subtitle="Watch our grand opening, store tour and preparation videos."
        />

        {/* Full Width Video */}
        <div className="mt-10 w-full">
          {videos.map((video, i) => (
            <Reveal
              key={video.id}
              delayMs={(i % 2) * 100}
            >
              <article className="w-full overflow-hidden bg-black shadow-scoop">
                
                {/* Video - Full Screen Width */}
                <div className="relative h-[70vh] w-full overflow-hidden bg-black md:h-[85vh]">
                  <video
                    controls
                    preload="metadata"
                    poster={video.thumbnail}
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source
                      src={video.video}
                      type="video/mp4"
                    />

                    Your browser does not support the video element.
                  </video>
                </div>

                {/* Content */}
                <div className="bg-white px-5 py-6 md:px-10 md:py-8">
                  <h3 className="font-display text-xl font-semibold text-cocoa md:text-2xl">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-cocoa/70 md:text-base">
                    {video.description}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}