import React, {useRef} from "react"

const Input = (props) => {

    let myInput = useRef()

    const onClick = (evt) => {
        evt.preventDefault()
        props.onSave(myInput.current.value)
    }

    return (

        <form className="form-inline">
            <div className="form-group">
                <label htmlFor="INPUT_value" className="bmd-label-floating">Value</label>
                <input id="INPUT_value" type="text" ref={myInput} className="form-control" placeholder="enter value"/>
            </div>

            <button onClick={onClick} className="btn btn-raised btn-primary">Save</button>

        </form>
    )
}

export default Input