import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardDetails from "../../components/CardDeatils";
import Header from "../../components/Header";
import TitlePage from "../../components/TitlePage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useProtectPageDeatils } from "../../hooks/useProtectPageDeatils";
import { DetailsContainer, MainDetails } from "./styled";

export default function DetailsPage() {
    const { state } = useLocation()
    useProtectPageDeatils(state)
    const context = useContext(GlobalContext);
    const { changeHeader, headerDetails } = context.headerSettings
    useEffect(() => {
        changeHeader(headerDetails)
    }, [])


    return (
        <>
            {state ?
                <DetailsContainer>
                    <Header pokemon={state} />
                    <MainDetails>
                        <TitlePage title={"Detalhes"} />
                        <CardDetails pokemon={state} />
                    </MainDetails>
                </DetailsContainer>
                : <></>
            }
        </>
    )
}