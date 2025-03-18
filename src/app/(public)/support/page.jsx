import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export default function Support() {
    return (<div className="p-6 min-h-screen max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        Support
      </h1>
      <p className="text-zinc-500">
        Need help? Here you can find answers to frequently asked questions and ways to contact us.
      </p>

      <div>
        <h2 className="text-xl font-semibold">
          📌 Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>
              How can I find information about destinations?
            </AccordionTrigger>
            <AccordionContent>
              You can explore destinations directly on the homepage or use the search bar to find specific places.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>
              How can I get in touch for suggestions or partnerships?
            </AccordionTrigger>
            <AccordionContent>
              {"Send us an email at "}
              <a href="mailto:contact@coastline.com" className="text-blue-600 underline">
                contact@coastline.com
              </a>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          📧 Contact Us
        </h2>
        <p className="text-zinc-500">
          {"If you need further assistance, please email us at "}
          <a href="mailto:support@coastline.com" className="text-blue-600 underline">
            support@coastline.com
          </a>.
        </p>
      </div>
    </div>);
}
