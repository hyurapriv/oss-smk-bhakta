import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({
  className,
  onClick,
  imageUrl,
  imageAlt,
  title,
  subtitle,
  content,
  imgClassName,
  imgContainerClassName,
  footer,
  children,
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      onClick={onClick}
      {...props}
    >
      {imageUrl && (
        <div className={`relative ${imgContainerClassName || 'w-full pt-[56.25%]'}`}>
          <LazyLoadImage
            src={imageUrl}
            alt={imageAlt || title}
            effect="blur"
            className={`absolute top-0 left-0 w-full h-full object-cover ${imgClassName}`}
            wrapperClassName="absolute top-0 left-0 w-full h-full"
          />
        </div>
      )}
      <div className="p-4">
        {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
        {subtitle && <h4 className="text-gray-600 mb-2">{subtitle}</h4>}
        {content && <div className="text-gray-700">{content}</div>}
        {children}
      </div>
      {footer && <div className="border-t p-4">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  imgClassName: PropTypes.string,
  imgContainerClassName: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export default Card;