import "./Modal.css"

export default function Modal(props : {
    children: React.ReactNode,
    visible: boolean,
    maxWidth?: string
}) {
    return (
        <div className="Overlay" style={
            {
                display: props.visible? "flex" : "none"
            }
        }>
            <div className="Modal" style={
                {
                    maxWidth: props.maxWidth !== undefined ? props.maxWidth : "80%"
                }
            }>
                {props.children}
            </div>
        </div>
    )
}