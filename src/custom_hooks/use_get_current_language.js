import cookies from 'js-cookie'
import { languagesOptions } from '../utils/constants/language_options.constants';
import { useTranslation } from 'react-i18next';

export const useLang = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { code, country_code, name, dir } = languagesOptions.find((l) => l.code === currentLanguageCode)
    return { code, country_code, name, dir, isArabic: code == languagesOptions[1].code, translate: t }
}
