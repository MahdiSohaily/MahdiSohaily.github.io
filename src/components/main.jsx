import React, { Component } from 'react'

export default class main extends Component {
  render() {
    return (
      <>
      <aside>
            <div className="toggle">
                <span>Box 1</span>
                <label className="toggle-control">
                    <input type="checkbox" />
                    <span className="control"></span>
                </label>
            </div>
            <div className="toggle">
                <span>Box 2</span>
                <label className="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span className="control"></span>
                </label>
            </div>
            <div className="toggle">
                <span>Box 3</span>
                <label className="toggle-control">
                    <input type="checkbox" />
                    <span className="control"></span>
                </label>
            </div>
            <div className="toggle">
                <span>Box 4</span>
                <label className="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span className="control"></span>
                </label>
            </div>

        </aside>
        <div className="box-wrapper">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
        </div>
      </>
    )
  }
}
