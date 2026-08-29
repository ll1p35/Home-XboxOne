interface BgImageProps {

    capa:string;
    background:string;
    name:string;
    onSelect: (bg: string) => void;
    isSelected: boolean;

}

export default function BgImage({
    capa,
    background,
    name,
    onSelect,
    isSelected,
}: BgImageProps) {
    const sizeClasses =
    isSelected ? "w-[150px] h-[150px]" : "w-[115px] h-[115px]"

return (
        <div
            onClick={() => onSelect(background)}
            className={`relative ${sizeClasses} rounded-xl bg-cover bg-center cursor-pointer
        overflow-hidden transition-all duration-300 ease-out
        ${
            isSelected
            ? "shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] scale-105 z-10"
            : "hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d]"
        }`}
            style={{ backgroundImage: `url(${capa})` }}>

        {isSelected && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-2 py-2">
                <p className="text-white text-[17px] font-light leading-tight truncate">
                {name}
                </p>
            </div>
        )}

        </div>
    );
}