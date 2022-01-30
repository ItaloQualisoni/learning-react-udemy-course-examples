import ReactDOM from 'react-dom'
import React, {Fragment} from 'react'
//import { Route , HashRouter as Router, BrowserRouter } from 'react-router-dom'
import { HashRouter as Router,Routes, Route } from "react-router-dom";

import Main from './component/Main'
import Weather from './component/Weather';
import About from './component/About';

ReactDOM.render(
    <Router >
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Weather />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById('app')
)
