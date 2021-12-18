import { FC } from "react"
import { Link } from "remix"

type CardProps = {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
}

export const Card: FC<CardProps> = ({ title, url, description, imgUrl }) => {
  return (
    <div className="w-full lg:w-auto mt-4 lg:mt-0 h-auto self-stretch mr-8 mb-12">
      <div className="lg:max-w-sm rounded-lg overflow-hidden shadow-lg flex-col flex h-full">
        <Link to={url}
          className="lg:max-w-sm overflow-hidden flex-row lg:flex-col flex h-full z-10">
          <img src={imgUrl}
            className="hidden sm:flex flex-shrink-0 w-1/4 lg:w-auto pointer-events-none"
            loading="eager"
          />
          <div className="px-6 py-4 flex flex-initial flex-col">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                {description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}