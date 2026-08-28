interface BgImageProps {

    capa:string;
    background:string;
    name:string;
    onSelect: (bg: string) => void;
    isSelected: boolean;
    size?: "sm" | "md";

}

export default function BgImage({
    capa,
    background,
    name,
    onSelect,
    isSelected,
    size = "sm",
}: BgImageProps) {
    const sizeClasses =
    size === "sm" ? "w-[120px] h-[120px]" : "w-[160px] h-[160px]";

return (
        <div
            onClick={() => onSelect(background)}
            className={`relative ${sizeClasses} rounded-xl bg-cover bg-center cursor-pointer
        overflow-hidden transition-all duration-300
        ${
            isSelected
            ? "shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d]"
            : "hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d]"
        }`}
            style={{ backgroundImage: `url(${capa})` }}>

        {isSelected && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
                <p className="text-white text-sm font-medium leading-tight truncate">
                {name}
                </p>
            </div>
        )}

        </div>
    );
}