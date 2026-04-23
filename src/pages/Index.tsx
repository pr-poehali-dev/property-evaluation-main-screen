const PHOTO_URL =
  "https://cdn.poehali.dev/projects/9681f9cf-1910-4e6b-81b0-1141b86e5856/bucket/389c5f12-e0b8-40c9-ae15-291311b2b3a3.jpg";

const stats = [
  { value: "15+", label: "שנות ניסיון" },
  { value: "2,400+", label: "שמאויות" },
  { value: "98%", label: "שביעות רצון" },
];

export default function Index() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white overflow-hidden"
      style={{ fontFamily: "Heebo, sans-serif" }}
    >
      {/* ===== NAV ===== */}
      <header className="absolute top-0 right-0 left-0 z-30 flex items-center justify-between px-10 md:px-16 py-7">
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <span
            className="text-forest-900 text-lg font-bold tracking-wide"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            שמאות מקרקעין
          </span>
        </div>
        <nav
          className="hidden md:flex gap-10 text-sm font-medium text-forest-600 opacity-0 animate-fade-in"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          {["שירותים", "אודות", "צור קשר"].map((item) => (
            <a key={item} href="#" className="relative group text-forest-600 hover:text-forest-900 transition-colors duration-200">
              {item}
              <span className="absolute -bottom-0.5 right-0 left-0 h-px bg-forest-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </a>
          ))}
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <div className="relative min-h-screen flex">

        {/* ---- LEFT TEXT COLUMN ---- */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-10 md:px-16 pt-32 pb-20 min-h-screen">

          {/* Label */}
          <div
            className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="w-8 h-px bg-forest-700" />
            <span className="text-forest-600 text-xs font-medium tracking-[0.2em] uppercase">
              שמאי מקרקעין מוסמך
            </span>
          </div>

          {/* BIG headline */}
          <h1
            className="opacity-0 animate-fade-up-delay"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              animationFillMode: "forwards",
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
              lineHeight: 1.13,
              fontWeight: 900,
              color: "#0f2b12",
              letterSpacing: "-0.01em",
            }}
          >
            שמאות מקרקעין<br />
            <span style={{ color: "#266b2b" }}>שמייצרת</span>
            <br />
            ודאות מלאה
          </h1>

          {/* Thick green underline */}
          <div
            className="mt-6 mb-8 opacity-0 animate-fade-up-delay"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="h-1 w-20 bg-forest-700 rounded-full" />
          </div>

          {/* Body text */}
          <p
            className="text-forest-800 opacity-0 animate-fade-up-delay2 max-w-[480px]"
            style={{ animationFillMode: "forwards", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה
            הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה
            בלי הפתעות שיעלו ביוקר.
          </p>

          {/* CTA */}
          <div className="mt-10 opacity-0 animate-fade-up-delay3" style={{ animationFillMode: "forwards" }}>
            <button
              className="group relative overflow-hidden bg-forest-800 text-white text-base font-semibold px-10 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-forest-900/30"
              style={{ letterSpacing: "0.02em" }}
            >
              <span className="absolute inset-0 bg-forest-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              <span className="relative">לתיאום שיחת ייעוץ ללא עלות</span>
            </button>
            <p className="text-forest-400 text-xs mt-3 tracking-wide">
              ✓ ללא התחייבות &nbsp;·&nbsp; ✓ תגובה תוך 24 שעות
            </p>
          </div>

          {/* Stats */}
          <div
            className="mt-16 flex gap-10 opacity-0 animate-fade-up-delay3"
            style={{ animationFillMode: "forwards", animationDelay: "0.65s" }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-start gap-3">
                {i > 0 && <div className="w-px h-10 bg-forest-200 self-center" />}
                <div>
                  <div
                    className="text-forest-900 font-bold leading-none"
                    style={{ fontFamily: '"Frank Ruhl Libre", serif', fontSize: "1.9rem" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-forest-500 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: CUTOUT PERSON ---- */}
        <div
          className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[50%] items-end justify-center z-0 pointer-events-none opacity-0 animate-slide-in-right"
          style={{ animationFillMode: "forwards" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(38,107,43,0.07) 0%, transparent 70%)",
            }}
          />
          <img
            src={PHOTO_URL}
            alt="ראש החברה"
            className="relative z-10 w-auto object-contain object-bottom"
            style={{
              height: "94vh",
              maxHeight: "900px",
              filter: "drop-shadow(-12px 0 40px rgba(0,0,0,0.10))",
            }}
          />
        </div>

        {/* ---- MOBILE ---- */}
        <div className="lg:hidden w-full flex flex-col">
          <div className="px-6 pt-28 pb-6">
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
            <div className="h-1 w-14 bg-forest-700 rounded-full mb-5" />
            <p className="text-forest-700 text-base leading-relaxed mb-7">
              ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
            </p>
            <button className="w-full bg-forest-800 text-white font-semibold text-base py-4 mb-2">
              לתיאום שיחת ייעוץ ללא עלות
            </button>
            <p className="text-forest-400 text-xs text-center">✓ ללא התחייבות · ✓ תגובה תוך 24 שעות</p>
          </div>
          <div className="flex justify-center bg-gradient-to-b from-white to-forest-50 pt-4">
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              className="h-[380px] w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 -4px 20px rgba(0,0,0,0.08))" }}
            />
          </div>
        </div>
      </div>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-forest-950 px-10 md:px-16 py-5 flex flex-wrap items-center justify-end gap-8 relative z-20">
        {["רשיון שמאי מקרקעין", "חבר לשכת שמאי המקרקעין", "ביטוח מקצועי מלא"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-green-300">
            <span className="text-green-400 text-base">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
