import useTranslation from "next-translate/useTranslation";
import {NextSeo} from "next-seo";
import FullWidthLayout from "../../components/Layout/FullWidthLayout";
import OptionsBar from "../../components/OptionsBar/OptionsBar";
import Notice from "../../components/Notice/Notice";
import Races from "../../components/Races/Races";
import React from "react";

const Index = (props) => {
  const {t, lang} = useTranslation();
  const site_key = props.site_key;

  const currentYear = process.env.NEXT_PUBLIC_CURRENT_YEAR;


  const title = t(`localization:${site_key}.seo.title`, {
    year: currentYear
  });
  const description = t(`localization:${site_key}.seo.description`, {
    year: currentYear
  });
  const keywords = t(`localization:${site_key}.seo.keywords`, {
    year: currentYear
  });

  const config = require(`../../_db/${site_key}/config.json`);
  const year = require(`../../_db/${site_key}/${process.env.NEXT_PUBLIC_CURRENT_YEAR}.json`);


  return (
    <>
      <NextSeo title={title} description={description} />
      <FullWidthLayout config={config} showCTABar="true" year={currentYear}>
        <div className="max-w-screen-lg mx-auto font-sans">
          <div className="px-2">
            <OptionsBar />
          </div>

          { config.notice != null &&
            <Notice notice={config.notice} />
          }

          <div className="px-0 md:px-2">
            <Races config={config} year={currentYear} races={year.races} />
          </div>
        </div>
      </FullWidthLayout>
    </>
  );
};

export async function getStaticProps({params}) {
  return {
    revalidate: 3600,
    props: {
      site_key: params.series
    }
  }


}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { series: "f1" } }
    ],
    fallback: 'blocking' // false or 'blocking'
  };
}

export default Index;
