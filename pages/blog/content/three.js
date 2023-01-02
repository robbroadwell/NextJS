import * as React from "react";
import styled from 'styled-components'

import InfoNoPop from '../../../components/info-no-pop';
import BlogPost from '../post';
import { FcSearch, FcProcess, FcGraduationCap, FcAlarmClock, FcMoneyTransfer, FcCurrencyExchange } from "react-icons/fc";
import ToolTip from "../../../components/tooltip";

const style= {
    color: '#ffe9c4', 
    height: '50px',
    width: '40px'
}
  
const ThreeIcon = <FcGraduationCap style={style} />;

const Title = (index) => {
    switch (index) {
        case 1: return "Navigation"
        case 2: return "Communication"
        case 3: return "Shopping and Errands"
        case 4: return "Health Care"
        case 5: return "Learning the Language"
        default:
            break;
    }
}

const Description = (index) => {
    switch (index) {
        case 1: return "You can choose massive cities, cozy cities, small towns, or tiny villages. What appeals to you? Narrow your search on size."
        case 2: return "Do you like the climate in California? Or maybe you prefer Florida? Narrow your search based on familiar climate zones."
        case 3: return "Learn standard framework for understanding foreign governments. Get the big picture of the foreign political and economic order."
        case 4: return "Depending on your net worth, income level, and the sources of that income, different tax jurisdictions may benefit you more than others."
        case 5: return "Some cultures are serious, others relaxed. Consider the many subjective aspects of choosing a culture that fits your personality."
        default:
            break;
    }
}

const ThreeContent = ({ selectedIndex,  setSelected }) => {
    return (
    <div style={{flex: 1}}>
        <InfoNoPop index={1} href={"/library/where-to-move/cities-towns-villages"} setSelected={setSelected} selected={selectedIndex == 1} extraMargin={true}>{ Title(1) }</InfoNoPop>
        <InfoNoPop index={2} href={"/library/where-to-move/cities-towns-villages"} setSelected={setSelected} selected={selectedIndex == 2} extraMargin={true}>{ Title(2) }</InfoNoPop>
        <InfoNoPop index={3} href={"/library/where-to-move/cities-towns-villages"} setSelected={setSelected} selected={selectedIndex == 3} extraMargin={true}>{ Title(3) }</InfoNoPop>
        <InfoNoPop index={4} href={"/library/where-to-move/cities-towns-villages"} setSelected={setSelected} selected={selectedIndex == 4} extraMargin={true}>{ Title(4) }</InfoNoPop>
        <InfoNoPop index={5} href={"/library/where-to-move/cities-towns-villages"} setSelected={setSelected} selected={selectedIndex == 5} extraMargin={true}>{ Title(5) }</InfoNoPop>
      <ToolTip title={Title(selectedIndex)} description={Description(selectedIndex)} /> 
    </div>
  )
}

class Three extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        selectedIndex: 1
      };
    }

    setSelected = (index) => {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        return (
            <BlogPost icon={ThreeIcon} videoID={""} title={"Basic Skills for Expats"} subtitle={"Learn the Basics for Living Overseas"} content={<ThreeContent selectedIndex={this.state.selectedIndex} setSelected={(index) => this.setSelected(index)} />} />
        );
    }

}

export default Three