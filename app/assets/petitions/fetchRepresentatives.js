import { fetchData } from "./fetchData";
import { mailerExtracter } from "../helpers/mailerExtracter";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowEmailForm, setShowFindForm, setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    const emails = await mailerExtracter(datos.data)
    setAllDataIn(emails)
    setMp(datos.data)
    setShowLoadSpin(false)
    setShowEmailForm(false);
    setShowFindForm(true);
     await console.log(emails)
}


export{
    fetchRepresentatives
}
