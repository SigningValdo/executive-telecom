interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-4 ${centered ? "text-center" : ""}`}>
      <h2 className="text-[20px] md:text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className=" text-xs md:text-lg lg:text-2xl max-w-5xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
