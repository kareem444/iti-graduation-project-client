import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavBarComponent from '../../components/nav_bar_component/nav_bar_component';
import ExampleComponent from '../../example_part/example.component';
import useGetCurrentLanguage from '../../custom_hooks/use_get_current_language';
import { useTranslation } from 'react-i18next';

const LayoutPage = () => {
    const { dir } = useGetCurrentLanguage()
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = dir
        document.title = t("app_title")
    }, [t, dir])

    return (
        <>
            <NavBarComponent />
            <ExampleComponent />
            {/* The ExampleComponent component is for testing only you have to comment it in publish */}
            <Outlet />
        </>
    );
}

export default LayoutPage;
