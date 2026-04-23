const PHOTO_URL = "https://cdn.poehali.dev/files/8e5ae8e1-10d9-457d-b977-a256d006d881.jpg";

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
      <header className="absolute top-0 right-0 left-0 z-20 px-8 md:px-16 py-6 flex items-center justify-between">
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
        <nav className="hidden md:flex gap-8 text-sm text-forest-700 font-medium opacity-0 animate-fade-in" style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}>
          <a href="#" className="hover:text-forest-900 transition-colors">שירותים</a>
          <a href="#" className="hover:text-forest-900 transition-colors">אודות</a>
          <a href="#" className="hover:text-forest-900 transition-colors">צור קשר</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative min-h-screen flex items-stretch">
        {/* Left: Photo block — desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[45%]">
          <div className="absolute inset-0 bg-forest-900 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards", animationDelay: "0.1s" }} />

          {/* Diagonal blend edge */}
          <div
            className="absolute top-0 right-0 bottom-0 w-28 z-10"
            style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
          />

          {/* Photo */}
          <img
            src={PHOTO_URL}
            alt="ראש החברה"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-0 animate-fade-in"
            style={{
              animationFillMode: "forwards",
              animationDelay: "0.4s",
              mixBlendMode: "luminosity",
              filter: "contrast(1.1) brightness(0.7)",
            }}
          />

          {/* Green overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(135deg, rgba(22,56,26,0.5) 0%, rgba(10,31,12,0.72) 100%)" }}
          />

          {/* Stats */}
          <div className="absolute bottom-16 right-0 left-0 z-[3] px-10 flex gap-10 opacity-0 animate-fade-up-delay3" style={{ animationFillMode: "forwards" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-white text-3xl font-bold leading-none"
                  style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
                >
                  {s.value}
                </div>
                <div className="text-green-300 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text content */}
        <div className="relative z-10 mr-auto w-full lg:w-[60%] min-h-screen flex flex-col justify-center px-8 md:px-16 lg:pr-20 lg:pl-10 pt-28 pb-16">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(52,135,57,0.05) 0%, transparent 70%)" }}
          />

          {/* Tag */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
            <div className="w-10 h-px bg-forest-700" />
            <span className="text-forest-700 text-sm font-medium tracking-widest">
              שמאי מקרקעין מוסמך
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-forest-950 mb-6 opacity-0 animate-fade-up-delay"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              animationFillMode: "forwards",
              lineHeight: "1.22",
            }}
          >
            שמאות מקרקעין<br />
            <span className="text-forest-700">שמייצרת</span>
            <br />
            ודאות מלאה
          </h1>

          {/* Accent line */}
          <div
            className="w-16 h-1 bg-forest-600 rounded-full mb-8 opacity-0 animate-fade-up-delay"
            style={{ animationFillMode: "forwards", animationDelay: "0.35s" }}
          />

          {/* Body */}
          <p
            className="text-forest-800 text-lg md:text-xl leading-relaxed max-w-lg mb-12 opacity-0 animate-fade-up-delay2"
            style={{ animationFillMode: "forwards" }}
          >
            ליווי של שמאי מקרקעין מקצועי ואנושי מאפשר לכם לגשת לעסקה הגדולה בחיים עם ודאות מלאה, לקבל החלטה מושכלת ולהתקדם לסגירה בלי הפתעות שיעלו ביוקר.
          </p>

          {/* CTA */}
          <div className="opacity-0 animate-fade-up-delay3" style={{ animationFillMode: "forwards" }}>
            <button className="group relative inline-flex items-center gap-3 bg-forest-800 hover:bg-forest-700 text-white font-medium text-lg px-10 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-forest-900/30 hover:-translate-y-0.5">
              <span>לתיאום שיחת ייעוץ ללא עלות</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </button>

            <p className="text-forest-500 text-sm mt-4">
              ✓ ללא התחייבות &nbsp;·&nbsp; ✓ תגובה תוך 24 שעות
            </p>
          </div>

          {/* Mobile photo */}
          <div className="lg:hidden mt-12 relative overflow-hidden aspect-[4/3]">
            <img
              src={PHOTO_URL}
              alt="ראש החברה"
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.05) brightness(0.8)" }}
            />
            <div className="absolute inset-0 bg-forest-900 opacity-30" />
            <div className="absolute bottom-4 right-0 left-0 flex justify-center gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-white text-2xl font-bold" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>{s.value}</div>
                  <div className="text-green-300 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Trust bar */}
      <div className="relative z-10 bg-forest-950 text-white px-8 md:px-16 py-5 flex flex-wrap items-center justify-end gap-8">
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