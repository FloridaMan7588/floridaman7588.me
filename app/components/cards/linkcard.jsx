import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkCard({
  icon,
  name,
  color,
  link,
  description,
  className,
}) {
  return (
    <div className={className}>
      <Link
        className={
          "bg-" +
          color +
          " w-60 h-12 rounded-[45px] flex justify-center align-center text-center hoverPop110"
        }
        aria-label={description}
        href={link}
      >
        <FontAwesomeIcon icon={icon} className="min-h-8 min-w-8 px-4 py-2" />
        <h2 className="text-lg px-4 py-3 font-bold">{name}</h2>
      </Link>
    </div>
  );
}
