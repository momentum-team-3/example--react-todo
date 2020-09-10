import React from 'react'
import './App.css'

class App extends React.Component {
  render () {
    const items = [
      { completed: false, text: 'Pick up milk' },
      { completed: true, text: 'Take out trash' },
      { completed: false, text: 'Feed cat' }
    ]

    const otherItems = [
      { completed: false, text: 'Make lunch' }
    ]

    return (
      <div className='App'>
        <h1>Todo list</h1>
        <TodoList items={items} />
        <h1>Items for later</h1>
        <TodoList items={otherItems} />
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideCompleted: false
    }
  }

  render () {
  /*
  items should be a array of objects like
  [{completed: false, text: 'Pick up milk'}]
  */

    let items = this.props.items
    if (this.state.hideCompleted) {
      items = items.filter(item => !item.completed)
    }

    return (
      <div>
        <label>
          <input
            type='checkbox' checked={this.state.hideCompleted}
            onClick={(event) => this.setState({ hideCompleted: event.target.checked })}
          />
          Hide completed items
        </label>
        <ul>
          {items.map(
            (item, idx) => (
              <li className={item.completed ? 'completed' : undefined} key={idx}>
                {item.text}
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App

/*
&&
||
?:

if (a > 10) {
  doThis()
} else {
  doThat()
}

(a > 10) ? doThis() : doThat()

*/
