import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewClient from './components/pages/NewClient'
import Clients from './components/pages/Clients';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {


    return (
        <Router>
            <Navbar></Navbar>
            
            <Container customClass='min-height'>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}>
                    </Route>
                    <Route exact path="/clients" element={<Clients></Clients>}>
                    </Route>
                    <Route exact path="/company" element={<Company></Company>}>
                    </Route>
                    <Route exact path="/contact" element={<Contact></Contact>}>
                    </Route>
                    <Route exact path="/newclient" element={<NewClient></NewClient>}>
                    </Route>
                </Routes>
            </Container>

            <Footer></Footer>
        </Router >


    );


}

export default App;