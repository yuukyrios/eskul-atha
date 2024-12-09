import PropTypes from "prop-types";

const Card = ({ imgSrc, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={imgSrc}
        alt="Image Placeholder"
        className="rounded-md w-full h-40 object-cover"
      />
      <p className="mt-4 text-gray-600">{content}</p>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Ensure imgSrc is a string
  content: PropTypes.string.isRequired, // Ensure content is a string
};

export default Card;
