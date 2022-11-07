import MenuTestDrive from "../../patterns/composite/MenuTestDrive";
import {MenuClass, MenuType} from "../../patterns/composite/MenuComponent";

const Composite = () => {
    const test = MenuTestDrive;
    const menus = test.main();

    const Menu = ({menus}: {menus: MenuType}) => {
        if(menus.class === MenuClass.MENU) {
            return <ul>
                {
                    menus.menuItems?.map((menu)=> {
                        return <li key={menu.name}>
                            <ul>
                                <li>{menu.name}</li>
                                <li>{menu.description}</li>
                                <li>
                                    {menu.class === MenuClass.MENU &&
                                        <Menu menus={menu}/>}
                                </li>
                            </ul>
                        </li>
                    })
                }
            </ul>
        } else if (menus.class === MenuClass.ITEM) {
            return <ul>
                <li>{menus.name}</li>
                <li>{menus.description}</li>
                <li>{menus.isVegetarian}</li>
                <li>{menus.price}</li>
            </ul>
        }
        return null;
    }

    return (
        <div className="text-slate-400">
            <Menu menus={menus} />
            <hr></hr>
            <div className="text-slate-400">{JSON.stringify(menus, null, 2)}</div>
        </div>
    );
};

export default Composite;
