import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
    const { t } = useTranslation();
    const features = [
        t('why1'),
        t('why2'),
        t('why3'),
        t('why4'),
        t('why5'),
        t('why6'),
    ];

    return (
        <div className="font-primary py-12">
            <h2 className="text-4xl font-bold text-[#134B70] text-center mb-6">{t('why')}</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {features.map((feature, index) => (
                    <div key={index}
                        className="relative shadow-md rounded-lg p-6 w-64 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}
