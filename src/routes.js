import About from "./pages/About";
import Candidates from "./pages/Candidates";
import CandidatesDetail from "./pages/CandidatesDetail";
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
                element: <CandidatesDetail />,
            }

        ]
    },
    {
        path: 'ranking',
        title: 'Ranking',
        element: <Ranking />,
    },

]