import React, { PropTypes } from 'react';
import Ionicons from 'react-ionicons';
import { Article } from '../containers';
import { ItemMeta } from '../components';

export default class CategoryDetail extends React.Component {

  renderArticles() {
    const { category } = this.props;
    const articles = category.articles;
    return articles.map((article) => {
      return (
        <Article key={article._id} category={category} article={article} />
      );
    });
  }

  render() {
    const { category } = this.props;
    return (
      <div className="category-container">
        <div className="flex-item spaced">
          <div className="topic-icon">
            <Ionicons icon={category.icon} fontSize="46px" color="#818a88" />
          </div>
          <div className="topic-content">
            <h1>{category.title}</h1>
            {category.description}
            <ItemMeta category={category} />
          </div>
        </div>

        <div>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

CategoryDetail.propTypes = {
  category: PropTypes.object, // eslint-disable-line
};
