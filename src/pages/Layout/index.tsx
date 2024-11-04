import AutoHiddenScrollbar from '@/components/AutoHiddenScrollbar'
import AutoLoading from '@/components/AutoLoading'
import { Outlet } from 'react-router-dom'

export default () => {
  return (
    <AutoHiddenScrollbar>
      <AutoLoading>
        <Outlet />
      </AutoLoading>
    </AutoHiddenScrollbar>
  )
}
