import cookies from 'js-cookie'
import { languagesOptions } from '../utils/constants/language_options.constants';

const useGetCurrentLanguage = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { code, country_code, name, dir } = languagesOptions.find((l) => l.code === currentLanguageCode)
    return { code, country_code, name, dir }
}

export default useGetCurrentLanguage