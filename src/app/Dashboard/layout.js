import { Children } from "react";
import Sidebar from "./Sidebar";

export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Welcome to Next JS',
  }
  

const layout = ({children}) => {
    return (
        <div className="flex container mx-auto">
            <Sidebar/>
            {children}
        </div>
    );
};

export default layout;