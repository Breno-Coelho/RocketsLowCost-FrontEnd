import React from "react";
import { useNavigate } from "react-router-dom";

import './HistoryPage.css'

function HistoryPage () {

    const navigate = useNavigate();
    const validaUser = () => {
        navigate('/check');
    }

    return (
        <><h1>PAGINA DE LANÇAMENTOS</h1>
        </>
    )
}

export default HistoryPage;

