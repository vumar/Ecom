import guestRoutes from "./GuestRoutes";

const ROULES_ROUTES = {
    1: guestRoutes
}

export const getRoutes = (role) => {
    return ROULES_ROUTES[role];
}