import "./ComboBox.css"

export default function ComboBoxItem(
    props: {
        children: React.ReactNode,
        select ?: (e: React.ReactNode, id: number) => void,
        id : number
    }
) {

    function selectItem() {
        if(props.select !== undefined) {
            props.select(props.children, props.id);
        }
    }

    return (
        <div className="ComboBoxItem" onClick={selectItem}>
            {props.children}
        </div>
    )
}