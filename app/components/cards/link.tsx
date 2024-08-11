import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  name: string;
  link: URL;
  description: string;
  className: string | undefined;
}

export default function LinkCard({ icon, name, link, description, className }: Props) {
  return (
    <div className='py-12 w-60 h-4'>
      <Link
        className={
          " flex justify-center align-center text-center"
        }
        aria-label={description}
        href={link}
      >
        <div className={className + " rounded-[45px] hoverPop110 w-content flex justify-center align-center text-center"}>

          <FontAwesomeIcon icon={icon} className="min-h-8 min-w-8 px-4 py-2" />
          <h2 className="text-lg px-4 py-3 font-bold">{name}</h2>
        </div>

      </Link>
    </div>
  );
}
