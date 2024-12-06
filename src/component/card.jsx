import PropTypes from 'prop-types'
const Card = ({ imgSrc, content }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt="Image Placeholder" />
            <p>{content}</p>
        </div>
    );
};

Card.propTypes = {imgSrc: PropTypes.string, content:PropTypes.string}

export default Card;
