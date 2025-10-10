import { useEffect, useState } from "react";
import { ReactCountryFlag } from "react-country-flag";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n, t } = useTranslation();
    const [atHome, setAtHome] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            // Considera "atHome" se lo scroll è vicino a 0 (in cima)
            setAtHome(window.scrollY < 300);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-30 w-full py-6 px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
                {/* Bottone bandiera IT */}
                <button
                    onClick={() => i18n.changeLanguage("it")}
                    className="text-1l"
                    aria-label="Italiano"
                >
                    <ReactCountryFlag countryCode="IT" svg style={{ width: "2em", height: "2em" }} />
                </button>
                {/* Bottone bandiera EN */}
                <button
                    onClick={() => i18n.changeLanguage("en")}
                    className="text-1l"
                    aria-label="English"
                >
                    <ReactCountryFlag countryCode="GB" svg style={{ width: "2em", height: "2em" }} />
                </button>
                {!atHome && (
                    <>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-inner flex items-center justify-center text-black font-bold">{t("main.acronim")}</div>
                        <div>
                            <div className="text-lg font-semibold">{t("main.name")}</div>
                            <div className="text-xs text-slate-400">{t("main.role")} — {t("main.brief")}</div>
                            <div className="text-xs text-slate-400">{t("main.description")}</div>
                        </div>
                    </>
                )}
            </div>
            <nav className="hidden md:flex gap-6 text-slate-300">
                <a href="#Home" className="hover:text-white">{t("navigation.home")}</a>
                <a href="#AboutMe" className="hover:text-white">{t("navigation.about")}</a>
                <a href="#Experience" className="hover:text-white">{t("navigation.experience")}</a>
                <a href="#Projects" className="hover:text-white">{t("navigation.projects")}</a>
                <a href="#Education" className="hover:text-white">{t("navigation.education")}</a>
                <a href="#Skills" className="hover:text-white">{t("navigation.skills")}</a>
                <a href="#Contact" className="hover:text-white">{t("navigation.contact")}</a>
            </nav>
        </header>
    );
}

export default Header;