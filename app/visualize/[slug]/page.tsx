import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { FlowPlayer } from "@/components/visualization/flow-player";
import { Button } from "@/components/ui/button";
import {
  getVisualizationBySlug,
  getVisualizationSlugs,
} from "@/lib/visualization/get-visualizations";

interface VisualizePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getVisualizationSlugs().map((slug) => ({ slug }));
}

export default async function VisualizePage({ params }: VisualizePageProps) {
  const { slug } = await params;
  const visualization = getVisualizationBySlug(slug);

  if (!visualization) {
    notFound();
  }

  return (
    <div className="container max-w-4xl px-4 py-10">
      <Button
        variant="ghost"
        size="sm"
        className="mb-4"
        render={<Link href={`/concepts/${visualization.conceptSlug}`} />}
      >        <ArrowLeft className="size-4" />
        Back to {visualization.conceptSlug.toUpperCase()}
      </Button>

      <h1 className="text-3xl font-bold">{visualization.title}</h1>
      <p className="mt-2 text-muted-foreground">
        {visualization.slug === "arp-flow" ? (
          <a
            href="https://www.wikihow.com/Get-a-MAC-Address-from-an-IP-Remotely"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "cdn-flow" ? (
          <a
            href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "cors-flow" ? (
          <a
            href="https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "api-flow" ? (
          <a
            href="https://www.ibm.com/think/topics/api-lifecycle"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "dhcp-flow" ? (
          <a
            href="https://learn.microsoft.com/en-us/windows-server/troubleshoot/troubleshoot-dhcp-issue"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "array-flow" ? (
          <a
            href="https://www.robots.ox.ac.uk/~vedaldi/assets/teach/2025/b16/notes/3-elementary-data-structures.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "dns-flow" ? (
          <a
            href="https://www.cloudflare.com/learning/dns/what-is-dns/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : visualization.slug === "database-flow" ? (
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {visualization.description}
          </a>
        ) : (
          visualization.description
        )}
      </p>

      <div className="mt-8">
        <FlowPlayer visualization={visualization} />
      </div>
    </div>
  );
}
