const PHOTO_URL =
  "https://cdn.poehali.dev/projects/9681f9cf-1910-4e6b-81b0-1141b86e5856/bucket/fbef8a9a-ae90-47cf-a7e5-ac231c44c6ae.png";

const stats = [
  { value: "15+", label: "שנות ניסיון" },
  { value: "2,400+", label: "שמאויות" },
  { value: "98%", label: "שביעות רצון" },
];

export default function Index() {
  return (
    // NO dir="rtl" on root — we handle text alignment manually per block
    <div className="min-h-screen bg-white overflow-hidden" style={{ fontFamily: "Heebo, sans-serif" }}>

      {/* ===== NAV ===== */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 md:px-16 py-7">
        {/* Logo — left */}
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <span
            className="text-forest-900 text-lg font-bold tracking-wide"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            שמאות מקרקעין
          </span>
        </div>
        {/* Nav links — right, RTL text */}
        <nav
          className="hidden md:flex gap-10 text-sm font-medium text-forest-600 opacity-0 animate-fade-in"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          dir="rtl"
        >
          {["שירותים", "אודות", "צור קשר"].map((item) => (
            <a key={item} href="#" className="relative group hover:text-forest-900 transition-colors duration-200">
              {item}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-forest-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <div className="relative min-h-screen flex flex-row">

        {/* ---- LEFT: TEXT COLUMN ---- */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-10 md:px-16 pt-32 pb-20 min-h-screen">

          {/* Label */}
          <div
            className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", direction: "rtl" }}
          >
            <div className="w-8 h-px bg-forest-700" />
            <span className="text-forest-600 text-xs font-medium tracking-[0.2em] uppercase">
              שמאי מקרקעין מוסמך
            </span>
          </div>

          {/* BIG headline — RTL text, left-aligned column */}
          <h1
            className="opacity-0 animate-fade-up-delay"
            dir="rtl"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              animationFillMode: "forwards",
              fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)",
              lineHeight: 1.13,
              fontWeight: 900,
              color: "#0f2b12",
              letterSpacing: "-0.01em",
              textAlign: "right",
            }}
          >
            שמאות מקרקעין<br />
            <span style={{ color: "#266b2b" }}>שמייצרת</span>
            <br />
            ודאות מלאה
          </h1>

          {/* Accent bar */}
          <div
            className="mt-6 mb-8 opacity-0 animate-fade-up-delay"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="h-[3px] w-20 bg-forest-700 rounded-full" />
          </div>

          {/* Body text */}
          <p
            className="text-forest-700 opacity-0 animate-fade-up-delay2 max-w-[500px]"
            dir="rtl"
            style={{
              animationFillMode: "forwards",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              textAlign: "right",
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
              className="group relative overflow-hidden bg-forest-800 text-white text-base font-semibold px-10 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-forest-900/25"
              style={{ letterSpacing: "0.02em" }}
            >
              <span className="absolute inset-0 bg-forest-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative">לתיאום שיחת ייעוץ ללא עלות</span>
            </button>
            <p className="text-forest-400 text-xs mt-3 tracking-wide">
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
                {i > 0 && <div className="w-px bg-forest-200 mx-8 self-stretch" />}
                <div dir="rtl">
                  <div
                    className="text-forest-900 font-bold leading-none"
                    style={{ fontFamily: '"Frank Ruhl Libre", serif', fontSize: "2rem" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-forest-500 text-xs mt-1.5 tracking-wide">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: CUTOUT PERSON ---- */}
        {/* 
          The photo already has background — we simulate cutout by:
          1. Showing photo full height
          2. Adding a white gradient from right edge to hide background
          3. Using drop-shadow for depth
        */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none"
        >
          {/* Subtle green glow at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 z-10"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(38,107,43,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Person image — bottom-aligned, full height */}
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
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.13))",
              }}
            />
          </div>

          {/* Fade from right edge back to white — removes any background remnants */}
          <div
            className="absolute top-0 right-0 bottom-0 w-16 z-20"
            style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
          />
          <div
            className="absolute top-0 bottom-0 left-0 w-8 z-20"
            style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
          />
        </div>

        {/* ---- MOBILE ---- */}
        <div className="lg:hidden w-full flex flex-col">
          <div className="px-6 pt-28 pb-6" dir="rtl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-forest-600" />
              <span className="text-forest-600 text-xs tracking-widest uppercase">שמאי מקרקעין מוסמך</span>
            </div>
            <h1
              className="text-forest-950 font-black mb-4"
              style={{ fontFamily: '"Frank Ruhl Libre", serif', fontSize: "2.4rem", lineHeight: 1.18 }}
            >
              שמאות מקרקעין <span className="text-forest-700">שמייצרת</span> ודאות מלאה
            </h1>
            <div className="h-[3px] w-14 bg-forest-700 rounded-full mb-5" />
            <p className="text-forest-700 text-base leading-relaxed mb-7">
              ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
            </p>
            <button className="w-full bg-forest-800 text-white font-semibold text-base py-4 mb-2">
              לתיאום שיחת ייעוץ ללא עלות
            </button>
            <p className="text-forest-400 text-xs text-center">✓ ללא התחייבות · ✓ תגובה תוך 24 שעות</p>
          </div>
          <div className="flex justify-center overflow-hidden" style={{ background: "linear-gradient(to bottom, white, #f0f7f0)" }}>
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              className="h-[370px] w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.10))" }}
            />
          </div>
        </div>
      </div>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-forest-950 px-10 md:px-16 py-5 flex flex-wrap items-center justify-end gap-8 relative z-20" dir="rtl">
        {["רשיון שמאי מקרקעין", "חבר לשכת שמאי המקרקעין", "ביטוח מקצועי מלא"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-green-300">
            <span className="text-green-400">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}