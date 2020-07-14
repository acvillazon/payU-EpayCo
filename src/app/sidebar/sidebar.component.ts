import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  {
    path: "/inventory/all",
    title: "Inventory",
    icon: "nc-shop",
    class: "",
  },
  {
    path: "/inventory/cellphone",
    title: "Cellphones",
    icon: "nc-mobile",
    class: "",
  },
  {
    path: "/inventory/computer",
    title: "Computers",
    icon: "nc-laptop",
    class: "",
  },
  {
    path: "/inventory/clothes",
    title: "Clothes",
    icon: "nc-watch-time",
    class: "",
  },
  {
    path: "/inventory/Tv",
    title: "Television",
    icon: "nc-tv-2",
    class: "",
  },
  {
    path: "/inventory/gaming",
    title: "Gaming",
    icon: "nc-controller-modern",
    class: "",
  },
  {
    path: "/inventory/headphone",
    title: "Headphones",
    icon: "nc-headphones",
    class: "",
  },
  { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  { path: "/maps", title: "Maps", icon: "nc-pin-3", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
  },
  { path: "/user", title: "User Profile", icon: "nc-single-02", class: "" },
  { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
  },
  {
    path: "/upgrade",
    title: "Upgrade to PRO",
    icon: "nc-spaceship",
    class: "active-pro",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
