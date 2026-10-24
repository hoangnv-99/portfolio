import type { Dictionary } from "@/content/types";
import { profile } from "@/content/profile";
import { ButtonLink } from "./ui/ButtonLink";
import { Icon } from "./ui/Icon";

// Figma "Contact" (135:875): heading block + "Address Card"s.
export function Contact({ dict }: { dict: Dictionary }) {
  const { labels } = dict.contact;
  const cards = [
    { icon: "/figma/location-pin.svg", label: labels.address, value: dict.contact.address },
    { icon: "/icons/calendar.svg", label: labels.birthday, value: profile.birthday },
    {
      icon: "/figma/phone-call.svg",
      label: labels.phone,
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: "/icons/mail.svg",
      label: labels.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-[100px]">
      <div className="container-page">
        <div
          data-reveal
          className="grid gap-10 rounded-xl bg-surface p-6 shadow-card md:p-12 lg:grid-cols-[minmax(0,481px)_minmax(0,1fr)] lg:gap-16 lg:p-[88px]"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] leading-10 font-semibold text-fg md:text-h2 md:leading-[50px]">
                {dict.contact.heading}
              </h2>
              <p className="text-body-lg text-subtle">{dict.contact.body}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={`mailto:${profile.email}`} arrow>
                {dict.contact.emailMe}
              </ButtonLink>
              <ButtonLink href={profile.cvPath} download variant="outline">
                {dict.nav.downloadCv}
              </ButtonLink>
            </div>
          </div>

          <ul className="grid content-center gap-3">
            {cards.map((card) => {
              const valueClass = "text-body font-medium break-all text-fg";
              return (
                <li
                  key={card.label}
                  className="group flex items-center gap-[13px] rounded-[10px] bg-surface p-6 transition-shadow hover:shadow-card dark:hover:bg-bg-alt"
                >
                  <span className="rounded-[6px] bg-tint p-3 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <Icon src={card.icon} />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-small text-fg-soft">{card.label}</span>
                    {card.href ? (
                      <a href={card.href} className={`${valueClass} hover:text-primary-500`}>
                        {card.value}
                      </a>
                    ) : (
                      <span className={valueClass}>{card.value}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
