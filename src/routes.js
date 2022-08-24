import About from "./pages/About";
import CandidateDetail from "./pages/CandidateDetail";
import Candidates from "./pages/Candidates";
import Dashboard from "./pages/Dashboard";
import Ranking from "./pages/Ranking";

export const routes = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: 'about',
        title: 'Acerca do Jogo',
        element: <About />,
    },
    {
        path: 'candidates',
        title: 'Candidatos',
        children: [
            {
                index: true,
                element: <Candidates />,
            },
            {
                path: 'candidate/:id',
                element: <CandidateDetail />,
            }

        ]
    },
    {
        path: 'ranking',
        title: 'Ranking',
        element: <Ranking />,
    },

]