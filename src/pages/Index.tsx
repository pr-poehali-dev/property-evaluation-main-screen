const PHOTO_URL = "https://cdn.poehali.dev/projects/9681f9cf-1910-4e6b-81b0-1141b86e5856/bucket/389c5f12-e0b8-40c9-ae15-291311b2b3a3.jpg";

const stats = [
  { value: "15+", label: "שנות ניסיון" },
  { value: "2,400+", label: "שמאויות בוצעו" },
  { value: "98%", label: "שביעות רצון" },
];

export default function Index() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white overflow-hidden"
      style={{ fontFamily: "Heebo, sans-serif" }}
    >
      {/* Nav */}
      <header className="absolute top-0 right-0 left-0 z-30 px-8 md:px-16 py-6 flex items-center justify-between">
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div
            className="text-forest-800 text-xl font-bold tracking-wide"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            שמאות מקרקעין
          </div>
          <div className="text-forest-600 text-xs mt-0.5 tracking-widest">
            מקצועי · אנושי · אמין
          </div>
        </div>
        <nav
          className="hidden md:flex gap-8 text-sm text-forest-700 font-medium opacity-0 animate-fade-in"
          style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
        >
          <a href="#" className="hover:text-forest-900 transition-colors">שירותים</a>
          <a href="#" className="hover:text-forest-900 transition-colors">אודות</a>
          <a href="#" className="hover:text-forest-900 transition-colors">צור קשר</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative min-h-screen flex items-center">

        {/* Dark green left panel — background decoration */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] opacity-0 animate-fade-in"
          style={{
            animationFillMode: "forwards",
            animationDelay: "0.1s",
            background: "linear-gradient(160deg, #1a431e 0%, #0a1f0c 100%)",
          }}
        />

        {/* Subtle dot pattern on green panel */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] z-[1] opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #4ade80 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Text block — right side (RTL: this is left visually) */}
        <div
          className="relative z-20 w-full lg:w-[52%] flex flex-col justify-center px-8 md:px-16 lg:pr-16 lg:pl-8 pt-32 pb-20 min-h-screen"
        >
          {/* Tag */}
          <div
            className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="w-10 h-px bg-forest-600" />
            <span className="text-forest-600 text-sm font-medium tracking-widest uppercase">
              שמאי מקרקעין מוסמך
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl xl:text-[3.6rem] font-bold text-forest-950 mb-5 opacity-0 animate-fade-up-delay"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              animationFillMode: "forwards",
              lineHeight: "1.2",
            }}
          >
            שמאות מקרקעין<br />
            <span className="text-forest-700">שמייצרת</span>
            <br />
            ודאות מלאה
          </h1>

          {/* Accent line */}
          <div
            className="w-14 h-[3px] bg-forest-600 mb-8 opacity-0 animate-fade-up-delay"
            style={{ animationFillMode: "forwards", animationDelay: "0.35s" }}
          />

          {/* Body */}
          <p
            className="text-forest-800 text-lg leading-relaxed max-w-md mb-10 opacity-0 animate-fade-up-delay2"
            style={{ animationFillMode: "forwards" }}
          >
            ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
          </p>

          {/* CTA */}
          <div
            className="opacity-0 animate-fade-up-delay3"
            style={{ animationFillMode: "forwards" }}
          >
            <button className="group relative inline-flex items-center gap-3 bg-forest-800 hover:bg-forest-700 text-white font-medium text-base md:text-lg px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-forest-900/25 hover:-translate-y-0.5">
              <span>לתיאום שיחת ייעוץ ללא עלות</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </button>

            <p className="text-forest-400 text-sm mt-3">
              ✓ ללא התחייבות &nbsp;·&nbsp; ✓ תגובה תוך 24 שעות
            </p>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-8 mt-14 pt-10 border-t border-forest-100 opacity-0 animate-fade-up-delay3"
            style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-forest-900 text-2xl font-bold leading-none"
                  style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
                >
                  {s.value}
                </div>
                <div className="text-forest-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Person photo — standing on the page, "cutout" style */}
        <div
          className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[55%] items-end justify-center z-10 pointer-events-none opacity-0 animate-slide-in-right"
          style={{ animationFillMode: "forwards" }}
        >
          <img
            src={PHOTO_URL}
            alt="ראש החברה"
            className="h-[92%] w-auto object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.18))",
            }}
          />
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden w-full pt-24 pb-0 flex flex-col">
          {/* Text */}
          <div className="px-6 pb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-forest-600" />
              <span className="text-forest-600 text-sm font-medium tracking-widest">שמאי מקרקעין מוסמך</span>
            </div>
            <h1
              className="text-3xl font-bold text-forest-950 mb-4"
              style={{ fontFamily: '"Frank Ruhl Libre", serif', lineHeight: "1.25" }}
            >
              שמאות מקרקעין <span className="text-forest-700">שמייצרת</span> ודאות מלאה
            </h1>
            <div className="w-12 h-[3px] bg-forest-600 mb-6" />
            <p className="text-forest-700 text-base leading-relaxed mb-8">
              ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
            </p>
            <button className="group relative inline-flex items-center gap-2 bg-forest-800 text-white font-medium text-base px-7 py-4 w-full justify-center transition-all duration-300 active:bg-forest-700">
              <span>לתיאום שיחת ייעוץ ללא עלות</span>
            </button>
            <p className="text-forest-400 text-xs mt-2 text-center">✓ ללא התחייבות · ✓ תגובה תוך 24 שעות</p>
          </div>

          {/* Mobile photo — full width, person visible */}
          <div
            className="relative w-full flex justify-center"
            style={{ background: "linear-gradient(180deg, white 0%, #1a431e 30%, #0a1f0c 100%)" }}
          >
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              className="h-[420px] w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 -10px 30px rgba(0,0,0,0.1))" }}
            />
          </div>
        </div>
      </main>

      {/* Trust bar */}
      <div className="relative z-30 bg-forest-950 text-white px-8 md:px-16 py-5 flex flex-wrap items-center justify-end gap-6">
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
