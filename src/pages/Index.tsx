import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="">
        <div className="relative min-h-[95vh] flex items-center overflow-hidden">
          {/* Professional Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroWarehouse})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
          </div>
          
          <div className="container-industrial relative z-10 py-20 md:py-36">
            <div className="max-w-4xl">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-wider uppercase rounded-full mb-6">
                  System Architecture & Installation
                </span>
                <h1 className="heading-hero text-white mb-6 fade-in-up tracking-tight">
                  THE BIG BUSINESS CO
                </h1>
                <div className="h-1 w-24 bg-white mb-8" />
                <p className="text-2xl md:text-3xl font-light text-white/90 mb-10 fade-in-up stagger-1 leading-relaxed">
                  From chaos to clarity.
                </p>
              </div>
              
              <div className="space-y-6 text-white/85 body-large max-w-2xl mb-12 fade-in-up stagger-2">
                <p className="text-lg leading-relaxed">
                  We install the operating systems behind small businesses — so warehouses and trades run
                  with control, safety, and visibility instead of stress and guesswork.
                </p>
                <div className="pt-6 space-y-4 text-white/75 border-t border-white/20">
                  <p className="font-medium text-white/90 text-lg">
                    The Big Business Co (BBC) works in three lanes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Trade & service businesses</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Warehouses & physical operations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Businesses with existing operations staff</span>
                    </div>
                  </div>
                  <div className="pt-4 space-y-2 italic text-white">
                    <p>We don’t sell software.</p>
                    <p>We don’t give advice.</p>
                    <p className="font-semibold not-italic">
                      We design and install the systems that make businesses actually work.
                    </p>
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
                {/* <Button asChild size="lg" variant="outline" className="hover:bg-gray-200">
                  <Link to="/approach">
                    Our Methodology
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-spacing bg-background py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">What We Do</h2>
              <div className="h-px w-24 bg-foreground mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We help small businesses replace operational chaos with control by:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  "Making it clear how work flows from start to finish",
                  "Reducing safety risk and embedding proper WHS systems",
                  "Fixing dispatch, delivery, and follow-through",
                  "Giving owners real visibility over stock, tools, jobs, and cash",
                  "Installing clear roles, standards, and “this is how we operate” systems",
                  "Selecting and integrating proven tools into one way of working",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-lg transition-colors">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="body-text text-foreground/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 tracking-tight">The Result</h3>
                <p className="body-text text-muted-foreground mb-6 leading-relaxed">
                  A business that runs smoothly, safely, and without relying on the owner to hold
                  everything together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-medium">Systematic Control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-medium">Owner Independence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-medium">Embedded Safety & Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lanes */}
      <section className=" bg-gray-50/50">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">Our Three Lanes</h2>
              <div className="h-px w-24 bg-foreground mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Specialized installation for distinct business models
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Trades Card */}
              <Link 
                to="/trades" 
                className="group bg-white p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-4">
                    Lane One
                  </span>
                  <h3 className="heading-subsection mb-6">Trade & Service Businesses</h3>
                  <p className="body-text text-muted-foreground mb-8 leading-relaxed">
                    We install business systems that fix:
                  </p>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Lost and unmanaged leads",
                    "Messy quoting and job flow",
                    "Slow or forgotten invoicing",
                    "Admin overload",
                    "Lack of financial visibility",
                    "Owner dependence",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm font-semibold mb-6 text-foreground italic">Typical outcomes: faster cashflow, less admin, clearer control, a business that can grow.</p>
                  <div className="inline-flex items-center text-black font-medium group-hover:gap-4 transition-all gap-2">
                    <span>Explore Trade Solutions</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {/* Warehouses Card */}
              <Link 
                to="/warehouses" 
                className="group bg-white p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-4">
                    Lane Two
                  </span>
                  <h3 className="heading-subsection mb-6">Warehouses & Physical Operations</h3>
                  <p className="body-text text-muted-foreground mb-8 leading-relaxed">
                    We install operating systems that fix:
                  </p>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Poor layout and stock flow",
                    "Dispatch delays and mistakes",
                    "Safety exposure",
                    "Lack of inventory visibility",
                    "Labour inefficiency",
                    "Person-dependent operations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm font-semibold mb-6 text-foreground italic">Typical outcomes: safer sites, faster throughput, fewer errors, stronger operational control.</p>
                  <div className="inline-flex items-center text-black font-medium group-hover:gap-4 transition-all gap-2">
                    <span>Explore Warehouse Solutions</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {/* Embedded Ops Card */}
              <Link
                to="/embedded-ops"
                className="group bg-white p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-4">
                    Lane Three
                  </span>
                  <h3 className="heading-subsection mb-6">
                    Businesses With Existing Ops Staff
                  </h3>
                  <p className="body-text text-muted-foreground mb-8 leading-relaxed">
                    We embed structure into businesses that already have operations or warehouse staff — without
                    removing people or starting over.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {[
                    "Manager is experienced, but there’s no clear system",
                    "Dispatch and stock are person-dependent",
                    "Safety and WHS are fragmented or reactive",
                    "Invoicing or freight flow is disconnected from daily ops",
                    "The owner still ends up managing from above",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm font-semibold mb-6 text-foreground italic">
                    Typical outcomes: a manager empowered by a system, owner independence, and scalable operational
                    control.
                  </p>
                  <div className="inline-flex items-center text-black font-medium group-hover:gap-4 transition-all gap-2">
                    <span>Explore Embedded Ops Solutions</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-spacing bg-background py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">How It Works</h2>
              <div className="h-px w-24 bg-foreground mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                A hands-on process from initial walk-through to full system handover.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {[
                {
                  step: "01",
                  title: "Walk-through",
                  description: "A short on-site discussion with the decision-maker to understand reality and confirm fit.",
                },
                {
                  step: "02",
                  title: "Diagnostic",
                  description: "A paid operational diagnostic that maps how the business truly runs and where it is breaking.",
                },
                {
                  step: "03",
                  title: "System Design",
                  description: "BBC designs the operating system — flow, standards, controls, and components.",
                },
                {
                  step: "04",
                  title: "Install",
                  description: "We install the system into the business: processes, safety controls, visibility tools, and supporting software.",
                },
                {
                  step: "05",
                  title: "Handover",
                  description: "You receive the blueprint, documentation, and controls to keep the system working.",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="border-l md:border-l-0 md:border-t-2 border-gray-300 pt-8 md:pt-10 px-6 md:px-8 pb-10 md:pb-12 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-gray-400 tracking-tight">{item.step}</span>
                      <div className="h-px flex-grow bg-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 tracking-tight">{item.title}</h3>
                    <p className="body-small text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why BBC */}
      <section className="section-spacing bg-black text-white py-24">
        <div className="container-industrial">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-wider uppercase rounded-full mb-6">
                Why BBC
              </span>
              <h2 className="heading-section mb-8 text-white tracking-tight">System Ownership</h2>
              <div className="h-px w-24 bg-white mx-auto mb-12" />
            </div>
            
            <div className="space-y-8 body-large text-white/85 leading-relaxed">
              <div className="text-center mb-12">
                <p className="text-2xl font-light text-white/90 italic mb-6">
                  "Most providers sell tools or write reports —"
                </p>
                <p className="text-3xl font-semibold text-white">
                  BBC owns how your business operates.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>We are accountable for how work flows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>We ensure safety is embedded in daily work</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>We ensure dispatch and logistics run with precision</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>We create total operational visibility</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-12 mt-12 border-t border-white/20 text-center">
                <p className="text-xl font-medium text-white/80">
                  Software, suppliers, and partners are components.
                </p>
                <p className="text-2xl font-bold text-white mt-4">
                  BBC owns the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section mb-8 tracking-tight">Begin the Transformation</h2>
            <div className="h-px w-24 bg-black mx-auto mb-10" />
            
            <p className="body-large text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              If your business feels chaotic, unclear, or harder than it should be, the first step is a walk-through. 
              Luke will meet you on site, listen, assess fit, and explain the diagnostic process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 px-10">
                <Link to="/book" className="flex items-center">
                  Book a walk-through
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="pt-12 border-t border-gray-200">
              <div className="space-y-2 text-muted-foreground body-small">
                <p className="font-medium text-foreground">Direct Contact</p>
                <p>
                  <a href=" https://thebigbusinessco.com.au" className="hover:text-foreground transition-colors font-medium">
                    thebigbusinessco.com.au
                  </a>
                </p>
                <p>Melbourne, VIC • Operational Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;