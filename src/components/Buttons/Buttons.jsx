import PropTypes from 'prop-types'
const Buttons = props => {
  return (
      <button
          className={`btn ${props.className}`}
          onClick={props.onClick ? () => props.onClick(): null}
      >
             {props.children}
    </button>
  )
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}


Buttons.propTypes = {
    onClick: PropTypes.func
}
export default Buttons