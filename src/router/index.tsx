import Home from '@/pages/home'
import Layout from '@/pages/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PAGE_HOME } from '@/types/page'

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
