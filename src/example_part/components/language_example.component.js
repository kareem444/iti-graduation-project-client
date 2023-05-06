import React from 'react';
import { languagesOptions } from '../../utils/constants/language_options.constants';
import { GlobeIcon } from '../../components/globe_Icon.component' ;
import i18next from 'i18next';
import {useGetCurrentLanguage} from '../../custom_hooks/use_get_current_language';
import { useTranslation } from 'react-i18next';

const LanguageExampleComponent = () => {
    const { t } = useTranslation()
    const { code, country_code, name } = useGetCurrentLanguage()
    return (
        <div>
            <h1>Language Example Component</h1>
            <button disabled={code == languagesOptions[0].code} onClick={() => {
                i18next.changeLanguage(languagesOptions[0].code)
            }}>english</button>
            <button disabled={code == languagesOptions[1].code} onClick={() => {
                i18next.changeLanguage(languagesOptions[1].code)
            }}>arabic</button>
            <br />
            <span class={`flag-icon flag-icon-${languagesOptions[1].country_code}`}></span>
            <GlobeIcon />
            <h1>{t("welcome_message")}</h1>
        </div>
    );
}

export default LanguageExampleComponent;
