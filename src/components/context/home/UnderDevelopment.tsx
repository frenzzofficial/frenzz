import React from "react";

const UnderDevelopment = () => {
  return (
    <>
      <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center p-4 font-sans antialiased">
        {/* Container for the content */}
        <div className="text-center max-w-lg">
          {/* Animated Icon/Text */}
          <div className="mb-8">
            <svg
              className="w-20 h-20 md:w-24 md:h-24 mx-auto text-primary animate-pulse-slow transition-transform transform hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
            Under Development
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
            We&apos;re working hard to bring this page to life! Please check
            back soon for a beautiful, new experience.
          </p>

          {/* Call to Action or Info */}
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              For inquiries, you can reach out to us.
            </p>
          </div>
        </div>

        {/* Tailwind CSS keyframes for custom animation */}
        <style>{`
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default UnderDevelopment;
