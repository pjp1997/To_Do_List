import { TABS } from "../redux/actions/type";

import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";


export const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
          

                <button
                    className= {tab===currentTab ? 'button selected':'btn'}
                    onClick={()=>dispatch(toggleTab(tab))}
                    >
                    {tab}
                </button>
            


        ))



    )


}

