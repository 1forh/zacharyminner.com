import React from 'react';
import { Link } from 'gatsby';
import BalanceText from 'react-balance-text';
import moment from 'moment';

const ContentPreview = ({ slug, title, date, summary, tags }) => {
  return (
    <div>
      <h3 className="flex mb-1">
        <Link to={slug} className="inline-block font-bold text-20">
          <BalanceText>{title}</BalanceText>
        </Link>
      </h3>
      {date && <p className="mb-2 text-gray-700">{moment(new Date(date)).format('MMMM D, YYYY')}</p>}
      {summary && <div>{summary}</div>}
      {tags && (
        <div className="flex items-center mt-2 space-x-4">
          {tags.map((tag) => (
            <div key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-12 font-medium leading-5 bg-indigo-100 text-indigo-800">
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentPreview;
