import Link from "next/link";
import { useTranslations } from "next-intl";
import "../../styles/components/error-found.css";

export default function NotFound() {
  const t = useTranslations("ErrorNotFound");
  return (
    <div>
      <div className="not-found-container">
        <div className="not-found-code">404</div>
        <div className="not-found-text">{t("error.notFound")}</div>

        <Link href="/" className="not-found-button">
          {t("error.labelButton")}
        </Link>
      </div>
    </div>
  );
}
