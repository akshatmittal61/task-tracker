import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ showAdd, show }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {location.pathname === "/" && <Button color={show ? "green" : "red"} text={show ? "Add" : "Close"} onClick={showAdd} />}
        </header>
    )
}

export default Header
