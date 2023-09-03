import PropTypes from "prop-types";


const GiftItem = ({title, url})=>{

    return (
        <>
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>


        </>
    )
}

GiftItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export {
    GiftItem
};

