import BookingForm from "@/components/BookingForm";
import { Calendar, MapPin, Clock, CheckCircle } from "lucide-react";

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 pt-20 md:pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container-industrial">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Left Column - Information */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-10">
                    <div>
                      <span className="inline-block px-4 py-2 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-6">
                        Initial Assessment
                      </span>
                      <h1 className="heading-section mb-6 tracking-tight">
                        Schedule Operational Review
                      </h1>
                      <div className="h-1 w-24 bg-black mb-8" />
                      <p className="body-large text-muted-foreground mb-8 leading-relaxed">
                        Every transformation begins with comprehensive assessment. 
                        We conduct on-site observation, analyze operational workflows, 
                        and identify systemic constraints.
                      </p>
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Site Assessment</h3>
                          <p className="text-sm text-muted-foreground">
                            60-90 minute on-site review of your current operations and challenges.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Location Focus</h3>
                          <p className="text-sm text-muted-foreground">
                            Melbourne-based with capacity for select regional engagements.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Follow-up Timeline</h3>
                          <p className="text-sm text-muted-foreground">
                            Diagnostic proposal delivered within 3 business days post-assessment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* What to Expect */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-semibold mb-4">Assessment Focus Areas</h3>
                      <ul className="space-y-3">
                        {[
                          "Current workflow and process mapping",
                          "Operational constraint identification",
                          "Safety and compliance evaluation",
                          "Technology and system assessment",
                          "Scalability and growth capacity",
                          "Owner dependency analysis"
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

                {/* Right Column - Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold tracking-tight mb-4">
                        Schedule Your Assessment
                      </h2>
                      <p className="text-muted-foreground">
                        Complete the form below to schedule your on-site operational review. 
                        We'll contact you within 24 hours to confirm details.
                      </p>
                    </div>

                    <BookingForm />

                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-8">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-4">Direct Contact</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Prefer direct communication? Reach out via:
                          </p>
                          <a 
                            href="mailto:luke@thebigbusinessco.com.au" 
                            className="text-black font-medium hover:text-black/70 transition-colors block mb-1"
                          >
                            luke@thebigbusinessco.com.au
                          </a>
                          <p className="text-sm text-muted-foreground">
                            Melbourne, Victoria
                          </p>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold mb-4">Response Time</h3>
                          <p className="text-sm text-muted-foreground">
                            We respond to all enquiries within 24 hours during business days.
                          </p>
                          <div className="flex items-center gap-2 mt-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground">
                              Typically responds within 4 hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-sm font-medium mb-1">No Obligation</p>
                      <p className="text-xs text-muted-foreground">Initial assessment carries no commitment</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-sm font-medium mb-1">Confidential Review</p>
                      <p className="text-xs text-muted-foreground">All discussions held in strict confidence</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-sm font-medium mb-1">Clear Next Steps</p>
                      <p className="text-xs text-muted-foreground">Transparent process with defined outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gray-50/50">
          <div className="container-industrial">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Operations?</h2>
              <p className="text-muted-foreground mb-8">
                The first step toward systematic operational excellence is comprehensive assessment. 
                Schedule your review today.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Book;