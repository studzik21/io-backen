import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ChooseForm, ClientViewForm, LecturerForm, LecturerQuestionaire } from "./components/views";
import 'react-toastify/dist/ReactToastify.css'
import LoginFormView from "./components/views/LoginFormView";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />

                    <div className="App-body">
                        <Routes>
                            <Route
                                path="/questionnaires"
                                element={<ChooseForm />}
                            />
                            <Route
                                path="/vote/:hash"
                                element={<ClientViewForm />}
                            />
                            <Route
                                path="/addQuestionnaire"
                                element={<LecturerForm />}
                            />
                            <Route
                                path="/questionnaire/:id"
                                element={<LecturerQuestionaire />}
                            />

                            <Route
                                path="/login"
                                element={<LoginFormView />}
                            />


                            <Route
                                path="*"
                                element={<h2>Page not found</h2>}
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
