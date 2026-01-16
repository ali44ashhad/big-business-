import { Link } from "react-router-dom";
import { ArrowRight, Check, LayoutGrid, Package, Shield, Users, Clock, BarChart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const Warehouses = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
 
      {/* Hero Section */}
      <section className="">
        <div className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroWarehouse})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
          </div>
          
          <div className="container-industrial relative z-10 py-20 md:py-32">
            <div className="max-w-4xl">
              <div className="mb-10">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-wider uppercase rounded-full mb-6">
                  BBC Physical Operations
                </span>
                <h1 className="heading-hero text-white mb-6 fade-in-up tracking-tight uppercase">
                  WAREHOUSES & PHYSICAL OPERATIONS
                </h1>
                <div className="h-1 w-24 bg-white mb-8" />
                <p className="text-2xl md:text-3xl font-light text-white/90 mb-10 fade-in-up stagger-1 leading-relaxed">
                  Operating systems installed. Not consultancy.
                </p>
              </div>
              
              <div className="space-y-6 text-white/85 body-large max-w-2xl mb-12 fade-in-up stagger-2">
                <p className="text-lg leading-relaxed">
                  BBC installs the operating systems behind warehouses, workshops, and physical businesses.
                </p>
                <div className="pt-6 space-y-4 text-white/75 border-t border-white/20">
                  <p className="font-medium text-white/90 text-lg">We specialise in environments where:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Safety", "Stock Flow", "Labour", "Dispatch"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                        <span>{item} must work together</span>
                      </div>
                    ))}
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

      {/* Common Problems */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">COMMON PROBLEMS WE SEE</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Systemic bottlenecks that hinder physical throughput and safety.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <LayoutGrid />, title: "Layouts", desc: "Messy layouts and wasted movement" },
                { icon: <Package />, title: "Inventory", desc: "Stock errors and poor visibility" },
                { icon: <Clock />, title: "Speed", desc: "Dispatch delays and bottlenecks" },
                { icon: <Shield />, title: "Risk", desc: "Safety exposure and compliance gaps" },
                { icon: <Users />, title: "Roles", desc: "Unclear roles and standards" },
                { icon: <BarChart />, title: "Resources", desc: "Labour strain and inefficiency" },
                { icon: <Target />, title: "Bottlenecks", desc: "Owner dependence" },
              ].map((problem, index) => (
                <div key={index} className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-4 text-white">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{problem.title}</h3>
                  <p className="body-small text-muted-foreground leading-relaxed">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What BBC Installs */}
      <section className="section-spacing bg-gray-50/50 py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">WHAT BBC INSTALLS</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Every warehouse engagement is diagnostic-led, but systems commonly include:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Design", items: ["Layout and stock flow design", "Space optimization"] },
                { title: "Standards", items: ["Receiving", "Storage", "Picking", "Dispatch standards"] },
                { title: "Visibility", items: ["Inventory systems", "Asset visibility", "Freight discipline"] },
                { title: "Governance", items: ["Safety/WHS systems", "Role clarity", "Handover packs"] }
              ].map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm h-full">
                  <h3 className="text-lg font-semibold mb-6 tracking-tight uppercase border-b pb-2">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-3.5 w-3.5 text-black mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-white p-8 md:p-10 rounded-2xl border border-black shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
                <div>
                  <p className="text-lg font-bold mb-2">We do not leave reports.</p>
                  <p className="text-sm text-muted-foreground">The end of our engagement isn't paper.</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-black uppercase">We install operating systems.</p>
                  <p className="text-sm text-muted-foreground mt-2">Functional, repeatable, and scalable reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-spacing relative min-h-[600px] md:h-[700px] py-24 overflow-hidden">

<img
  src="/big-buiseness-bg-image.jpg"
  alt="Warehouse background"
  className="absolute inset-0 w-full h-full object-cover object-center z-0"
/>

<div className="absolute inset-0 bg-black/50 z-10" />

<div className="container-industrial relative z-20 h-full flex items-center">
  <div className="max-w-6xl mx-auto w-full">

    <div className="text-center mb-12 md:mb-16">
      <h2 className="heading-section mb-6 tracking-tight text-white">
        WHAT YOU END UP WITH
      </h2>
      <div className="h-px w-24 bg-white mx-auto mb-8" />
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          "Safer operations",
          "Faster throughput",
          "Clearer accountability",
          "Reduced errors and rework",
          "Operational visibility",
          "A warehouse that runs on systems, not individuals"
        ].map((outcome, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur p-6 md:p-8 rounded-xl border border-gray-200 flex items-center gap-4"
          >
            <div className="w-2 h-2 bg-black rounded-full shrink-0" />
            <span className="font-medium text-base md:text-lg">
              {outcome}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

</section>




      {/* How to Start */}
      <section className="section-spacing bg-white text-white py-24 border-t border-gray-200">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-black text-sm tracking-wider uppercase rounded-full mb-6">
                Next Steps
              </span>
              <h2 className="heading-section mb-8 text-black tracking-tight">HOW TO START</h2>
              <div className="h-px w-24 bg-black mx-auto mb-12" />
              <p className="text-2xl font-light text-black max-w-3xl mx-auto">
                The first step is a walk-through. Luke attends site, reviews reality, and explains the diagnostic process.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-8">
              <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90 px-12 h-14 text-lg">
                <Link to="/book" className="flex items-center">
                  Book a walk-through
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <div className="text-center space-y-2 text-black">
                <p><a href="https://thebigbusinessco.com.au/" className="hover:text-gray-500 transition-colors">thebigbusinessco.com.au</a></p>
                <p>Melbourne, VIC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     </div>
  );
};

export default Warehouses;