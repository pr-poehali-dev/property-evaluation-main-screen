const PHOTO_URL =
  "https://cdn.poehali.dev/projects/9681f9cf-1910-4e6b-81b0-1141b86e5856/bucket/fbef8a9a-ae90-47cf-a7e5-ac231c44c6ae.png";

const BG_URL =
  "https://cdn.poehali.dev/projects/9681f9cf-1910-4e6b-81b0-1141b86e5856/files/6ae31f6a-9336-44a2-a379-977e339c2e95.jpg";

const stats = [
  { value: "15+", label: "שנות ניסיון" },
  { value: "2,400+", label: "שמאויות" },
  { value: "98%", label: "שביעות רצון" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-forest-950 overflow-hidden" style={{ fontFamily: "Heebo, sans-serif" }}>

      {/* ===== NAV ===== */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 md:px-16 py-7">
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <span
            className="text-white text-lg font-bold tracking-wide"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            שמאות מקרקעין
          </span>
        </div>
        <nav
          className="hidden md:flex gap-10 text-sm font-medium text-white/70 opacity-0 animate-fade-in"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          dir="rtl"
        >
          {["שירותים", "אודות", "צור קשר"].map((item) => (
            <a key={item} href="#" className="relative group hover:text-white transition-colors duration-200">
              {item}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <div className="relative min-h-screen flex flex-row">

        {/* Background image — dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={BG_URL}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay — full screen */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5, 14, 7, 0.88)" }}
          />
          {/* Extra dark on left for better text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(5,14,7,0.65) 0%, rgba(5,14,7,0.15) 60%, rgba(5,14,7,0.0) 100%)",
            }}
          />
          {/* Subtle green tint */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(38,107,43,0.12) 0%, transparent 60%)" }}
          />
        </div>

        {/* ---- LEFT: TEXT COLUMN ---- */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-10 md:px-16 pt-32 pb-20 min-h-screen">

          {/* Label */}
          <div
            className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", direction: "rtl" }}
          >
            <div className="w-8 h-px bg-green-400" />
            <span className="text-green-400 text-xs font-medium tracking-[0.2em] uppercase">
              שמאי מקרקעין מוסמך
            </span>
          </div>

          {/* Headline */}
          <h1
            className="opacity-0 animate-fade-up-delay"
            dir="rtl"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              animationFillMode: "forwards",
              fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)",
              lineHeight: 1.13,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              textAlign: "right",
            }}
          >
            שמאות מקרקעין<br />
            <span style={{ color: "#4ade80" }}>שמייצרת</span>
            <br />
            ודאות מלאה
          </h1>

          {/* Accent bar */}
          <div
            className="mt-6 mb-8 opacity-0 animate-fade-up-delay"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="h-[3px] w-20 bg-green-500 rounded-full" />
          </div>

          {/* Body text */}
          <p
            className="opacity-0 animate-fade-up-delay2 max-w-[500px]"
            dir="rtl"
            style={{
              animationFillMode: "forwards",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              textAlign: "right",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה
            הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה
            בלי הפתעות שיעלו ביוקר.
          </p>

          {/* CTA */}
          <div
            className="mt-10 opacity-0 animate-fade-up-delay3"
            style={{ animationFillMode: "forwards" }}
            dir="rtl"
          >
            <button
              className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-forest-950 text-base font-bold px-10 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/30"
              style={{ letterSpacing: "0.02em" }}
            >
              <span className="relative">לתיאום שיחת ייעוץ ללא עלות</span>
            </button>
            <p className="text-white/40 text-xs mt-3 tracking-wide">
              ✓ ללא התחייבות &nbsp;·&nbsp; ✓ תגובה תוך 24 שעות
            </p>
          </div>

          {/* Stats */}
          <div
            className="mt-16 flex gap-0 opacity-0 animate-fade-up-delay3"
            style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-stretch">
                {i > 0 && <div className="w-px bg-white/15 mx-8 self-stretch" />}
                <div dir="rtl">
                  <div
                    className="text-white font-bold leading-none"
                    style={{ fontFamily: '"Frank Ruhl Libre", serif', fontSize: "2rem" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-white/45 text-xs mt-1.5 tracking-wide">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: CUTOUT PERSON ---- */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[52%] items-end justify-center pointer-events-none">
          <div
            className="absolute inset-0 flex items-end justify-center overflow-hidden opacity-0 animate-slide-in-right"
            style={{ animationFillMode: "forwards" }}
          >
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              style={{
                height: "96vh",
                maxHeight: "920px",
                width: "auto",
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 0 60px rgba(74,222,128,0.12))",
              }}
            />
          </div>
        </div>

        {/* ---- MOBILE ---- */}
        <div className="lg:hidden w-full flex flex-col">
          <div className="px-6 pt-28 pb-6" dir="rtl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-green-400" />
              <span className="text-green-400 text-xs tracking-widest uppercase">שמאי מקרקעין מוסמך</span>
            </div>
            <h1
              className="text-white font-black mb-4"
              style={{ fontFamily: '"Frank Ruhl Libre", serif', fontSize: "2.4rem", lineHeight: 1.18 }}
            >
              שמאות מקרקעין <span className="text-green-400">שמייצרת</span> ודאות מלאה
            </h1>
            <div className="h-[3px] w-14 bg-green-500 rounded-full mb-5" />
            <p className="text-white/70 text-base leading-relaxed mb-7">
              ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
            </p>
            <button className="w-full bg-green-500 text-forest-950 font-bold text-base py-4 mb-2">
              לתיאום שיחת ייעוץ ללא עלות
            </button>
            <p className="text-white/40 text-xs text-center">✓ ללא התחייבות · ✓ תגובה תוך 24 שעות</p>
          </div>
          <div className="flex justify-center pt-4">
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              className="h-[370px] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 px-10 md:px-16 py-5 flex flex-wrap items-center justify-end gap-8 relative z-20" dir="rtl">
        {["רשיון שמאי מקרקעין", "חבר לשכת שמאי המקרקעין", "ביטוח מקצועי מלא"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-white/60">
            <span className="text-green-400">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}