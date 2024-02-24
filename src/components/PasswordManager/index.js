import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    webName: '',
    userName: '',
    password: '',
    search: '',
    isActive: false,
  }

  onChangeWebName = event => {
    this.setState({
      webName: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onDeletePassword = id => {
    const {passwordList} = this.state
    const filteredData = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: filteredData,
    })
  }

  onChangeSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  isChecked = event => {
    console.log(event.target.value)
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {webName, userName, password} = this.state
    const newPassword = {
      id: v4(),
      webName,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      webName: '',
      userName: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordList,
      webName,
      userName,
      password,
      search,
      isActive,
    } = this.state
    const searchResults = passwordList.filter(each =>
      each.webName.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="logo"
        />
        <div className="card">
          <div className="form-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form" onSubmit={this.onAddPassword}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  placeholder="Enter Website"
                  className="input"
                  value={webName}
                  onChange={this.onChangeWebName}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  placeholder="Enter Username"
                  className="input"
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  placeholder="Enter Password"
                  type="password"
                  className="input"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-list-container">
          <div className="headings-container">
            <h1 className="heading">Your Passwords</h1>
            <p>{passwordList.length}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="search"
                type="search"
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr className="hr-line" />

          <div className="last-section">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" onChange={this.isChecked} />
              <label htmlFor="checkbox">Show passwords</label>
            </div>
          </div>
          {passwordList.length === 0 || searchResults.length === 0 ? (
            <div className="count-zero">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="text">No Passwords</p>
            </div>
          ) : (
            <ul className="list-container">
              {searchResults.map(each => (
                <PasswordItem
                  details={each}
                  key={each.id}
                  onDeletePassword={this.onDeletePassword}
                  isActive={isActive}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
