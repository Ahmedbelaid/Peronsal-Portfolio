import React, { lazy } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import ProjectsGallery from "./components/ProjectsGallery";
import Skills from "./components/Skills";
import Background3d from "./components/Background3d.js/Background3d";
import MessageBox from "./components/MessageBox/MessageBox";

const MainHome = lazy(() => import("./pages/MainHome"));
const Navbar = lazy(() => import("./components/Navbar"));
const Background3d = lazy(() => import("./components/Background3d.js"));
const ProjectsGallery = lazy(() => import("./components/ProjectsGallery"));
const Skills = lazy(() => import("./components/Skills"));
const MessageBox = lazy(() => import("./components/MessageBox"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/Loader"));

const Routes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Loader />
            <Navbar />
            {!isMobile && <Social />}
            <Switch>
                <Route exact path="/" component={MainHome} />
            </Switch>
            <Background3d/>
        <ProjectsGallery/>
        <Skills/>
        <MessageBox/>
            <Footer />
        </>
    );
};

export default Routes;
