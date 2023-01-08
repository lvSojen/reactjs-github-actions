import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
function ProductScreen() {
  return (
    <div>
      <div>ProductScreen</div>

      <Link to="/">
        <Button variant="primary">Go to Home Screen</Button>
      </Link>
    </div>
  )
}

export default ProductScreen
