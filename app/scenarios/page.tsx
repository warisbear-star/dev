import type { Metadata } from "next";

import { ScenarioPreview } from "@/components/home/scenario-preview";

export const metadata: Metadata = {
  title: "สถานการณ์",
  description: "End-to-end technology flow scenarios",
};

export default function สถานการณ์Page() {
  return (
    <div className="py-10">
      <div className="container mb-4 px-4">
        <h1 className="text-3xl font-bold">เกิดอะไรขึ้นเมื่อ…?</h1>
        <p className="mt-2 text-muted-foreground">
          ติดตามการทำงานของเทคโนโลยีตั้งแต่ต้นจนจบ
        </p>
      </div>
      <ScenarioPreview />
    </div>
  );
}
