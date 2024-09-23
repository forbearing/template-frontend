import Home from 'pages/Home'
import Layout from 'pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PAGE_HOME } from 'types/page'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={PAGE_HOME} element={<Home />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
