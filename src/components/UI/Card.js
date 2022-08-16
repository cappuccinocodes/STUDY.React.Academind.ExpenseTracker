import './Card.css'

const Card = (props) => {
    const classes = 'card '  + props.className;
    return <div className={classes}>{props.children}</div> // children = built into react and is what's between open and close tags
}

export default Card;