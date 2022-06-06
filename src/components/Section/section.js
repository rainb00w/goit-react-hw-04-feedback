import PropTypes from 'prop-types';
import s from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.divContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
