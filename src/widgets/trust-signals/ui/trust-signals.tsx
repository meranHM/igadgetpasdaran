import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@shared/ui/section-heading";

const signalKeys = [
  "experience",
  "fairPricing",
  "transparentRepair",
  "realGuidance",
] as const;

export async function TrustSignals() {
  const t = await getTranslations("TrustSignals");

  return (
    <section
      id="why-us"
      className="relative my-7.5 scroll-mt-19 rounded-[2.25rem] bg-[radial-gradient(circle_at_0_100%,rgba(227,38,46,0.15),transparent_32%)] bg-ink p-[clamp(2.75rem,6vw,4.5rem)] text-white max-sm:mx-[-2px] max-sm:scroll-mt-16.5 max-sm:rounded-[1.75rem] max-sm:px-5.5 max-sm:py-8.5"
      data-robot-pose-zone="story"
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        tone="dark"
      />

      <div className="mt-12 grid grid-cols-1 border-s border-t border-white/12 sm:grid-cols-2">
        {signalKeys.map((key) => (
          <article
            className="grid min-h-50 grid-cols-[3rem_1fr] gap-4.5 border-e border-b border-white/12 p-7.5 max-sm:min-h-0 max-sm:px-4 max-sm:py-6.25"
            key={key}
          >
            <span className="text-[0.78rem] font-black tracking-[0.08em] text-[#ff5b62]">
              {t(`items.${key}.number`)}
            </span>
            <div>
              <h3 className="m-0 text-[1.06rem] leading-[1.5] font-extrabold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-[0.84rem] leading-[1.9] text-[#aaa8a2]">
                {t(`items.${key}.description`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
