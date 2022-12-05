
import React from "react"

class Dragdrop extends React.Component{
    render(){
        return(
            <div>

                <section className="section-drd p-30">
                    <div className="row-wrapper grid container grid-cols-3 rounded p-30 bg-white-blur cols-gap-50">
                        <div className="col-drd col-new-task">
                            <h2 className="col-title pb-15">New Task</h2>
                            <div className="column-wrapper">
                                <div className="card-item not-empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title">Task 1</h3>
                                        <p className="card-desc">This is Task 1 card, move to update the card status</p>
                                        <p className="card-exp-date">December 25, 2022</p></div>
                                    <div className="card-categories grid">
                                        <input type="text" className="status urgent" value="Priority" />
                                        <button className="add-more-cat btn1">+</button>
                                    </div>
                                </div>
                                <div className="card-item not-empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title">Task 2</h3>
                                        <p className="card-desc">This is Task 2 card, move to update the card status</p>
                                        <p className="card-exp-date">December 25, 2022</p></div>
                                    <div className="card-categories grid">
                                        <input type="text" className="status normal" value="Normal" />
                                        <button className="add-more-cat btn2">+</button>
                                    </div>
                                </div>

                                <div className="card-item not-empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title">Task 3</h3>
                                        <p className="card-desc">This is Task 3 card, move to update the card status</p>
                                        <p className="card-exp-date">December 25, 2022</p></div>
                                    <div className="card-categories grid">
                                        <input type="text" className="status before-urgent" value="Low Priority" />
                                        <button className="add-more-cat btn3">+</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-drd col-inprogress">
                            <h2 className="col-title pb-15">On-Progress</h2>
                            <div className="column-wrapper">
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-drd col-complete">
                            <h2 className="col-title pb-15">Complete</h2>
                            <div className="column-wrapper">
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                                <div className="card-item empty-card grid my-50" draggable="true">
                                    <div className="card-content grid"><h3 className="card-title"></h3>
                                        <p className="card-desc"></p>
                                        <p className="card-exp-date"></p></div>
                                    <div className="card-categories grid">                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Dragdrop;
