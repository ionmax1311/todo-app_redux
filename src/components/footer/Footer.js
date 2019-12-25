import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all'
  },
  {
    text: 'Active',
    id: 'active'
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks active`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {
            changeFilter(id);
          }}
          key={id}
          className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  changeFilter: PropTypes.func,
  amount: PropTypes.number,
  activeFilter: PropTypes.string
};

Footer.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all'
};

export default Footer;
