import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import About from './about'
import Books from './books'
import Contact from './contact'
const Home = ()=>{
    return(
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='linksDiv'>
                <Route path='/' exact component={Books}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/about' component={About}></Route>
            </div>
        </Router>
    )
}

export default Home