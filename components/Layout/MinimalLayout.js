import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Logo from "../Logo/Logo";
import Link from "next/link";

const MinimalLayout = (props) => {
	const {t, lang} = useTranslation();
	
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#eb000f"
				/>
				
				<meta name="msapplication-TileColor" content="#03120f" />
				<meta name="theme-color" content="#03120f" />
			</Head>

			<noscript>
				<div className="noscript">{t("localization:javascript")}</div>
			</noscript>


			<div className="max-w-screen-sm mx-auto font-sans px-2">
			
				<div className="mx-auto mt-5 mb-5" style={{width: "60px"}} >
					<Link href="/">
						<a>
							<Logo />
						</a>
					</Link>
				</div>
			
				{props.children}
			</div>
			
		</>
	);
};

export default MinimalLayout;
