import { PageHeader } from './PageHeader';
import { PageBody } from './PageBody';
import { PageFooter } from './PageFooter';
import s from './style/index.module.scss';



function Page({
  children,
  className = '',
  ...remaining
} = {}) {
  console.log('inside page component');
  console.log({ children })
  return (
    <div
      className={`${s.page} ${className}`}
      {
      ...remaining
      }
    >
      {
        children
      }
    </div>
  );
}


Page.Header = PageHeader;
Page.Body = PageBody;
Page.Footer = PageFooter;

export default Page

export {
  Page,
  PageHeader,
  PageBody,
  PageFooter,
}
