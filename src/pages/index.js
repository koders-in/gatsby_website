import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../assets/theme';
import DashboardPage from "../components/pages/app";

const IndexPage = () => (
  <ThemeProvider theme={ defaultTheme }>
    <DashboardPage />
  </ThemeProvider>
);

export default IndexPage;
