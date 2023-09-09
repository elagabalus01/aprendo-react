export const ShowIncremente = ({incrementeFunction})=>{
    return (
        <button
            className="btn btn-primary"
            onClick={
            ()=>{incrementeFunction(5)}
        }
        >
            Incrementar
        </button>
    )
}
