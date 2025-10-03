import type React from "react";

type HeroProps = {
    title: string;
    subtitle: string;
    layout?: "25/75" | "50/50" | "75/25";
    signpostImage?: React.ReactNode;
    description?: React.ReactNode;
    cta?: React.ReactNode
}

export function Hero({ title, subtitle, layout = "50/50", signpostImage, description, cta }: HeroProps) {
    return(
        <section className={`p-strip--light is-shallow`}>
            <div className="row u--vertically-center u-align-middle">
                {/* Left / Signpost Image */}
                {signpostImage && (
                    <div className={`col-${layout.startsWith("25") ? "3" : layout.startsWith("75") ? "9" : "6"}`}>
                        <div className="p-image-container u-align-center">
                            {signpostImage}
                        </div>
                    </div>
                )}
                {/* Right / Content */}
                <div className={`col-${layout.endsWith("25") ? "3" : layout.endsWith("75") ? "9" : "6"}`}>
                    <h1 className="p-heading--2">{title}</h1>
                    <h2 className="p-heading--4">{subtitle}</h2>
                    {description}
                    {cta && <div className="p-button-group">{cta}</div>}
                </div>
            </div>
        </section>
    );
}