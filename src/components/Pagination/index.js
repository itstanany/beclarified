import { memo } from 'react'
import Link from 'next/link';
import s from './style/index.module.scss';
import { useRouter } from 'next/router';

const SECTION_SIZE = 5;

function Pagination({ total = 1/* , activePage = 1 */ } = { total: 1/* , activePage: 1 */ }) {
  const router = useRouter();
  const paginationItems = [];
  // page must be +ve integer
  const activePage = (parseInt(router?.query?.page, 10) || 1)

  // page must be Non-negative integer
  // if (Number.isNaN(activePage) || activePage <= 0) activePage = 1;
  const startPage = (Math.floor((activePage - 1) / SECTION_SIZE) * SECTION_SIZE) + 1; // 6
  const endPage = startPage + (SECTION_SIZE - 1); // 10
  // 0 indicated we reach extremes and the pagination item must be disabled
  const previousSection = startPage === 1 ? 0 : startPage - SECTION_SIZE; // 1
  const nextSection = endPage > total ? 0 : startPage + SECTION_SIZE; // 0

  // build a list of pagination items. Each one is wrapped by "LinkContainer" component
  for (let i = startPage, end = Math.min(endPage, total); i <= end; i += 1) {
    const query = { ...(router?.query || {}) };
    query.page = i;
    paginationItems.push((
      <Link
        href={
          {
            query,
          }
        }
        key={i}>
        <a
          data-active={i === activePage}
        >
          {
            i
          }
        </a>
      </Link>
    ));
  }
  // only render when the url query parameter "page" is valid
  return (
    activePage <= total
      ? (
        <section className={s.pagination} dir="ltr">
          <Link
            href={
              {
                query: {
                  ...router.query,
                  page: previousSection
                }
              }
            }
          >
            <a
              disabled={previousSection < 1 || activePage < SECTION_SIZE}
            >
              &lt;
            </a>
          </Link>
          {
            paginationItems
          }


          <Link
            href={
              {
                query: {
                  ...router.query,
                  page: nextSection
                }
              }
            }
          >
            <a
              disabled={total <= endPage}
            >
              &gt;
            </a>
          </Link>
        </section>
      )
      : null
  )
}

const memoizedPagination = memo(Pagination);

export default memoizedPagination;

export {
  memoizedPagination as Pagination,
}
