import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  doThing = () => {
    //this.props.dispatch(addRecipe({})) // you can do like this, too.
    this.props.selectRecipe({}) // A little bit cleaner way in react-redux
  }
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

function mapStateToProps({calendar, food}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
          meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null
          return meals
        }, {})
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
