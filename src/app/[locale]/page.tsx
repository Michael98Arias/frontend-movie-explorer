import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing'; 
export default function HomePage(): JSX.Element {
  const t = useTranslations('HomePage'); 
  
  return (
    <div>
      <h1>{t('title')}</h1>
      {/* <Link href="/about">{t('about')}</Link> */}
    </div>
  );
}
