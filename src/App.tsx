import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LAUNCH_DATE = new Date("2026-11-18T00:00:00+05:30").getTime();

function getTimeRemaining(target: number) {
  const totalMs = Math.max(0, target - Date.now());

  return {
    totalMs,
    days: Math.floor(totalMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((totalMs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((totalMs / (1000 * 60)) % 60),
    seconds: Math.floor((totalMs / 1000) % 60),
  };
}

function useCountdown() {
  const [time, setTime] = useState(() =>
    getTimeRemaining(LAUNCH_DATE)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(LAUNCH_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

function Stat({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center
  rounded-xl border border-[#D4AF37]/60
  bg-black/65 backdrop-blur-md
  py-3 sm:py-4
  shadow-[0_0_20px_rgba(212,175,55,0.06)]"
    >
      <span className="text-3xl sm:text-4xl md:text-[2.75rem]
  font-bold tracking-tight text-[#E7BD55]
  tabular-nums">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-2 text-[10px] sm:text-xs
        md:text-sm font-semibold uppercase
        tracking-[0.15em] text-white">
        {label}
      </span>
    </motion.div>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 48 48"
      className="w-9 h-9 sm:w-10 sm:h-10 text-[#D4AF37]"
      {...common}
    >
      {type === "run" && (
        <>
          <path d="M8 31l8-3 7-9 7 4 8 2 3 5-9 2-7-3-8 8H8z" />
          <path d="M20 20l-2-7 6-4 5 6" />
          <path d="M11 36h5M20 36h5" />
        </>
      )}

      {type === "community" && (
        <>
          <circle cx="24" cy="15" r="6" />
          <circle cx="10" cy="20" r="4" />
          <circle cx="38" cy="20" r="4" />
          <path d="M12 39v-5c0-6 5-10 12-10s12 4 12 10v5z" />
          <path d="M3 38v-5c0-4 3-7 8-7M45 38v-5c0-4-3-7-8-7" />
        </>
      )}

      {type === "health" && (
        <>
          <path d="M24 40S5 29 5 17a9 9 0 0117-4l2 3 2-3a9 9 0 0117 4c0 12-19 23-19 23z" />
          <path d="M8 24h9l4-7 6 14 4-7h9" />
        </>
      )}

      {type === "challenge" && (
        <>
          <path d="M5 39l13-17 8 9 7-13 10 21z" />
          <path d="M29 18V6h10l-3 5 3 5H29" />
          <path d="M9 39h31" />
        </>
      )}
    </svg>
  );
}

const features = [
  { title: "Group Runs", icon: "run" },
  { title: "Community", icon: "community" },
  { title: "Health & Fitness", icon: "health" },
  { title: "New Challenges", icon: "challenge" },
];

export default function App() {
  const { totalMs, days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="relative isolate h-[100svh] w-full overflow-hidden bg-[#080808] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      />

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 -z-20
        bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

      <div className="absolute inset-0 -z-10
        bg-gradient-to-b from-black/45 via-transparent to-black/80" />

      {/* Decorative gold accents */}
      <div className="pointer-events-none absolute -left-12 -top-12
        -z-10 h-52 w-5 rotate-45 bg-[#D4AF37]/30 blur-[1px]" />

      <div className="pointer-events-none absolute -right-16 bottom-0
        -z-10 h-48 w-5 rotate-45 bg-[#D4AF37]/40" />

      <main className="relative mx-auto flex h-full w-full max-w-[1500px]
  flex-col items-center justify-center
  overflow-hidden px-4 py-3 sm:px-8 sm:py-4 md:px-12">

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex w-full max-w-2xl
            items-center justify-center gap-5 sm:gap-10"
        >
          {/* Existing Bemassive PT Studio Logo */}
          <div className="flex flex-1 justify-end">
            <img
              src="/bemassive-pt-logo.png"
              alt="Bemassive PT Studio"
              className="h-14 sm:h-20 md:h-24 w-auto
                max-w-full object-contain"
            />
          </div>

          {/* Gold Divider */}
          <div className="h-16 sm:h-24 w-px shrink-0
            bg-[#D4AF37]" />

          {/* Bemassive Run Club Logo */}
          <div className="flex flex-1 justify-start">
            <img
              src="/bemassive-run-club-logo.png"
              alt="Bemassive Run Club"
              className="h-14 sm:h-20 md:h-24 w-auto
                max-w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Launch Announcement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex w-full max-w-3xl items-center
            justify-center gap-3 sm:gap-6"
        >
          <div className="h-px flex-1 max-w-20 bg-[#D4AF37]" />

          <p className="text-[11px] sm:text-xs
  font-semibold uppercase tracking-[0.22em]
  text-white/75">
            We're Launching Soon
          </p>

          <div className="h-px flex-1 max-w-20 bg-[#D4AF37]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-center text-2xl
  font-extrabold uppercase italic tracking-tight
  leading-tight sm:text-3xl md:text-4xl
  lg:text-5xl"
        >
          <span className="text-white">BEMASSIVE </span>
          <span className="text-[#D4AF37]">RUN CLUB</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-2 text-center text-[11px]
  font-semibold uppercase tracking-[0.25em]
  text-white/70 sm:text-xs md:text-sm"
        >
          RUN <span className="mx-2 text-[#D4AF37]">•</span>
          CONNECT <span className="mx-2 text-[#D4AF37]">•</span>
          GROW
        </motion.p>

        {/* Countdown */}
        {totalMs > 0 ? (
          <div className="mt-9 grid w-full max-w-3xl
            grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-5">

            <Stat label="Days" value={days} delay={0.5} />
            <Stat label="Hours" value={hours} delay={0.6} />
            <Stat label="Minutes" value={minutes} delay={0.7} />
            <Stat label="Seconds" value={seconds} delay={0.8} />

          </div>
        ) : (
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 text-3xl font-black
              uppercase tracking-widest text-[#D4AF37]"
          >
            We're Live!
          </motion.h2>
        )}

        {/* Development Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-9 text-center text-sm
            font-bold uppercase tracking-[0.25em]
            text-[#D4AF37] sm:text-base md:text-lg"
        >
          Our Website Is Under Development
        </motion.p>

        {/* Supporting Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 flex w-full max-w-2xl
            items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-20 bg-white/40" />

          <p className="text-center text-sm italic
            text-white/90 sm:text-base md:text-lg">
            Stay Tuned for an Exciting Run Club Experience!
          </p>

          <div className="h-px flex-1 max-w-20 bg-white/40" />
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-9 grid w-full max-w-3xl
            grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center justify-center
                gap-2 px-2 sm:px-4
                ${index % 2 === 0 ? "" : ""}
                ${index !== 0 && index !== 2
                  ? "sm:border-l sm:border-[#D4AF37]/70"
                  : ""}
                ${index === 2
                  ? "sm:border-l sm:border-[#D4AF37]/70"
                  : ""}`}
            >
              <FeatureIcon type={feature.icon} />

              <span className="text-center text-xs
                font-medium text-white sm:text-sm md:text-base">
                {feature.title}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 text-center text-[10px]
            tracking-wide text-white/50 sm:text-xs"
        >
          © 2026 Bemassive Run Club. All Rights Reserved.
        </motion.footer>

      </main>
    </div>
  );
}
