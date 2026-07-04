import { getTranslations } from "next-intl/server";
import { CheckIcon, QuoteIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { pageSectionClassName } from "@shared/ui/styles";

const valueKeys = ["listen", "explain", "decide"] as const;

export async function TrustStory() {
  const t = await getTranslations("Story");

  return (
    <section
      id="story"
      className={pageSectionClassName}
      data-robot-pose-zone="story"
    >
      <div className="flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div
          className="grid min-w-36 justify-items-center rounded-[1.25rem] bg-accent-soft px-4 py-5 text-accent max-sm:auto-cols-auto max-sm:grid-flow-col max-sm:items-center max-sm:justify-items-start max-sm:gap-2.5 max-sm:px-4.25 max-sm:py-3.5"
          aria-label={`${t("yearsValue")} ${t("yearsLabel")}`}
        >
          <strong className="text-[3.25rem] leading-none font-[950] tracking-[-0.06em] max-sm:text-[2.2rem]">
            {t("yearsValue")}
          </strong>
          <span className="mt-2 text-[0.7rem] font-extrabold text-[#8d3438] max-sm:mt-0">
            {t("yearsLabel")}
          </span>
        </div>
      </div>

      <div className="mt-13 grid grid-cols-[1.1fr_0.9fr] gap-8 max-sm:mt-9 max-sm:grid-cols-1">
        <div className="pe-[clamp(0rem,3vw,2.25rem)] [&>p]:m-0 [&>p]:text-base [&>p]:leading-[2.1] [&>p]:text-[#55534e] [&>p+p]:mt-4.5">
          <p>{t("descriptionOne")}</p>
          <p>{t("descriptionTwo")}</p>
          <ul className="mt-7 flex list-none flex-wrap gap-2.5 p-0">
            {valueKeys.map((key) => (
              <li
                className="inline-flex items-center gap-1.75 rounded-full border border-line bg-white px-2.75 py-2 text-[0.71rem] font-bold text-[#54514c]"
                key={key}
              >
                <CheckIcon className="size-3.5 text-accent" />
                {t(`values.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="relative m-0 flex min-h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8.5 text-white shadow-soft after:absolute after:-end-10 after:-bottom-16.25 after:size-45 after:rounded-full after:border-[2.1875rem] after:border-accent/15 after:content-[''] max-sm:min-h-67.5 max-sm:p-7">
          <QuoteIcon className="size-9.5 text-accent" />
          <p className="relative z-1 mt-10.5 text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.9] font-bold">
            {t("quote")}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
