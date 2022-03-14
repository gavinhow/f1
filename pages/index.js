import React from "react";
import FullWidthLayout from "components/Layout/FullWidthLayout";
import Races from "components/Races/Races";
import Notice from "components/Notice/Notice";
import {NextSeo} from "next-seo";
import RaceSchema from "components/RaceSchema/RaceSchema";
import useTranslation from "next-translate/useTranslation";
import OptionsBar from "components/OptionsBar/OptionsBar";
const year = require(`../_db/${process.env.NEXT_PUBLIC_SITE_KEY}/${process.env.NEXT_PUBLIC_CURRENT_YEAR}.json`);

const Index = (props) => {
	const {t, lang} = useTranslation();

	const currentYear = process.env.NEXT_PUBLIC_CURRENT_YEAR;

	const title = t(`localization:${process.env.NEXT_PUBLIC_SITE_KEY}.seo.title`, {
		year: currentYear
	});
	const description = t(`localization:${process.env.NEXT_PUBLIC_SITE_KEY}.seo.description`, {
		year: currentYear
	});
	const keywords = t(`localization:${process.env.NEXT_PUBLIC_SITE_KEY}.seo.keywords`, {
		year: currentYear
	});

	const config = require(`../_db/${process.env.NEXT_PUBLIC_SITE_KEY}/config.json`);

	return (
		<>
			<NextSeo title={title} description={description} keywords={keywords} />
				<div className="max-w-screen-lg mx-auto font-sans">
					Motorsport Calender App
				</div>
		</>
	);
};

export default Index;
