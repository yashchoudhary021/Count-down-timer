function Input({onRequestStart}) {
    return <div>
        <label htmlFor="time-count">Enter time in seconds: </label>
        <input 
            type="number" 
            id="time-count" 
            onKeyDown={(e) => {
                if(e.keyCode === 13 || e.which === 13){
                    onRequestStart && onRequestStart(Math.floor(e.target.value))
                }
            }}
        />
    </div>
}

export default Input;