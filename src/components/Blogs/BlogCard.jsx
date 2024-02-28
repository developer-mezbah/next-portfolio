import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../Others/Card3dEffect";

const BlogCard = ({
  index,
  image,
  title,
  author,
  authorUrl,
  publishedDate,
  body,
  blogUrl,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-[#e057e01c] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold"
        >
          Make things float in air
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-black dark:text-gray-500">
        {body.substring(0, 200)}...
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            priority
            className="h-full w-full object-cover rounded"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-black dark:text-gray-500"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
          >
            <Link
              className="button button--flex"
              href={blogUrl}
              target="_blank"
            >
              Read Full Article
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default BlogCard;
