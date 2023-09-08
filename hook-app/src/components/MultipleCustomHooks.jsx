import {useFetch} from "../hook/useFetch.jsx";
import {useCounter} from "../hook/useCounter.js";
import {LoadingCount} from "./LoadingCount.jsx";
import {Quote} from "./Quote.jsx";

export const MultipleCustomHooks = ()=>{

    const {counter, increment} = useCounter(0)

    const {data, isLoading, hasError}= useFetch('https://api.breakingbadquotes.xyz/v1/quotes/')

    console.log({data, isLoading, hasError})

    const {quote, author} = !!data && data[0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                (isLoading) ?
                    (
                        <LoadingCount></LoadingCount>
                    ) :
                    (
                        <Quote quote={quote} author = {author}></Quote>
                    )
            }





        </>
    )
}
