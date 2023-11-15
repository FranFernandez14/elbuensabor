import React, { useEffect } from "react";
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import "./ComboBox.css"

export default function ComboBox(
    props: {
        children: React.ReactNode,
        placeholder ?: string,
        change ?: (id: number) => void,
        fullWidth?: boolean,
        default?:number
    }
) {

    const [open, setOpen] = React.useState(false);
    
    interface selectedItem {
        element : React.ReactNode,
        id : number
    }

    function toggleComboBox() {
        setOpen(!open);
    }

    const [selected, setSelected] = React.useState<selectedItem>({element : undefined, id :-1});

    const [children, setChildren] = React.useState<React.ReactNode[]>([]);
    function select(e : React.ReactNode, id : number) {
        setSelected({element : e, id : id});
        if(props.change !== undefined) {
            props.change(id);
        }
        setOpen(false);
    }
    useEffect(()=>{
        const children = React.Children.map(
            props.children, 
            child => {
                if(React.isValidElement(child)) {
                    let aux = React.cloneElement(child, {select : select}, child.props.children);
                    if(props.default !== undefined && child.props.id === props.default) {
                        setSelected({element : aux, id : props.default});
                    }; 
                    return aux;
                }
                return child;
            }
        );
        if(children === undefined || children === null) return;
        setChildren(children);
    },[]);
    
    return (
        <div className="ComboBox" style={{
            width: props.fullWidth ? "100%" : "fit-content"
        }}>
            <div className="ComboBoxHead" onClick={toggleComboBox}>
                {selected.element}
                <span className="placeholder">
                    {props.placeholder !== undefined && selected.element === undefined ? props.placeholder : ""}
                </span>
                <Icon size={IconSize.SMALL} src={open ? "images/comboboxopened.svg" : "images/comboboxclosed.svg"}/>
            </div>
            <div className="ComboBoxBody" style={
                {
                    maxHeight: open ? "250%" : "0"
                }
            }>
                {children}
            </div>
        </div>
    )
}