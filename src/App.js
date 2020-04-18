import React, {useState} from "react"
import Input from "./Input"
import Table from "./Table"

const App = () => {

    const [items, setItems] = useState([])
    const onSave = (value) => {
        items.push(value)
        setItems([...items])
    }
    return (
        <div className="container-fluid">
            <Input onSave={onSave}/>
            <Table items={items}/>
        </div>
    )
}

export default App