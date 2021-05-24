import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { homeLayout } from "./layouts";

// Route Views
import LiquidView from "./components/liquid/liquid";
import LiquidAssetView from "./components/liquid/liquid-asset/liquid-asset";
import LiquidAssetIssuedView from "./components/liquid/liquid-asset-issued/liquid-asset-issued";
import ExchangeView from "./components/exchange/exchange";
import LendingView from "./components/lending/lending";
import HomeView from "./components/home/home";
import AboutView from "./components/about/about";
import DocsView from "./components/docs/docs";
import ContactView from "./components/contact/contact";

export default [
  {
    path: "/",
    exact: true,
    layout: homeLayout,
    component: () => <Redirect to="/liquid" />
  },
  {
    path: "/liquid",
    exact: true,
    layout: homeLayout,
    component: LiquidView
  },
  {
    path: "/liquid-asset",
    layout: homeLayout,
    component: LiquidAssetView
  },
  {
    path: "/liquid-asset-issued",
    layout: homeLayout,
    component: LiquidAssetIssuedView
  },
  {
    path: "/exchange",
    layout: homeLayout,
    component: ExchangeView
  },
  {
    path: "/lending",
    layout: homeLayout,
    component: LendingView
  },
  {
    path: "/home",
    layout: homeLayout,
    component: HomeView
  },
  {
    path: "/about",
    layout: homeLayout,
    component: AboutView
  },
  {
    path: "/docs",
    layout: homeLayout,
    component: DocsView
  },
  {
    path: "/contact",
    layout: homeLayout,
    component: ContactView
  },
];