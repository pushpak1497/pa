import './index.css'

const PasswordItem = props => {
  const {details, onDeletePassword, isActive} = props
  const {id, webName, userName, password} = details
  const onClickDelete = () => {
    onDeletePassword(id)
  }
  return (
    <li className="item-container">
      <p className="initial">{userName.split('')[0]}</p>
      <div>
        <p>{webName}</p>
        <p>{userName}</p>
        {!isActive ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="icon1"
          />
        ) : (
          <p>{password}</p>
        )}
      </div>
      <button
        className="button1"
        data-testid="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem
