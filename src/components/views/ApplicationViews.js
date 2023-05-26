import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"
import { Dice } from "../Dice/Dice"
import { Grimoire } from "../Grimoire/Grimoire"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Translate Shop</h1>
                    <div>Your one-stop-shop to get all your code translated</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketList /> } />
                <Route path="dice" element={ <Dice /> } />
                <Route path="grimoire" element={ <Grimoire /> } />
            </Route>
        </Routes>
    )
}