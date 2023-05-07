import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/tasks">Zadania</NavLink>
                    </li>
                    <li>
                        <NavLink to="/author">O autorze</NavLink>
                    </li>
                </ul>
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