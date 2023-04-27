import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBarComponent from '../../components/nav_bar_component/nav_bar_component';
import useGetCurrentLanguage from '../../custom_hooks/use_get_current_language';
import { useTranslation } from 'react-i18next';
import ErrorAlertComponent from '../../components/error_alert/error_alert_component';
import ProgressLineComponent from '../../components/progress_line_component/progress_line.component';
import useAuth from '../../custom_hooks/use_auth';

const LayoutPage = () => {
    const { dir } = useGetCurrentLanguage()
    const { t } = useTranslation()

    const { fetchAuth } = useAuth()

    useEffect(() => {
        document.body.dir = dir
        document.title = t("app_title")
    }, [t, dir])

    useEffect(() => {
        fetchAuth()
    }, [])

    return (
        <>
            <NavBarComponent />
            <ProgressLineComponent />
            <ErrorAlertComponent />
            {/* The ExampleComponent component is for testing only you have to comment it in publish */}
            <Outlet />
        </>
    );
}

export default LayoutPage;
