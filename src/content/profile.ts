// Locale-independent facts copied from the CV PDF.
export const profile = {
  name: "Nguyen Vu Hoang",
  logoText: "Vu Hoang",
  email: "ngvhoang6886@gmail.com",
  phone: "0964499158",
  birthday: "1999",
  cvPath: "/cv/Resume-FullstackDeveloper-NguyenVuHoang.pdf",
  // TODO: replace with the original portrait at /avatar.jpg once added
  avatar: "/resume_avatar.png",
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

// Anything other than "dev" (including unset) behaves as production.
export const isDevEnv = process.env.NEXT_PUBLIC_APP_ENV === "dev";
