import MenuProvider from "./MenuProvider";
import AppBar from './AppBar';
import Drawer from "./Drawer";

function ToolbarAndMenu() {
    return (
        <MenuProvider>
            <AppBar />
            <Drawer />
        </MenuProvider>
    );
}

export default ToolbarAndMenu;
