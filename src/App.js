import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import About from './components/About'
import Stories from './components/Stories'
import Poems from './components/Poems'
import History from './components/History'
import Reviews from './components/Reviews'
import FullContent from './components/FullContent'
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

                    <Route path="/history">
                        <Header />
                        <History />
                    </Route>

                    <Route path="/reviews">
                        <Header />
                        <Reviews />
                    </Route>

                    <Route path="/content/:title">
                        <Header />
                        <FullContent />
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
