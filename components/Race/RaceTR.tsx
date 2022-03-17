import React from "react";
import dayjs from "dayjs";

class RaceTR extends React.Component<any, any> {
	render() {
		const {t, lang} = this.props.i18n;

		if (lang === "en") {
			dayjs.locale(this.props.locale);
		} else {
			dayjs.locale(lang);
		}

		const hasMultipleFeaturedEvents = this.props.hasMultipleFeaturedEvents;
		const titleKey = "localization:schedule." + this.props.title;

		if (hasMultipleFeaturedEvents) {

			return (
				<tr className={`${this.props.collapsed ? "hidden" : ""}`}>
					<td className="w-1/8"></td>
					<td className="w-1/2 py-4 pl-2">{t(titleKey)}</td>
					<td className="w-1/3 text-right">
						<div className="relative right-3 sm:right-0">
							{dayjs(this.props.date)
								.tz(this.props.timezone)
								.format(
									this.props.timeFormat == 12
										? "D MMM h:mm A"
										: "D MMM HH:mm"
								)}
						</div>
					</td>
					<td />
				</tr>
			);
		} else {
			return (
				<tr className={`${this.props.collapsed ? "hidden" : ""}`}>
					<td className="w-1/8"></td>
					<td className="w-1/2 py-4 pl-5">{t(titleKey)}</td>
					<td className="w-1/6">
						{dayjs(this.props.date)
							.tz(this.props.timezone)
							.format("D MMM")}
					</td>
					<td className="w-1/6">
						<div className="relative right-3 sm:right-0">
							{dayjs(this.props.date)
								.tz(this.props.timezone)
								.format(this.props.timeFormat == 12 ? "h:mm A" : "HH:mm")}
						</div>
					</td>
					<td />
				</tr>
			);
		}
	}
}

export default RaceTR;
