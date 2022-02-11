import ReactDOM from 'react-dom'
import React from 'react'
import { HashRouter as Router,Routes, Route } from "react-router-dom";

import Main from './component/Main'
import Weather from './component/Weather';
import About from './component/About';
import Examples from './component/Examples';
import 'foundation-sites/dist/css/foundation.min.css';

ReactDOM.render(
  <Router >
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Weather />} />
        <Route path="about" element={<About />} />
        <Route path="examples" element={<Examples />} />
      </Route>
    </Routes>
  </Router>,
    document.getElementById('app')
)
