import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlumbWright Plumbing & Gas, LLC | Owner-Operated Plumber" },
      {
        name: "description",
        content:
          "Owner-operated plumbing and gas work by Michael Wright. Water heaters, gas lines, valves, leaks and remodels.",
      },
      { property: "og:title", content: "PlumbWright Plumbing & Gas, LLC" },
      {
        property: "og:description",
        content: "Owner-operated plumbing and gas work, completed on time and up to code.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site.html"
      title="PlumbWright Plumbing & Gas, LLC"
      className="block h-screen w-full border-0 bg-background"
    />
  );
}
