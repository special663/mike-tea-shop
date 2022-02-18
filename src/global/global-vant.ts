import {
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  Button,
  Card,
  CellGroup,
  Col,
  Dialog,
  Field,
  Form,
  Icon,
  Loading,
  NavBar,
  Overlay,
  Popup,
  PullRefresh,
  Row,
  Search,
  Sidebar,
  SidebarItem,
  Step,
  Steps,
  Sticky,
  SubmitBar,
  Swipe,
  SwipeItem,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Toast
} from 'vant'
import 'vant/es/button/style'
import 'vant/es/icon/style'

import type { App } from 'vue'

const vants = [
  Button,
  Icon,
  NavBar,
  Form,
  Field,
  CellGroup,
  Row,
  Col,
  Popup,
  Loading,
  Steps,
  Step,
  Toast,
  Dialog,
  Overlay,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Search,
  PullRefresh,
  Tabs,
  Tab,
  Sidebar,
  SidebarItem,
  Sticky,
  SubmitBar,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Card
]

export default function registerVantsElement(app: App): void {
  vants.forEach((vant) => {
    app.component(vant.name, vant)
  })
}
