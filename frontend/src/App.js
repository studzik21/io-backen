import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ChooseForm, ClientViewForm, QuestionnaireResults, LecturerForm } from "./components/views";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <header className="App-header py-2 px-3">
                        <Link to="/">Strona główna</Link>
                        <ul>
                            <li>
                                <Link to="/addQuestionnaire">Nowa ankieta</Link>
                            </li>
                            <li>
                                <Link to="/questionnaires">Twoje ankiety</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="App-body">
                        <Routes>
                            <Route
                                path="/questionnaires"
                                element={<ChooseForm />}
                            />
                            <Route
                                path="/vote/:id"
                                element={<ClientViewForm />}
                            />
                            <Route
                                path="/addQuestionnaire"
                                element={<LecturerForm />}
                            />
                            <Route
                                path="/questionnaire/:id"
                                element={<QuestionnaireResults />}
                            />

                            <Route
                                path="*"
                                element={<h2>Page not found</h2>}
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;