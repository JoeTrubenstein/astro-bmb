import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, tags, author, ogImage } =
    frontmatter;
  return (
    <div>
      <article className="bg-white rounded-lg border border-skin-line p-6 shadow-md">
        <div className="text-gray-500 mb-5 flex items-center justify-between">
          <span className=" inline-flex items-center rounded px-2.5 py-0.5 text-sm font-medium">
            {tags.map(tag => (
              <a key={description} href={`/tags/${tag}`}>
                #{tag}&nbsp;
              </a>
            ))}
          </span>
          <span className="text-sm">
            {" "}
            <Datetime datetime={pubDatetime} />
          </span>
        </div>

        <div className="mb-2">
          <img
            className="aspect-video rounded object-cover"
            src={ogImage}
          ></img>
        </div>

        <div className="overflow-hidden sm:h-48 lg:mb-4">
          {secHeading ? (
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-skin-accent">
              <a href={href}>{title}</a>
            </h2>
          ) : (
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-skin-accent">
              <a href={href}>{title}</a>
            </h2>
          )}

          <p className="mb-5 text-skin-soft">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jesse Leos avatar" /> */}
            <span className="dark:text-white font-medium">{author}</span>
          </div>
          <a
            href={href}
            className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
          >
            Read more
            <svg
              className="ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}
