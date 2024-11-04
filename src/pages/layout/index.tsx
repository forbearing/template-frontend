import { AutoHiddenScrollbar } from '@/components/auto-hidden-scrollbar'
import { AutoLoading } from '@/components/auto-loading'
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
