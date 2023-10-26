import React, { Component } from 'react';

class MultiDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numDice: 1,
      numFaces: 6,
      rolls: [],
      total: 0,
    };
  }

  handleNumDiceChange = (event) => {
    this.setState({ numDice: parseInt(event.target.value) });
  }

  handleNumFacesChange = (event) => {
    this.setState({ numFaces: parseInt(event.target.value) });
  }

  rollDice = () => {
    const { numDice, numFaces } = this.state;
    const rolls = [];
    let total = 0;
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numFaces) + 1;
      rolls.push(roll);
      total += roll;
    }
    this.setState({ rolls, total });
  }

  render() {
    const { numDice, numFaces, rolls, total } = this.state;

    return (
        <div className="card border-primary mb-3" style={{width: "98%", marginLeft: "1%", marginRight: "12.5%", display: "flex", flexDirection: "column", padding: "16px", borderRadius: "16px"}}>
            <div className="card-header" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>Multi-Dice</div>
            <div className="card-body" style={{display: "flex", flexDirection: "column"}}>

            <div className="form-group" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "48%"}}>
                    <label className="form-label mt-4">Quantity</label>
                    <input className="form-control" type="number" value={numDice} onChange={this.handleNumDiceChange} style={{textAlign: "center", height: "32px", width: "48%", margin: "1%"}}/>
                </div>
                
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "48%"}}>
                    <label className="form-label mt-4">Type</label>
                    <select className="form-control" value={numFaces} onChange={this.handleNumFacesChange} style={{textAlign: "center", height: "32px", width: "48%", margin: "1%"}}>
                        <option value={0}>Select Die...</option>
                        <option value={2}>D2</option>
                        <option value={4}>D4</option>
                        <option value={6}>D6</option>
                        <option value={8}>D8</option>
                        <option value={10}>D10</option>
                        <option value={12}>D12</option>
                        <option value={20}>D20</option>
                        <option value={100}>D100</option>
                    </select>
                </div>

            </div>

                

                <table style={{margin: "2%"}}>
                    <tbody>                        
                        <tr><td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>Individual Rolls</td><td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>{rolls.join(', ')}</td></tr>
                        <tr><td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>Total</td> <td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>{total}</td></tr>
                        <tr>
                            <td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>Average</td>
                            <td style={{width: "50%", border: "2px solid var(--bs-info)", textAlign: "center"}}>{isNaN((total / rolls.length).toFixed(2)) ? "-" : (total / rolls.length).toFixed(2)}</td>
                        </tr>

                    </tbody>
                </table>

                <button className="btn btn-primary" onClick={this.rollDice} style={{margin: "2%"}}>Roll Dice</button>

            </div>
            
      </div>
    );
  }
}

export default MultiDice;
