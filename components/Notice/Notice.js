import useTranslation from "next-translate/useTranslation";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

export default function Notice(props) {
	const {t, lang} = useTranslation();

	return (
		<div className="px-2">
			<div className="bg-yellow-200 rounded-md shadow py-4 mb-4 px-4 text-black font-bold">
				{ props.notice }
			</div>
		</div>
	);
}
