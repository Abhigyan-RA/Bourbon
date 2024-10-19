import { createContext, useState } from "react";
import run from "../config/Bourbon";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");                  /*to save the input data*/
    const [recentPrompt, setRecentPrompt] = useState("");   /*when we click on the send button the input data will be saved here*/
    const [prevPrompts, setPrevPrompts] = useState([]);       /*an array to store in the recent data*/
    const [showResult, setShowResult] = useState(false);    /*it will hide the boxes in main page and display the results of the prompt*/
    const [loading, setLoading] = useState(false);          /*it will display a loading animation*/
    const [resultData, setResultData] = useState("");       /*display the results on the web page*/

    const onSent = async(prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)        //response will be stored in this response variable
        setResultData(response)
        setLoading(false)
        setInput("")
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider