import "../globals.css";
import { buildMetadata, RootDocument } from "@/components/RootDocument";
import { vi } from "@/content/vi";

export const metadata = buildMetadata(vi);

export default function ViLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="vi">{children}</RootDocument>;
}
