import { PopupModal } from "react-calendly";
import * as React from "react";

// const Calendly = ({ prefill, pageSettings, utm }) => {
//     const url = "https://calendly.com/richard-broadwell/slovenia";
//     const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
//     return <button onClick={onClick}>Custom Button</button>;
// };

class Calendly extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
        };
      }

    render() {
        if (process.browser) {
            return (
                <div style={{height: '100%'}}>
                    <a style={{cursor: "pointer"}} onClick={() => this.setState({ isOpen: true })}>{this.props.children}</a>
                    <PopupModal
                    url="https://calendly.com/richard-broadwell/consultation"
                    // pageSettings={this.props.pageSettings}
                    // utm={this.props.utm}
                    // prefill={this.props.prefill}
                    onModalClose={() => this.setState({ isOpen: false })}
                    open={this.state.isOpen}
                    /*
                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                    */
                    rootElement={document.getElementById("app-root")}
                    />
                    
                </div>
                
              );
        } else {
            return <div/>;
        }
        
    }
}

export default Calendly;