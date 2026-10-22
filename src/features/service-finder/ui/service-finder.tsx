import { serviceIds, type ServiceId } from "@entities/service/model/services";
import { ServiceIcon } from "@entities/service/ui/service-icon";
import { cn } from "@shared/lib/cn";
import { ArrowIcon } from "@shared/ui/icons";
import {
  activeResultStyles,
  serviceFinderStyles as styles,
} from "./service-finder-styles";

type ServiceFinderProps = {
  label: string;
  hint: string;
  resultLabel: string;
  detailLink: string;
  options: Record<
    ServiceId,
    { label: string; title: string; description: string }
  >;
};

export function ServiceFinder({
  label,
  hint,
  resultLabel,
  detailLink,
  options,
}: ServiceFinderProps) {
  return (
    <fieldset className={styles.root} aria-describedby="service-finder-hint">
      <legend className={styles.legend}>{label}</legend>
      <div className={styles.controls}>
        {serviceIds.map((id) => (
          <label className={styles.option} key={id}>
            <input
              type="radio"
              name="service-finder"
              value={id}
              defaultChecked={id === "repair"}
              aria-controls={`finder-result-${id}`}
              className={styles.radio}
            />
            <span className={styles.control}>
              <ServiceIcon type={id} />
              <span>{options[id].label}</span>
            </span>
          </label>
        ))}
      </div>
      <p id="service-finder-hint" className={styles.hint}>
        {hint}
      </p>
      <div className={styles.connector} aria-hidden="true" />
      <div className={styles.results}>
        {serviceIds.map((id) => (
          <div
            id={`finder-result-${id}`}
            key={id}
            className={cn(styles.result, activeResultStyles[id])}
          >
            <div className={styles.resultHeader}>
              <span className={styles.icon}>
                <ServiceIcon type={id} />
              </span>
              <div>
                <p className={styles.resultLabel}>{resultLabel}</p>
                <h3 className={styles.title}>{options[id].title}</h3>
              </div>
            </div>
            <p className={styles.description}>{options[id].description}</p>
            <a href={`#service-${id}`} className={styles.link}>
              {detailLink}
              <ArrowIcon />
            </a>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
