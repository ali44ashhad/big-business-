import { Link } from "react-router-dom";
import { ArrowRight, Check, BarChart3, Target, Users, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTrades from "@/assets/hero-trades.jpg";

const Trades = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Hero Section */}
      <section className="">
        <div className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroTrades})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
          </div>
          
          <div className="container-industrial relative z-10 py-20 md:py-32">
            <div className="max-w-4xl">
              <div className="mb-10">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-wider uppercase rounded-full mb-6">
                  Trade & Service Businesses
                </span>
                <h1 className="heading-hero text-white mb-6 fade-in-up tracking-tight uppercase">
                  Business systems installed. <br />Not advice.
                </h1>
                <div className="h-1 w-24 bg-white mb-8" />
                <p className="text-2xl md:text-3xl font-light text-white/90 mb-10 fade-in-up stagger-1 leading-relaxed">
                  BBC installs the systems behind trade businesses so work flows, cash moves faster, and the business stops relying on the owner to hold everything together.
                </p>
              </div>
              
              <div className="space-y-6 text-white/85 body-large max-w-2xl mb-12 fade-in-up stagger-2">
                <div className="pt-6 space-y-4 text-white/75 border-t border-white/20">
                  <p className="font-medium text-white/90 text-lg">For businesses wanting control and scalability:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Plumbing & Electrical</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Builders & Construction</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>HVAC & Maintenance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Service-Based Businesses</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
                <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90">
                  <Link to="/book" className="flex items-center">
                    Book a walk-through
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS WE SEE */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight uppercase">Common Problems We See</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Systemic issues that throttle growth and exhaust trade owners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Leads Falling Through",
                  description: "Enquiries falling through the cracks due to lack of capture and follow-up systems.",
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Mental Management",
                  description: "Quoting and jobs managed in heads and text messages rather than a centralized system.",
                },
                {
                  icon: <BarChart3 className="h-6 w-6" />,
                  title: "Lost Revenue",
                  description: "Invoices delayed or completely forgotten, hurting your bottom line.",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Poor Visibility",
                  description: "Lack of real-time cashflow visibility and financial control.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Admin Overload",
                  description: "The owner is buried in paperwork and administrative tasks instead of leading.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Reactive Operations",
                  description: "No consistent way the business runs; every day is a battle to hold it together.",
                },
              ].map((problem, index) => (
                <div key={index} className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                    <div className="text-white">
                      {problem.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 tracking-tight">{problem.title}</h3>
                  <p className="body-text text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT BBC INSTALLS */}
      <section className="section-spacing relative min-h-[700px] lg:min-h-[800px] py-24 overflow-hidden">

{/* ===== BACKGROUND IMAGE ===== */}
<img
  src="./big-buiseness-bg-image.jpg"   // <-- change to your image
  alt="Industrial systems background"
  className="absolute inset-0 w-full h-full object-cover object-center z-0"
/>

{/* ===== OVERLAY ===== */}
<div className="absolute inset-0 z-10" />

{/* ===== CONTENT ===== */}
<div className="container-industrial relative z-20 h-full flex items-center">
  <div className="max-w-6xl mx-auto w-full">

    <div className="text-center mb-16">
      <h2 className="heading-section mb-6 tracking-tight uppercase text-white">
        What BBC Installs
      </h2>
      <div className="h-px w-24 bg-white mx-auto mb-8" />
      <p className="body-large text-gray-200 max-w-2xl mx-auto">
        Every trade engagement is designed from a diagnostic, but systems commonly include:
      </p>
    </div>

    {/* ✅ CENTERED GRID */}
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {[
          {
            title: "Lead & Quoting",
            icon: "01",
            items: [
              "Lead capture systems",
              "Enquiry flow management",
              "Quoting control systems",
            ],
          },
          {
            title: "Control & Visibility",
            icon: "02",
            items: [
              "Job control systems",
              "Customer visibility dashboards",
              "Job status tracking",
            ],
          },
          {
            title: "Finance & Admin",
            icon: "03",
            items: [
              "Automated invoicing",
              "Automated payments",
              "Admin-reduction tools",
            ],
          },
          {
            title: "Foundation & Safety",
            icon: "04",
            items: [
              "Business operating standards",
              "WHS & compliance",
              "Handover documentation",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-400 tracking-tight">
                {section.icon}
              </span>
              <div className="h-px flex-grow bg-gray-300" />
            </div>

            <h3 className="text-xl font-semibold mb-6 tracking-tight">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>

    {/* ===== BOTTOM STRIP ===== */}
    <div className="mt-10 bg-white/95 backdrop-blur p-10 rounded-2xl border border-black shadow-lg max-w-5xl mx-auto">
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

  <div className="text-center md:text-left">
    <p className="text-base md:text-lg font-semibold tracking-wide text-black uppercase mb-2">
      We design the system.
    </p>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
      Tailored architectural design.
    </p>
  </div>

  <div className="text-center md:text-left">
    <p className="text-base md:text-lg font-semibold tracking-wide text-black uppercase mb-2">
      We select the components.
    </p>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
      The right tools for the job.
    </p>
  </div>

  <div className="text-center md:text-left">
    <p className="text-base md:text-lg font-semibold tracking-wide text-black uppercase mb-2">
      We install and embed.
    </p>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
      Integrated into daily work.
    </p>
  </div>

</div>

    </div>

  </div>
</div>

</section>

      {/* WHAT YOU END UP WITH */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight uppercase">What You End Up With</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                The business moves from reactive to operating.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Professional Front End",
                  description: "A polished, systematic face for your business that wins more trust and jobs.",
                },
                {
                  step: "02",
                  title: "Structured Job Flow",
                  description: "No more guessing where a job is at; every project follows a defined, repeatable path.",
                },
                {
                  step: "03",
                  title: "Cash Visibility",
                  description: "Faster invoicing and clear insight into exactly where your money is.",
                },
                {
                  step: "04",
                  title: "Less Admin Load",
                  description: "Automation and systems take over the repetitive tasks that eat your time.",
                },
                {
                  step: "05",
                  title: "Documented Systems",
                  description: "The 'how-to' of your business is now in the system, not just in your head.",
                },
                {
                  step: "06",
                  title: "Scalable Platform",
                  description: "A foundation that allows you to add more vans, more staff, and more profit.",
                },
              ].map((phase, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-gray-400 tracking-tight">{phase.step}</span>
                      <div className="h-px flex-grow bg-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 tracking-tight">{phase.title}</h3>
                    <p className="body-text text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO START - DIAGNOSTIC */}
      <section className="pb-20">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-wider uppercase rounded-full mb-6">
                How to Start
              </span>
              <h2 className="heading-section mb-8 text-black tracking-tight uppercase">The first step is not a build.</h2>
              <div className="h-px w-24 bg-black mx-auto mb-12" />
            </div>
            
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <p className="text-2xl font-light text-black mb-6">
                It is a diagnostic. BBC maps how your business currently runs:
              </p>
              <p className="text-2xl font-bold text-black uppercase tracking-widest">
                Lead → Quote → Job → Invoice → Cash
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-black">
              <div className="text-center">
                <p className="text-xl font-medium text-black mb-8">
                  From that, you receive a clear fix plan.
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90">
                <Link
  to="/book"
  className="
    inline-flex items-center justify-center gap-3
    px-6 py-3 md:px-8 md:py-4
    text-sm md:text-base font-semibold
    rounded-lg
    border border-black text-black
    rounded-3xl
      transition-all duration-200
    group
  "
>
  Book a walk-through
  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-200 group-hover:translate-x-1" />
</Link>

                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Trades;