import React from "react";
import Logo from "../Logo/Logo";
import i18nConfig from "../../i18n.json";
import CTABar from "../CTABar/CTABar";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Header(props) {
    const config = props.config;

    const {t, lang} = useTranslation();
    const title = t(`localization:` + config.siteKey + `.title`);
    const subtitle = t(`localization:` + config.siteKey + `.subtitle`);

    const {languageNames} = i18nConfig;


    return (
        <div className="w-full bg-dark-green mb-4">
            <header className="max-w-screen-lg mx-auto font-sans px-2 py-4">
                <div className="md:justify-between md:flex">
                    <div className="md:flex md:justify-start mb-4">
                        <div
                            className="mx-auto md:m-0 md:w-auto mb-4 md:mb-0"
                            style={{width: "60px"}}
                        >
                            <Link href="/">
                                <a name={title}>
                                    <Logo/>
                                </a>
                            </Link>
                        </div>
                        <div className="mt-1 ml-0 md:ml-4 text-center md:text-left font-title uppercase">
                            <h1 className="mb-1 text-lg tracking-wider">
                                <Link href="/">
                                    <a
                                        name={title}
                                        className="text-white hover:text-white font-bold text-lg"
                                    >
                                        {title}&nbsp;
                                        {props.year && (
                                            <span>{props.year}</span>
                                        )}
                                        {lang !== "en" && (
                                            <span> | {languageNames[lang]}</span>
                                        )}
                                    </a>
                                </Link>
                            </h1>
                            <h2 className="text-xs font-normal tracking-wider">
                                <Link href="/">
                                    <a
                                        name={title}
                                        className="text-light-green hover:text-light-green"
                                    >
                                        {subtitle}
                                    </a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="clear-both"/>

                {props.showCTABar && <CTABar config={config}/>}

                { /*
					<div className="md:hidden fixed right-4 bottom-4 z-50" >
						<a
							href="https://www.buymeacoffee.com/f1cal"
							className="support-btn-rounded mt-3"
							onClick={() =>
								plausible("Support", {
									props: {
										buttonId: "mobile"
									}
								})
							}
						>
							<img
								src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
								width="15"
								height="15"
								alt="buymeacoffee"
							/>
						</a>
					</div>
					*/
                }

                <script data-name="BMC-Widget" data-cfasync="false"
                        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="f1cal"
                        data-description="Support F1 Calendar on Buy me a coffee!" data-message="" data-color="#d10f1e"
                        data-position="Right" data-x_margin="18" data-y_margin="18"/>

            </header>
        </div>
    );
};
