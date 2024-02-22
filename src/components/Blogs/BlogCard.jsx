import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="h-full w-full overflow-hidden">
      <div className="h-full w-full overflow-hidden rounded-xl border border-dark/10 bg-light">
        <div className="h-[10rem] w-full overflow-hidden sm:h-[15rem]">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-3 p-5">
          <h3 className="text-2xl font-semibold">
            {title.substring(0, 60)}...
          </h3>
          <div className="flex w-full flex-col justify-between gap-y-1.5 text-dark/50 sm:flex-row sm:gap-y-0">
            <p>
              by{" "}
              <Link
                href={authorUrl}
                target="_blank"
                className="link-item-dark text-dark"
              >
                {author}
              </Link>
            </p>
            <p className="text-dark">{publishedDate}</p>
          </div>
          <p>{body.substring(0, 200)}...</p>
          <Link className="button button--flex" href={blogUrl} target="_blank">
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
