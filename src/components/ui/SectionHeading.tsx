export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto max-w-[577px] text-center" : "max-w-[529px]";
  return (
    <div data-reveal className={`flex flex-col gap-6 ${alignment}`}>
      <h2 className="text-[36px] leading-[44px] font-semibold text-fg md:text-h1 md:leading-[56px]">{title}</h2>
      <p className="text-body-lg text-subtle">{subtitle}</p>
    </div>
  );
}
