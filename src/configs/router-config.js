import App from "../App";
import EmployeePage from "../pages/EmployeePage";

const routerConfig = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "employees", element: <EmployeePage /> }
        ]
    }
]

export default routerConfig;