import "../../globals.css";
import { buildMetadata, RootDocument } from "@/components/RootDocument";
import { en } from "@/content/en";

export const metadata = buildMetadata(en);

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
