import { getTranslations } from "next-intl/server";
import { RobotMascot } from "@entities/robot/ui/robot-mascot";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { cn } from "@shared/lib/cn";
import { containerClassName } from "@shared/ui/container";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  buttonSecondaryClassName,
} from "@shared/ui/styles";

const statKeys = ["experience", "services", "promise"] as const;

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      className={cn(
        containerClassName,
        "relative grid min-[861px]:min-h-[calc(100svh_-_4.875rem)] min-[861px]:grid-cols-[minmax(0,1.02fr)_minmax(25rem,0.98fr)] min-[861px]:grid-rows-[1fr_auto] min-[861px]:items-center min-[861px]:gap-x-[clamp(2rem,5.7vw,4.375rem)] gap-y-10.5 pt-[clamp(3.875rem,9vw,7rem)] pb-8.5 before:absolute before:top-[9%] before:-start-[13%] before:-z-1 before:size-70 before:rounded-full before:bg-[radial-gradient(circle,rgba(227,38,46,0.07),transparent_70%)] before:content-[''] max-[860px]:gap-8.5 max-[860px]:pt-18 max-sm:pt-13.5",
      )}
      data-robot-pose-zone="hero"
    >
      <div className="self-center text-center min-[861px]:text-start">
        <p className="mb-3.5 flex items-center justify-center gap-2.5 text-[0.78rem] font-extrabold tracking-[0.06em] text-accent min-[861px]:justify-start rtl:tracking-normal">
          <span
            className="relative h-0.5 w-6 rounded-sm bg-accent after:absolute after:-top-[3px] after:end-0 after:size-2 after:rounded-full after:bg-accent after:content-['']"
            aria-hidden="true"
          />
          {t("eyebrow")}
        </p>
        <h1 className="m-0 max-w-[47.5rem] text-[clamp(2.75rem,5.4vw,5.3rem)] leading-[1.15] font-[950] tracking-[-0.064em] rtl:tracking-[-0.045em] max-[860px]:mx-auto max-sm:text-[clamp(2.25rem,11.2vw,3.6rem)] max-sm:leading-[1.2] en:text-[clamp(2.65rem,5vw,4.85rem)] en:leading-[1.04] en:max-sm:text-[clamp(2.25rem,11vw,3.45rem)] en:max-sm:leading-[1.05]">
          {t.rich("title", {
            accent: (chunks) => (
              <span className="relative inline whitespace-nowrap text-accent after:absolute after:inset-x-0 after:bottom-[8%] after:-z-1 after:h-[12%] after:rotate-[-1deg] after:rounded-[100%] after:bg-accent/10 after:content-[''] max-sm:whitespace-normal">
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className="mt-6.5 max-w-160 text-[clamp(1rem,1.5vw,1.13rem)] leading-8 text-muted max-[860px]:mx-auto max-sm:mt-5 max-sm:text-[0.93rem]">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 min-[861px]:justify-start max-sm:grid max-sm:grid-cols-1">
          <a
            className={cn(buttonBaseClassName, buttonPrimaryClassName)}
            href={siteConfig.phoneHref}
          >
            <PhoneIcon />
            {t("primaryCta")}
          </a>
          <a
            className={cn(buttonBaseClassName, buttonSecondaryClassName)}
            href="#services"
          >
            {t("secondaryCta")}
            <ArrowIcon />
          </a>
        </div>

        <p className="mt-5.5 flex items-center justify-center gap-2.25 text-[0.8rem] font-bold text-[#56544f] min-[861px]:justify-start">
          <span className="grid size-6 place-items-center rounded-full bg-[#e9f5ed] text-[#25834d]">
            <CheckIcon className="size-3.75" />
          </span>
          {t("assurance")}
        </p>
      </div>

      <div className="relative grid aspect-square w-full max-w-[33.125rem] place-items-center justify-self-center self-center rounded-[48%_52%_46%_54%/48%_43%_57%_52%] border border-accent/[0.09] bg-[radial-gradient(circle_at_55%_42%,#fff_0_18%,transparent_55%),linear-gradient(145deg,#fff5f4_0%,#f2eee8_72%)] shadow-[inset_0_0_80px_rgba(255,255,255,0.82)] after:absolute after:inset-[10%] after:z-0 after:rounded-full after:border after:border-dashed after:border-accent/15 after:content-[''] min-[861px]:justify-self-end max-sm:rounded-[2.625rem]">
        <div
          className="absolute inset-[11%] z-1 rounded-full border border-[#1f1c1812] [&>span]:absolute [&>span]:size-2.75 [&>span]:rounded-full [&>span]:border-[3px] [&>span]:border-white [&>span]:bg-accent [&>span]:shadow-[0_5px_12px_rgba(227,38,46,0.2)]"
          aria-hidden="true"
        >
          <span className="start-[19%] top-[10%]" />
          <span className="end-[-1%] top-[52%]" />
          <span className="start-[26%] bottom-[5%]" />
        </div>
        <div className="relative z-2 w-[61%] drop-shadow-[0_24px_28px_rgba(28,25,22,0.14)]">
          <RobotMascot
            pose="hero"
            ariaLabel={t("robotAriaLabel")}
            className="robot-mascot--hero"
          />
        </div>
        <div className="absolute start-[-4%] bottom-[18%] z-4 flex items-center gap-2.25 rounded-[0.9375rem] border border-[#e0dad1e6] bg-white/90 px-4 py-3.25 text-[0.76rem] font-extrabold shadow-card max-sm:start-0 max-sm:bottom-[10%]">
          <span className="grid size-6.25 place-items-center rounded-lg bg-accent-soft text-accent">
            <CheckIcon className="size-3.75" />
          </span>
          {t("floatingNote")}
        </div>
      </div>

      <dl className="m-0 grid overflow-hidden rounded-[1.25rem] border border-line bg-white/70 min-[861px]:col-span-full sm:grid-cols-3">
        {statKeys.map((key) => (
          <div
            className="flex min-h-23 items-center justify-center gap-3.5 p-4.5 not-first:border-t not-first:border-line sm:not-first:border-t-0 sm:not-first:border-s max-sm:min-h-18.5"
            key={key}
          >
            <dt className="order-2 text-[0.77rem] font-bold text-muted">
              {t(`stats.${key}.label`)}
            </dt>
            <dd
              className={cn(
                "m-0 text-[1.65rem] font-[950] tracking-[-0.04em]",
                key === "experience" && "text-accent",
              )}
            >
              {t(`stats.${key}.value`)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
