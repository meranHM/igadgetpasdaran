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
import { contactStyles } from "./contact-styles";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="contact"
      className={contactStyles.root}
      data-robot-pose-zone="contact"
    >
      <div className={contactStyles.card}>
        <div className={contactStyles.details}>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <address className={contactStyles.address}>
            <div>
              <span className={contactStyles.detailIcon}>
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
              <span className={contactStyles.detailIcon}>
                <LocationIcon />
              </span>
              <span>
                <small>{t("details.addressLabel")}</small>
                <strong>{t("details.addressValue")}</strong>
              </span>
            </div>
            <div>
              <span className={contactStyles.detailIcon}>
                <ClockIcon />
              </span>
              <span>
                <small>{t("details.hoursLabel")}</small>
                <strong>{t("details.hoursValue")}</strong>
              </span>
            </div>
          </address>

          <div className={contactStyles.actions}>
            <a
              className={contactStyles.callButton}
              href={siteConfig.phoneHref}
            >
              <PhoneIcon />
              {t("callCta")}
            </a>
            <a
              className={contactStyles.whatsappButton}
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageIcon />
              {t("whatsappCta")}
            </a>
            <a
              className={contactStyles.telegramLink}
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
          className={contactStyles.map}
          role="img"
          aria-label={t("map.placeholder")}
        >
          <div
            className={contactStyles.mapRegions}
            aria-hidden="true"
          >
            <i className={contactStyles.mapRegionTopEnd} />
            <i className={contactStyles.mapRegionMiddleStart} />
            <i className={contactStyles.mapRegionTopStart} />
            <i className={contactStyles.mapRegionBottomEnd} />
            <i className={contactStyles.mapRegionMiddleEnd} />
          </div>
          <span
            className={contactStyles.mapPin}
            aria-hidden="true"
          >
            <LocationIcon className={contactStyles.mapPinIcon} />
          </span>
          <div className={contactStyles.mapCard}>
            <span className={contactStyles.mapEyebrow}>
              {t("map.eyebrow")}
            </span>
            <strong className={contactStyles.mapTitle}>
              {t("map.title")}
            </strong>
            <p className={contactStyles.mapDescription}>
              {t("map.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
