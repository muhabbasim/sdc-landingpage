
import { useTranslation } from 'react-i18next';

export default function Translatable({ children } ) {
  const { t } = useTranslation();

  return (
    <>
      {t(`${ children }`)}
    </>
  )
}
