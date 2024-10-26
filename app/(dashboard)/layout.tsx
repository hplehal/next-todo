'use server'
import NewTodoForm from "@/components/NewTodoForm";

type DashboardProps = {
    children: React.ReactNode;
}

const DashboardLayouts: React.FC<DashboardProps>  = ({ children }) => {

    return(
        <div>
            <h1>TODOS PROJECT</h1>
            <div>
                <NewTodoForm />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayouts;