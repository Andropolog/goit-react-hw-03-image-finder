import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = () => ({
  render() {
    const { articleList, onSelect } = this.props;
    return (
      <ul className={styles.list}>
        {articleList.map(article => (
          <ImageGalleryItem
            key={article.id}
            webformatURL={article.webformatURL}
            alt={article.tags}
            onSelect={() => onSelect(article.id)}
          />
        ))}
      </ul>
    );
  }
})

ImageGallery.propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object),
    onSelect: PropTypes.func,
  };

export default ImageGallery;