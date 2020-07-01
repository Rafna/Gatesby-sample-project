import React from "react"

/*export default function Header() {
  return <h1>This is a Header.</h1>
}*/
export default function Header(props) {
  return <h1>{props.headerText}</h1>
}
