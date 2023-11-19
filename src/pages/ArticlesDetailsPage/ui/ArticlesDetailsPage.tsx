import React from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesDetailsPage = () => {
    const { t } = useTranslation('articles-details');

    return (
        <div>
            {t('Статья')}
        </div>
    );
};

export default ArticlesDetailsPage;
