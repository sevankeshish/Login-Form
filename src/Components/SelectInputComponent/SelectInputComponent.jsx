import "./styles.scss"

const SelectInputComponent = ({select,select1,select2,select3 , handleSelectChange , defaultvalue}) => {
    return ( 
        <div className="select-pos">
            <select className="input-select " onClick={(e)=>handleSelectChange(e.target.value)}>
                <option value={defaultvalue}>{select}</option>
                <option value="1">{select1}</option>
                <option value="2">{select2}</option>
                <option value={defaultvalue}>{select3}</option>
            </select>
        </div>
     );
}
 
export default SelectInputComponent;