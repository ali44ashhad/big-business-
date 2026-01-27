import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Workflow, ClipboardList, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmbeddedOps = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero / Intro */}
      <section className="">
        <div className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/85" />

          <div className="container-industrial relative z-10 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="mb-10">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs tracking-wider uppercase rounded-full mb-6">
                  Lane Three
                </span>
                <h1 className="heading-hero text-white mb-6 tracking-tight">
                  Businesses With Existing Ops Staff
                </h1>
                <div className="h-1 w-24 bg-white mb-8" />
                <p className="text-xl md:text-2xl font-light text-white/90 mb-6 leading-relaxed">
                  We embed structure into businesses that already have operations or warehouse staff — without
                  removing people or starting over.
                </p>
              </div>

              <div className="space-y-4 text-white/80 body-large max-w-2xl">
                <p>
                  This lane is for businesses with an ops, warehouse, or dispatch manager in place — but where the
                  system is still in people&apos;s heads, not in the business itself.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-black hover:bg-white/90"
                >
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

      {/* Common Problems We See */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">Common Problems We See</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The manager is capable — but the business is still running on personality and habit instead of a
                clear operating system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "No clear system",
                  description:
                    "The manager is experienced, but there is no defined, documented way that work is meant to run.",
                },
                {
                  title: "Person-dependent dispatch & stock",
                  description:
                    "Key knowledge lives in certain people. When they are away, dispatch and inventory control fall over.",
                },
                {
                  title: "Fragmented safety & WHS",
                  description:
                    "Safety is reactive or paperwork-led, not embedded into daily work and operational standards.",
                },
                {
                  title: "Disconnected invoicing & freight",
                  description:
                    "Freight, dispatch, and invoicing don&apos;t connect cleanly to daily operations, creating leakage and delays.",
                },
                {
                  title: "Owner still managing from above",
                  description:
                    "The owner remains the backstop for decisions and control, instead of the system and the ops manager.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 tracking-tight">{item.title}</h3>
                  <p className="body-text text-muted-foreground leading-relaxed">{item.description}</p>
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
              <h2 className="heading-section mb-6 tracking-tight">What BBC Installs</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We install system architecture and controls around your existing team, so operations are structured,
                visible, and owner-independent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="h-6 w-6 text-black" />
                  <h3 className="text-lg font-semibold tracking-tight">
                    Operating Standards & Workflow
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Clear operating standards for daily tasks",
                    "End-to-end workflow clarity (receive → store → pick → dispatch → invoice)",
                    "Defined roles, responsibilities, and handoffs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="h-6 w-6 text-black" />
                  <h3 className="text-lg font-semibold tracking-tight">
                    Systems, Tools & Integrations
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Software and process integrations with existing tools",
                    "Freight, safety, and inventory systems tied into one way of working",
                    "Dashboards for visibility across teams and for owners",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-black" />
                  <h3 className="text-lg font-semibold tracking-tight">
                    Training, Control & Documentation
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Training and documentation for internal teams",
                    "Embedded controls so safety and dispatch work as one system",
                    "Owner-level visibility without owner-level involvement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You End Up With */}
      <section className="section-spacing bg-white py-24">
        <div className="container-industrial">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 tracking-tight">What You End Up With</h2>
              <div className="h-px w-24 bg-black mx-auto mb-8" />
              <p className="body-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A stable operational system wrapped around your existing staff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "A manager empowered by a system, not left to hold it together alone.",
                "The owner no longer needed to keep all the pieces in their head.",
                "Safety, dispatch, and stock working as parts of a single operating system.",
                "Increased control, reduced churn, and fewer surprises.",
                "An operational rhythm that can scale without adding more chaos.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 h-full flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - How to Start */}
      <section className="section-spacing bg-gray-50/80 py-24 border-t border-gray-200">
        <div className="container-industrial">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-6">
              How to Start
            </span>
            <h2 className="heading-section mb-8 tracking-tight">
              The first step is a walk-through.
            </h2>
            <div className="h-px w-24 bg-black mx-auto mb-10" />

            <p className="body-large text-muted-foreground mb-8 leading-relaxed">
              We meet on site with decision-makers and current operations managers to map the real situation —
              how work actually runs today, where it is breaking, and what needs to be brought under control.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-black/90 px-10"
            >
              <Link to="/book" className="flex items-center">
                Book a walk-through
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmbeddedOps;

