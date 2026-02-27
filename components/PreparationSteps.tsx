import { Lightbulb } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function PreparationSteps({
  steps,
  tip,
}: {
  steps: Step[];
  tip?: string;
}) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="font-serif font-bold text-2xl text-gray-900 mb-8">
          Preparation Steps
        </h3>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                {step.number}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {tip && (
        <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-primary">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-primary text-sm tracking-wide uppercase">
              Chef&apos;s Tip
            </h4>
          </div>
          <p className="text-primary/90 italic font-serif leading-relaxed text-sm">
            &quot;{tip}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
