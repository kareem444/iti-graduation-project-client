import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
// import NavBarComponent from '../../components/nav_bar_component/nav_bar_component';
import {useLang} from '../../custom_hooks/use_get_current_language';
import { useTranslation } from 'react-i18next';
import ErrorAlertComponent from '../../components/error_alert/error_alert_component';
import ProgressLineComponent from '../../components/progress_line_component/progress_line.component';
import NavBarComponent from '../../imported/components/nav_bar_component';
import Basket from  '../../imported/components/basket/Basket'
import FooterComponent from '../../imported/components/footer_component';
import SuccessAlertComponent from '../../components/success_alert/success_alert_component';

const LayoutPage = () => {
    const { dir } = useLang()
    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = dir
        document.title = t("app_title")
    }, [t, dir])

    return (
        <>
            <NavBarComponent />
            <ProgressLineComponent />
            <ErrorAlertComponent />
            <SuccessAlertComponent />
            <Basket />
            {/* The ExampleComponent component is for testing only you have to comment it in publish */}
            <Outlet />
            <FooterComponent />
        </>
    );
}

export default LayoutPage;
