import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Articles from "../../components/Articles";
import { useTranslation } from "react-i18next";

const Article = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="articles" title={t('menu_articles')} maxWidth="md">
      <Articles />
    </SectionContainer>
  );
};

export default Articles;
