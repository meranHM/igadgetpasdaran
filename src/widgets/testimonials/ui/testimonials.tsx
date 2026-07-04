import { getTranslations } from "next-intl/server";
import { QuoteIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { cn } from "@shared/lib/cn";
import { pageSectionClassName } from "@shared/ui/styles";

const testimonialKeys = ["first", "second", "third"] as const;

export async function Testimonials() {
  const t = await getTranslations("Testimonials");

  return (
    <section
      id="memories"
      className={pageSectionClassName}
      data-robot-pose-zone="story"
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mt-12 grid grid-cols-1 gap-3.75 sm:grid-cols-2 md:grid-cols-3">
        {testimonialKeys.map((key, index) => (
          <figure
            className={cn(
              "m-0 flex min-h-88.75 flex-col rounded-3xl border border-line bg-surface p-6.75 max-sm:min-h-80",
              index === 1 && "sm:translate-y-4.5 md:translate-y-4.5",
              index === 2 &&
                "sm:col-span-full sm:min-h-75 md:col-span-1 md:min-h-88.75",
            )}
            key={key}
          >
            <div className="flex items-center justify-between">
              <QuoteIcon className="size-7.75 text-accent" />
              <span className="rounded-full bg-surface-soft px-2.25 py-1.25 text-[0.63rem] font-extrabold text-[#8a877f]">
                {t("placeholderLabel")}
              </span>
            </div>
            <blockquote className="my-7.5 flex-1 text-[0.9rem] leading-8 font-semibold text-[#45433f]">
              {t(`items.${key}.quote`)}
            </blockquote>
            <figcaption className="flex items-center gap-2.75 border-t border-line pt-4.5">
              <span
                className="grid size-10 shrink-0 place-items-center rounded-[0.8125rem] bg-ink text-[0.8rem] font-black text-white"
                aria-hidden="true"
              >
                {t(`items.${key}.name`).charAt(0)}
              </span>
              <span className="grid gap-1">
                <strong className="text-[0.76rem] font-extrabold">
                  {t(`items.${key}.name`)}
                </strong>
                <small className="text-[0.64rem] text-muted">
                  {t(`items.${key}.relation`)}
                </small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
