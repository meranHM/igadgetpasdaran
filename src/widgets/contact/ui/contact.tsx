import { getTranslations } from "next-intl/server";
import { siteConfig } from "@shared/config/site";
import {
  ClockIcon,
  ExternalArrowIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
} from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  pageSectionClassName,
} from "@shared/ui/styles";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="contact"
      className={cn(pageSectionClassName, "border-t border-line")}
      data-robot-pose-zone="contact"
    >
      <div className="grid overflow-hidden rounded-[2.25rem] border border-line bg-surface shadow-soft md:grid-cols-[1.04fr_0.96fr]">
        <div className="p-[clamp(2rem,5vw,3.875rem)] max-sm:px-5.5 max-sm:py-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <address className="mt-8.5 grid gap-2.5 not-italic [&>div]:flex [&>div]:items-center [&>div]:gap-3.25 [&>div]:py-3.25 [&>div>span:last-child]:grid [&>div>span:last-child]:gap-0.5 [&_small]:text-[0.67rem] [&_small]:font-bold [&_small]:text-muted [&_strong]:text-[0.82rem] [&_strong]:leading-[1.7] [&_strong]:font-extrabold [&_a]:text-[0.82rem] [&_a]:leading-[1.7] [&_a]:font-extrabold [&_a:hover]:text-accent">
            <div>
              <span className="grid size-10.5 shrink-0 place-items-center rounded-[0.8125rem] bg-surface-soft text-accent [&>svg]:size-5">
                <PhoneIcon />
              </span>
              <span>
                <small>{t("details.phoneLabel")}</small>
                <a href={siteConfig.phoneHref} dir="ltr">
                  {t("details.phoneValue")}
                </a>
              </span>
            </div>
            <div>
              <span className="grid size-10.5 shrink-0 place-items-center rounded-[0.8125rem] bg-surface-soft text-accent [&>svg]:size-5">
                <LocationIcon />
              </span>
              <span>
                <small>{t("details.addressLabel")}</small>
                <strong>{t("details.addressValue")}</strong>
              </span>
            </div>
            <div>
              <span className="grid size-10.5 shrink-0 place-items-center rounded-[0.8125rem] bg-surface-soft text-accent [&>svg]:size-5">
                <ClockIcon />
              </span>
              <span>
                <small>{t("details.hoursLabel")}</small>
                <strong>{t("details.hoursValue")}</strong>
              </span>
            </div>
          </address>

          <div className="mt-7.5 flex flex-wrap items-center gap-2.5 max-sm:grid max-sm:grid-cols-1">
            <a
              className={cn(
                buttonBaseClassName,
                buttonPrimaryClassName,
                "min-h-12.25 px-4 text-[0.76rem]",
              )}
              href={siteConfig.phoneHref}
            >
              <PhoneIcon />
              {t("callCta")}
            </a>
            <a
              className={cn(
                buttonBaseClassName,
                "min-h-12.25 border-white/12 bg-white px-4 text-[0.76rem] text-ink",
              )}
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageIcon />
              {t("whatsappCta")}
            </a>
            <a
              className="inline-flex items-center gap-1.25 p-2.5 text-[0.72rem] font-extrabold text-muted hover:text-accent max-sm:justify-center [&>svg]:size-4.25"
              href={siteConfig.telegramHref}
              target="_blank"
              rel="noreferrer"
            >
              {t("telegramCta")}
              <ExternalArrowIcon />
            </a>
          </div>
        </div>

        <div
          className="relative min-h-155 overflow-hidden bg-[#f0ede7] bg-[linear-gradient(120deg,rgba(239,236,230,0.2),rgba(227,38,46,0.05))] before:absolute before:top-[19%] before:start-[-24%] before:h-8.5 before:w-[150%] before:rotate-[-31deg] before:border before:border-[#5c574f1c] before:bg-white/35 before:content-[''] after:absolute after:start-[-23%] after:bottom-[20%] after:h-8.5 after:w-[150%] after:rotate-[26deg] after:border after:border-[#5c574f1c] after:bg-white/35 after:content-[''] max-md:min-h-110 max-sm:min-h-97.5"
          role="img"
          aria-label={t("map.placeholder")}
        >
          <div
            className="absolute inset-0 [&>i]:absolute [&>i]:block [&>i]:rounded-[1.125rem] [&>i]:border [&>i]:border-[#5c574f1a]"
            aria-hidden="true"
          >
            <i className="inset-[8%_8%_61%_52%]" />
            <i className="inset-[41%_56%_31%_4%]" />
            <i className="inset-[13%_50%_65%_6%]" />
            <i className="inset-[63%_8%_8%_59%]" />
            <i className="inset-[38%_9%_40%_63%]" />
          </div>
          <span
            className="absolute top-[32%] start-[55%] z-2 grid size-16 rotate-[-45deg] place-items-center rounded-[50%_50%_50%_8px] border-8 border-white/80 bg-accent text-white shadow-[0_18px_35px_rgba(227,38,46,0.28)]"
            aria-hidden="true"
          >
            <LocationIcon className="size-7 rotate-45" />
          </span>
          <div className="absolute inset-x-6 bottom-6 z-3 rounded-[1.25rem] border border-white/70 bg-white/90 p-5.5 shadow-card backdrop-blur-lg">
            <span className="text-[0.66rem] font-extrabold text-accent">
              {t("map.eyebrow")}
            </span>
            <strong className="mt-1.25 block text-base">
              {t("map.title")}
            </strong>
            <p className="mt-2 text-[0.73rem] leading-[1.8] text-muted">
              {t("map.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
