import React from "react";
import "./switch_button_component.css";
import i18next from "i18next";
import { languagesOptions } from "../../utils/constants/language_options.constants";
import { useLang } from "../../custom_hooks/use_get_current_language";

const SwitchLanguageComponent = () => {
    const { code, isArabic } = useLang();

    const handleToggleChange = () => {
        if (code == languagesOptions[0].code) {
            i18next.changeLanguage(languagesOptions[1].code);
        } else {
            i18next.changeLanguage(languagesOptions[0].code);
        }
    };

    return (
        <div
            className="toggle-container d-flex justify-content-center mt-4 ms-4"
            onClick={handleToggleChange}
        >
            <div
                className="toggle-btn"
                style={{
                    transform: isArabic ? "translateX(75%)" : "translateX(0)",
                }}
            >
                {code.toString().toUpperCase()}
            </div>
        </div>
    );
};

export default SwitchLanguageComponent;
