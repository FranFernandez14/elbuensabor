import "./Modal.css"

export default function Modal(props : {
    children: React.ReactNode,
    visible: boolean
}) {
    return (
        <div className="Overlay" style={
            {
                display: props.visible? "flex" : "none"
            }
        }>
            <div className="Modal">
                {props.children}
            </div>
        </div>
    )
}