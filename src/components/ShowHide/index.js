import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isActiveFirstName: false, isActiveLastName: false}

  firstNameButton = () => {
    this.setState(prevState => ({
      isActiveFirstName: !prevState.isActiveFirstName,
    }))
  }

  lastNameButton = () => {
    this.setState(prevState => ({
      isActiveLastName: !prevState.isActiveLastName,
    }))
  }

  render() {
    const {isActiveFirstName, isActiveLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button type="button" onClick={this.firstNameButton}>
              Show/Hide Firstname
            </button>
            {isActiveFirstName ? <p className="text-container">Joe</p> : null}
          </div>
          <div>
            <button type="button" onClick={this.lastNameButton}>
              Show/Hide Lastname
            </button>
            {isActiveLastName ? <p className="text-container">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
