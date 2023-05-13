import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { ListItem, NavList, StyledNavLink } from "./styled";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <NavList>
                    <ListItem>
                        <StyledNavLink to="/tasks">Zadania</StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to="/author">O autorze</StyledNavLink>
                    </ListItem>
                </NavList>
                <Switch>
                    <Route path="/tasks/:id">
                        <TaskPage />
                    </Route>
                    <Route path="/tasks">
                        <TasksPage />
                    </Route>
                    <Route path="/author">
                        <AuthorPage />
                    </Route>
                    <Route path="/">
                        <Redirect to="tasks" />
                    </Route>
                </Switch>
            </nav>
        </HashRouter>
    )
}

export default App