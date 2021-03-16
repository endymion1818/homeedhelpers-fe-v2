import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <ul>
      {pagination && pagination.map((it, i) => {
        const { page } = it
        return (
        <li key={i}>
          {it.excerpt ? (
            "..."
          ) : (
            <>
            {page && (
              <Link href={link.href(page)} as={link.as(page)}>
                <a className={it.page === current ? "active" : undefined}>{it.page}</a>
              </Link>
            )}
            </>
          )}
        </li>
      )})}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 3rem 0 0 0;
          padding: 0;
        }
        li {
          display: inline-block;
          margin-right: 1em;
          color: #9b9b9b;
          font-size: 1.25rem;
        }
        a.active {
          color: #222;
          font-weight: bold;
        }
      `}</style>
    </ul>
  );
}
