import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
function HomeScreen() {
  return (
    <div>
      <div>411W GOLD HomeScreen</div>
      <Link to="/product">
        <Button variant="primary">Go to Product Screen</Button>
      </Link>
    </div>
  )
}

export default HomeScreen
