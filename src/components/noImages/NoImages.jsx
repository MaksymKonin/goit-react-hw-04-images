import css from './NoImages.module.css';

const NoImages = () => {
  return (
    <div>
      <p className={css.noImages}>No pictures were found for your request</p>
    </div>
  );
};
export default NoImages;
