import React from 'react';
import { Helmet } from "react-helmet";

export const HelmetComponent: React.FC<{title: string, description: string}> = ({title, description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};