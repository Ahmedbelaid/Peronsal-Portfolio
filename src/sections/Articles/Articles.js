import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import ArticlesGallery from "../../components/Articles";
import { useTranslation } from "react-i18next";

const Articles = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="articles" title={t('menu_articles')} maxWidth="md">
      <ArticlesGallery />
    </SectionContainer>
  );
};

export default Articles;
