import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import About from './components/About'
import Stories from './components/Stories'
import Poems from './components/Poems'
import Articles from './components/Articles'
import Reviews from './components/Reviews'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/about">
                        <Header />
                        <About />
                    </Route>

                    <Route path="/stories">
                        <Header />
                        <Stories />
                    </Route>

                    <Route path="/poems">
                        <Header />
                        <Poems />
                    </Route>

                    <Route path="/articles">
                        <Header />
                        <Articles />
                    </Route>

                    <Route path="/reviews">
                        <Header />
                        <Reviews />
                    </Route>

                    <Route path="/">
                        <Header />
                        <MainContent />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
