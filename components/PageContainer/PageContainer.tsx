import s from './PageContainer.module.scss';

const PageContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default PageContainer;